import axios from "axios";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {wallet, chainId, full} = req.query
		try {
			const coins = (await axios.get(`${process.env.DEFI_API}/tokens`, {
				params: {chainId, full: full === "true" ? 1 : 0}
			})).data
			
			const userCoins = (await axios.get(`${process.env.DEFI_API}/tokens/balances/${wallet}`)).data
			const array = []
			const findCoin = (coinId) => {
				return !!coins.find(item => item.id === coinId);
			}
			Object.keys(userCoins).map(function(key) {
				if (userCoins[key].chainId === chainId && findCoin(userCoins[key].id)) {
					array.push({
						...userCoins[key],
						...coins.find(item => item.id === userCoins[key].id)
					})
				}
			})
			res.json({status: true, array})
		} catch (error) {
			res.json({status: false, error, array: []})
		}
	} else res.json({status: false})
}