import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {usdt, usdc, dai} = req.query
		const array = []
		if (usdt) {
			const data = await db("fend-usdt-type").whereIn("id", usdt.split(",").map(Number))
			array.push(...data)
		}
		if (usdc) {
			const data = await db("fend-usdc-type").whereIn("id", usdc.split(",").map(Number))
			array.push(...data)
		}
		if (dai) {
			const data = await db("fend-dai-type").whereIn("id", dai.split(",").map(Number))
			array.push(...data)
		}
		res.json({status: true, data: [...array]})
	} else res.json({status: false})
}