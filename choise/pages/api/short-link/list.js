import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	const {adminWallet, limit, page} = req.query
	if (checkAdmin(adminWallet)) {
		try {
			const data = await db("short_links")
				.orderBy("id", "desc")
				.paginate({
					perPage: limit,
					currentPage: page,
					isLengthAware: true
				})
			res.json({status: true, total: Math.ceil(data.pagination.total/limit), data: data.data})
		} catch (error) {
			res.json({status: false, ...error})
		}
	} else res.json({status: false})
}