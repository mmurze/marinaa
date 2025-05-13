import db from "dbConnect";
import {getRewardPointItem} from "utils/ambassador";
import NextCors from "nextjs-cors";

/**
 * Write a task to the ambassador_rewards table from the public user
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
	const makeRequest = async (checkUser, rewardData, rewardId) => {
		// Upload user points
		const userPoints =  await db("profile").select("points").where("id", checkUser).first()
		const userCheckPoints = userPoints.points - rewardData.points
		if (userCheckPoints >= 0) {
			await db("profile").update("points", userCheckPoints).where("id", checkUser)
			// Subtract user points from total
			await db("ambassador_rewards").insert({
				ambassador_reward_id: rewardId,
				date: new Date(),
				profile_users_id: checkUser,
				reward_points: rewardData.points
			})
			await db("ambassador_history")
				.insert({
					date: new Date(),
					ambassador_rewards_id: rewardId,
					reason: `Reward ID ${rewardId} Result: Payment by point`,
					amount: rewardData.points * -1,
					profile_users_id: checkUser
				})
			res.json({status: true})
		} else res.json({status: false})
	}
	if (req.method === "POST") {
		const {rewardId, profileUserWallet} = req.body
		const checkUser = await db("profile")
			.select("id")
			.where("wallet", profileUserWallet).first()
		if (checkUser) {
			try {
				// Getting the number of points from WP
				const rewardData = await getRewardPointItem(rewardId)
				if (rewardData.single) {
					const checkSingleTaskUser = await db("ambassador_rewards")
						.select("id")
						.where("ambassador_reward_id", rewardId)
						.andWhere("profile_users_id", checkUser.id).first()
					if (checkSingleTaskUser) {
						res.json({status: true})
					} else await makeRequest(checkUser.id, rewardData, rewardId)
				} else await makeRequest(checkUser.id, rewardData, rewardId)
			} catch (error) {
				res.json({status: false, ...error})
			}
		} else res.json({status: false})
	} else res.json({status: false})
}