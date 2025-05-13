import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Getting a separate task to update the control panel
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {adminWallet, taskId} = req.query
		if (checkAdmin(adminWallet)) {
			const data = await db("ambassador_tasks").where("id", taskId).first()
			try {
				res.json({status: true, data})
			} catch (error) {
				res.json({status: false})
			}
		} else res.json({status: false})
	} else res.json({status: false})
}