import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {profileUserId, page, limit} = req.query
		try {
			const data = await db("ambassador_rewards")
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
	} else res.json({status: false})
}