import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Getting points for a specific user public
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
		const {profileUserId} = req.query
		try {
			const user = await db("profile").select("points").where("id", profileUserId).first()
			res.json({status: true, points: user.points})
		} catch (error) {
			res.json({status: false})
		}
	} else res.json({status: false})
}