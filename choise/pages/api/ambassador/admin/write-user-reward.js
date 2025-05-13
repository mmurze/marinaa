import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Create a reward for the user
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
	const {adminWallet, status, rewardId, points, reason, profileUserId, rewardTableId} = req.body
	if (checkAdmin(adminWallet)) {
		const userData = await db("profile").where("id", profileUserId).first()
		if (+status === 1) {
			try {
				await db("ambassador_rewards")
					.update({
						status: 1,
						comment: reason
					}).where("id", rewardTableId)
				res.json({status: true})
			} catch (error) {
				res.json({status: false, ...error})
			}
		} else {
			// If the cancellation of the reward
			try {
				// We return points to the user from the hold
				await db("profile").update({
					points: +userData.points + +points
				}).where("id", profileUserId)
				await db("ambassador_history").insert({
					date: new Date(),
					ambassador_rewards_id: rewardId,
					reason: `Reward ID ${rewardId} Result: Return of points`,
					amount: points,
					profile_users_id: profileUserId
				})
				// Write down the status of the reward
				await db("ambassador_rewards").update({
					status: 2,
					comment: reason
				}).where("id", rewardTableId)
				res.json({status: true})
			} catch (error) {
				res.json({status: false, ...error})
			}
		}
	} else res.json({status: false})
}