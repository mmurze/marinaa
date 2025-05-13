import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Getting a separate reward for updating the control panel
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
		const {adminWallet, rewardId} = req.query
		if (checkAdmin(adminWallet)) {
			try {
				const data = await db("ambassador_rewards").where("id", rewardId).first()
				res.json({status: true, ...data})
			} catch (error) {
				res.json({status: false})
			}
		} else res.json({status: false})
	} else res.json({status: false})
}