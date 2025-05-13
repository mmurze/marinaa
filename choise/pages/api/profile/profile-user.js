import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {wallet} = req.query
		let data = await db("profile").where({wallet}).first()
		if (data) {
			delete data.wallet
			data.phone = `${data.phone.slice(0, 5)}XXXX${data.phone.slice(0 - 2)}`
			res.json(data)
		} else res.json(null)
	}
}