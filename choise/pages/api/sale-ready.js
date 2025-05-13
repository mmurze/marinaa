import db from "dbConnect";
import checkApi from "utils/check-api";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "POST") {
		const {registered, plan} = req.body
		if (await checkApi(req, res)) {
			await db("sale_ready").insert({registered, plan})
			res.json({status: true})
		} else res.json({status: true})
	} else res.json({status: true})
}