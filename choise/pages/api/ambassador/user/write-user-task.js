import db from "dbConnect";
import {getTaskPointItem} from "utils/ambassador";
import NextCors from "nextjs-cors";

/**
 * Writing a task to the ambassador_tasks table from the public user
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
		const {taskId, userMessage, profileUserWallet} = req.body
		const checkUser = await db("profile").select("id").where("wallet", profileUserWallet).first()
		if (checkUser) {
			const taskData = await getTaskPointItem(taskId)
			try {
				if (taskData.single) {
					const checkSingleTaskUser = await db("ambassador_tasks")
						.select("id")
						.where("ambassador_tasks_id", taskId)
						.andWhere("profile_users_id", checkUser.id).first()
					if (checkSingleTaskUser) {
						res.json({status: true})
					} else {
						await db("ambassador_tasks").insert({
							ambassador_tasks_id: taskId,
							date: new Date(),
							user_message: userMessage,
							profile_users_id: checkUser.id,
							task_points: taskData.points
						})
						res.json({status: true})
					}
				} else {
					await db("ambassador_tasks").insert({
						ambassador_tasks_id: taskId,
						date: new Date(),
						user_message: userMessage,
						profile_users_id: checkUser.id,
						task_points: taskData.points
					})
					res.json({status: true})
				}
			} catch (error) {
				res.json({status: false})
			}
		}
	} else res.json({status: false})
}