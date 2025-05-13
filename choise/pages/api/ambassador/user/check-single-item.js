import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Checking the user's task or reward
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
		const {userWallet, id, table} = req.query
		const userData = await db("profile").select("id").where("wallet", userWallet).first()
		if (table === "task") {
			const checkQuery = await db("ambassador_tasks")
				.where("profile_users_id", userData.id)
				.andWhere("ambassador_tasks_id", id)
				.andWhere("status", 1)
				.orWhere("status", 3).first()
			if (checkQuery) {
				res.json({status: true})
			} else res.json({status: false})
		} else {
			const checkQuery = await db("ambassador_rewards")
				.select("id")
				.where("profile_users_id", userData.id)
				.andWhere("ambassador_reward_id", id)
				.andWhere("status", 1)
				.orWhere("status", 3).first()
			if (checkQuery) {
				res.json({status: true})
			} else res.json({status: false})
		}
	} else res.json({status: false})
}