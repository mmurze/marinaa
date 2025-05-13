import NextCors from "nextjs-cors";
import db from "dbConnect";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "POST") {
		const {total, token} = req.body
		if (token === "5Gk6LFKfN586R1hysEX824kwqw17Z7Gg") {
			try {
				await db("settings").update({
					bitdriven_total: total
				}).where("id", 1)
				res.json({status: true})
			} catch (error) {
				res.json({status: false, ...error})
			}
		} else res.json({status: false})
	}
	if (req.method === "GET") {
		const {token} = req.query
		if (token === "5Gk6LFKfN586R1hysEX824kwqw17Z7Gg") {
			const total = await db("settings").first()
			return res.json({total: total.bitdriven_total})
		} else res.json({status: false})
	}
}
