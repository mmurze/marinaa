import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	const {adminWallet} = req.query
	if (checkAdmin(adminWallet)) {
		if (req.method === "GET") {
			try {
				const data = await db("ambassador_levels").orderBy("level")
				res.json(data)
			} catch (error) {
				res.json([])
			}
		}
		if (req.method === "POST") {
		
		}
	} else res.json({status: false})
}