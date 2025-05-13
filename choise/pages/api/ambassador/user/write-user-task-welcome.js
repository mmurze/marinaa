import db from "dbConnect";
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
		const checkUser = await db("profile").select("id", "points").where("wallet", profileUserWallet).first()
		if (profileUserWallet) {
			try {
				const checkSingleTaskUser = await db("ambassador_tasks").select("id").where("ambassador_tasks_id", 1).andWhere("profile_users_id", checkUser.id).first()
				if (checkSingleTaskUser) {
					res.json({status: false})
				} else {
					await db("ambassador_tasks").insert({
						ambassador_tasks_id: taskId,
						date: new Date(),
						user_message: userMessage,
						profile_users_id: checkUser.id,
						task_points: 200,
						status: 1,
						comment: "Good Job"
					})
					await db("profile").update("points", +checkUser.points + 200).where("id", checkUser.id)
					await db("ambassador_history").insert({
						date: new Date(),
						ambassador_tasks_id: taskId,
						reason: "Welcome task completed",
						amount: 200,
						profile_users_id: checkUser.id
					})
					res.json({status: true})
				}
			} catch (error) {
				res.json({status: false, ...error})
			}
		}
	} else res.json({status: false})
}