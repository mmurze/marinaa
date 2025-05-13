import {proxy} from "valtio";
import {stateNft} from "state/nft";
import {stateProfile} from "state/profile";
import {stateAmbassador} from "state/ambassador";
import {stateSpecial} from "state/special";

const state = proxy({
	topBanner: null, // buybtc or btc-insurance
	utm: null, // UTM record if user logged in with parameters
	mint: true,
	burgerNav: false,
	whiteListTotal: null,
	analyticsSecret: null,
	loading: false,
	refreshNftList: false, // NFT Reload Trigger
	uniswapLink: "https://info.uniswap.org/#/pools/0x2cb162433e0cabac4825e6d198a125829156cc92", // Ссылка на uniswap
	raydiumLink: "https://dex.raydium.io/#/market/GScfvqNrEC9UE6vEeqCYQKJtmoGrN5ZAuTzx9uTHVjZs", // Ссылка на Raydium
	newsBackPage: null,
	profileAttention: true,
	businessFormModal: false,
	walletConnectModal: false,
	balanceArray: [],
	...stateNft,
	...stateProfile,
	...stateAmbassador,
	...stateSpecial
});

export {state};
