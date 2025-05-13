import {proxy, ref} from 'valtio';
import {ethers} from "ethers";

const develop = process.env.NODE_ENV === "development";
const networkArray = [
	{
		label: "binance",
		network: "Binance Smart Chain MainNet",
		hexChainId: "0x38",
		chainId: 56,
		currencyName: "BNB",
		currencySymbol: "BNB",
		rpcUrl: "https://bsc-dataseed.binance.org",
		blockExplorerUrl: "https://bscscan.com/",
		decimals: 18,
		develop: false
	},
	{
		label: "binance",
		network: "Binance Smart Chain Testnet",
		hexChainId: "0x61",
		chainId: 97,
		currencyName: "BNB",
		currencySymbol: "BNB",
		rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
		blockExplorerUrl: "https://testnet.bscscan.com/",
		decimals: 18,
		develop: true
	},
	{
		label: "ethereum",
		network: "Ethereum Mainnet",
		chainId: 1,
		hexChainId: "0x1",
		currencyName: "Ether",
		currencySymbol: "ETH",
		rpcUrl: "https://mainnet.infura.io/v3/your-project-id",
		blockExplorerUrl: "https://etherscan.io/",
		decimals: 18,
		develop: false
	}
];

export const stateWeb3 = proxy({
	provider: null,
	network: null,
	hexChainId: null,
	balance: 0,
	wallet: null, // wallet address
	walletList: [], // all wallets list
	signer: null,
	walletType: null, // wallet type WalletConnect, MetaMask, Binance Smart Wallet, CoinBase Wallet
	walletInstall: false, // true if the wallet is installed in the browser
	async initWallet({provider, walletType}) {
		stateWeb3.provider = ref(provider)
		const network = await provider.getNetwork()
		const accounts = await provider.listAccounts();
		stateWeb3.network = Number(network.chainId)
		stateWeb3.hexChainId = this.getHexChainId(Number(network.chainId))
		stateWeb3.walletList = accounts
		stateWeb3.wallet = accounts[0].address
		stateWeb3.walletType = walletType
		stateWeb3.signer = await provider.getSigner()
		return true
	},
	getHexChainId(network){
		if (network === 97 && develop) {
			return networkArray.find(item => item.network === "Binance Smart Chain Testnet").hexChainId
		}
		if (network === 56 && !develop) {
			return networkArray.find(item => item.network === "Binance Smart Chain MainNet").hexChainId
		}
		if (network === 1) {
			return networkArray.find(item => item.network === "Ethereum Mainnet").hexChainId
		}
	},
	checkWallet(){
		if (window.ethereum && window.ethereum.isMetaMask) stateWeb3.walletInstall = true
	},
	async readContract({contractAddress, abi, functionName, params}){
		const contract = new ethers.Contract(contractAddress, abi, stateWeb3.provider);
		return await contract[functionName](...params)
	},
	async writeContract({contractAddress, abi, functionName, params}){
		const contract = new ethers.Contract(contractAddress, abi, stateWeb3.signer);
		const transaction =  await contract[functionName](...params)
		return transaction.hash ? transaction.hash : null
	},
	async checkTransaction(transaction){
		const receipt = await stateWeb3.provider.waitForTransaction(transaction);
		if (receipt && receipt.status === 1) {
			return {
				transaction,
				...receipt
			}
		} else {
			return {
				transaction,
				...receipt
			}
		}
	},
	async addNetwork({rpcUrl, chainId, chainName, currencyName, currencySymbol, decimals, blockExplorerUrl}){
		const networkInfo = {
			chainId: chainId,
			chainName: chainName,
			nativeCurrency: {
				name: currencyName,
				symbol: currencySymbol,
				decimals: decimals
			},
			rpcUrls: [rpcUrl],
			blockExplorerUrls: [blockExplorerUrl]
		};
		await window.ethereum.request({
			method: "wallet_addEthereumChain",
			params: [networkInfo]
		});
	},
	async changeOrAddNetwork(network){
		let networkData;
		if (network === "binance" && develop) {
			networkData = networkArray.find(item => item.network === "Binance Smart Chain Testnet")
		}
		if (network === "binance" && !develop) {
			networkData = networkArray.find(item => item.network === "Binance Smart Chain MainNet");
		}
		if (network === "ethereum") {
			networkData = networkArray.find(item => item.network === "Ethereum Mainnet");
		}
		const chainId = networkData.hexChainId;
		const chainName = networkData.network;
		const currencyName = networkData.currencyName;
		const currencySymbol = networkData.currencySymbol;
		const rpcUrl = networkData.rpcUrl;
		const decimals = networkData.decimals;
		const blockExplorerUrl = networkData.blockExplorerUrl;
		try {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: chainId }],
			});
			window.location.reload();
		} catch (error) {
			await this.addNetwork({rpcUrl, chainId, chainName, currencyName, currencySymbol, decimals, blockExplorerUrl})
		}
	},
	disconnectWallet(){
		stateWeb3.provider = null
		stateWeb3.network = null
		stateWeb3.balance = 0
		stateWeb3.wallet = null
		stateWeb3.signer = null
		stateWeb3.walletType = null
		stateWeb3.hexChainId = null
		if (localStorage.getItem("-walletlink:https://www.walletlink.org:DefaultJsonRpcUrl")) {
			localStorage.removeItem('-walletlink:https://www.walletlink.org:DefaultJsonRpcUrl');
			localStorage.removeItem('-walletlink:https://www.walletlink.org:DefaultChainId');
			localStorage.removeItem('-walletlink:https://www.walletlink.org:session:id');
			localStorage.removeItem('-walletlink:https://www.walletlink.org:session:secret');
			localStorage.removeItem('-walletlink:https://www.walletlink.org:session:linked');
			localStorage.removeItem('-walletlink:https://www.walletlink.org:IsStandaloneSigning');
			localStorage.removeItem('-walletlink:https://www.walletlink.org:Addresses');
			window.location.reload()
		}
		localStorage.removeItem("wallet_connected")
	}
});