import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Getting a list of points for a user in a profile
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
	const {profileUserId, page, limit} = req.query
	try {
		const data = await db("ambassador_history")
			.where("profile_users_id", profileUserId)
			.orderBy("id", "DESC")
			.paginate({
				perPage: limit,
				currentPage: page,
				isLengthAware: true
			})
		res.json({status: true, total: Math.ceil(data.pagination.total/limit), ...data})
	} catch (error) {
		res.json({status: false})
	}
}