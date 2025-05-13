import {checkAdmin} from "utils/admin-panel";
import moment from "moment";
import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Writing points to the ambassador_history table
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
		const {adminWallet, profileUserId, points, reason, taskId} = req.body
		if (checkAdmin(adminWallet)) {
			try {
				await db("ambassador_history").insert({
					date: moment(new Date()),
					ambassador_tasks_id: taskId,
					reason,
					amount: points,
					profile_users_id: profileUserId
				})
				res.json({status: true})
			} catch (error) {
				res.json({status: false, ...error})
			}
		} else res.json({status: false})
	} else res.json({status: false})
}