import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "POST") {
		const {utm, transaction, wallet, amountTotal, coin, period} = req.body
		try {
			await db("fend_data").insert({utm, transaction, wallet, amount: amountTotal, coin, period})
			res.json({status: true})
		} catch (error) {
			res.json({status: false})
		}
	} else res.json({status: false})
}