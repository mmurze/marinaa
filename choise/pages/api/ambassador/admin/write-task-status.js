import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Write the status for the user's task in the control panel
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
	if (req.method === "POST") {
		const {adminWallet, status, userTaskId, comment} = req.body
		if (checkAdmin(adminWallet)) {
			try {
				await db("ambassador_tasks").update({
					status: +status,
					comment
				}).where("id", userTaskId)
				res.json({status: true})
			} catch (error) {
				res.json({status: false, ...error})
			}
		} else res.json({status: false})
	} else res.json({status: false})
}