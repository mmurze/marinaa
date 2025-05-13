import db from "dbConnect";
import checkApi from "utils/check-api";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	const {address, phone, email, utm} = req.body
	if (await checkApi(req, res)) {
		try {
			await db("raydium_form").insert({address, phone, email, utm})
			res.json({status: true})
		} catch (error) {
			res.json({status: true})
		}
	} else {
		res.json({status: true})
	}
}