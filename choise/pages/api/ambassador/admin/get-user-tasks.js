import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {adminWallet, id} = req.query
		if (checkAdmin(adminWallet)) {
			const data = await db("ambassador_tasks")
				.where("profile_users_id", id)
				.orderBy("date")
			try {
				res.json({status: true, data})
			} catch (error) {
				res.json({status: false, ...error})
			}
		} else res.json({status: false})
	} else res.json({status: false})
}