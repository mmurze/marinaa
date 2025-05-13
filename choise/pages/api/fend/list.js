import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {coin, tokens} = req.query
		const renderTable = () => {
			switch (coin){
				case "USDT": return "fend-usdt-type"
				case "USDC": return "fend-usdc-type"
				case "DAI": return "fend-dai-type"
			}
		}
		if (tokens) {
			const data = await db(renderTable()).whereIn("id", tokens.split(",").map(Number))
			res.json({status: true, data})
		} else {
			res.json({status: true, data: []})
		}
	} else res.json({status: false})
}