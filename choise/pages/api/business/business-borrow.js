import NextCors from "nextjs-cors";
import db from "dbConnect";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {coin, ltv} = req.query
		const data = await db("business_borrow_bids").where({
			coin: coin.toUpperCase(),
			ltv
		}).first()
		res.json({...data})
	}	else res.json({status: false})
}