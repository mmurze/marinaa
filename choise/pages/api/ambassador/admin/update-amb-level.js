import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "POST") {
		const {adminWallet, level, id} = req.body
		if (checkAdmin(adminWallet)) {
			try {
				await db("profile").update("amb_level", level).where("id", id)
				res.json({status: true})
			} catch (error) {
				res.json({status: false, ...error})
			}
		} else res.json({status: false})
	} else res.json({status: false})
}