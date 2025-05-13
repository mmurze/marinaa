import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

/**
 * Getting a list of tasks in the control panel depending on the filter status
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
		const {adminWallet, limit, page, status} = req.query
		if (checkAdmin(adminWallet)) {
			let data
			if (+status === 4) {
				data = await db("ambassador_tasks")
					.select("ambassador_tasks.*", "profile.phone", "profile.amb_level")
					.leftJoin("profile", "ambassador_tasks.profile_users_id", "profile.id")
					.where("ambassador_tasks_id", "!=", 1)
					.orderBy("id")
					.paginate({
						perPage: limit,
						currentPage: page,
						isLengthAware: true
					})
			} else {
				data = await db("ambassador_tasks")
					.select("ambassador_tasks.*", "profile.phone", "profile.amb_level")
					.leftJoin("profile", "ambassador_tasks.profile_users_id", "profile.id")
					.where("ambassador_tasks_id", "!=", 1)
					.andWhere("status", +status)
					.orderBy("id")
					.paginate({
						perPage: limit,
						currentPage: page,
						isLengthAware: true
					})
			}
			try {
				const dataTasks = []
				data?.data.map(item => {
					item.phone = `+${item.phone.slice(0, 5)}XXXX${item.phone.slice(0 - 2)}`
					dataTasks.push(item)
				})
				res.json({
					status: true,
					total: Math.ceil(data.pagination.total/limit),
					data: dataTasks
				})
			} catch (error) {
				res.json({status: false})
			}
		} else res.json({status: false})
	} else res.json({status: false})
}