import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Accrual of points in the profile_users table for a specific user
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
		const {adminWallet, points, profileUserId} = req.body
		if (checkAdmin(adminWallet)) {
			try {
				const userData = await db("profile").where("id", profileUserId).first()
				await db("profile").update({
					points: +userData.points + +points
				}).where("id", profileUserId)
				res.json({status: true, points: +userData.points + +points})
			} catch (error) {
				res.json({status: false})
			}
		} else res.json({status: false})
	}
}