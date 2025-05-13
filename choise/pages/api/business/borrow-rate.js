import NextCors from "nextjs-cors";
import axios from "axios";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {from, to} = req.query
		try {
			const data = (await axios.get("https://api.hitbtc.com/api/3/public/price/rate", {
				params: {from, to}
			})).data
			res.json({status: true, coin: from, ...data[from]})
		} catch (error) {
			res.json({status: false, ...error})
		}
	}	else res.json({status: false})
}