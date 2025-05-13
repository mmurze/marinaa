import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {adminWallet, page, limit, level} = req.query
		if (checkAdmin(adminWallet)) {
			let array
			if (level !== "all") {
				array = await db("profile")
					.where("points", ">", 0)
					.andWhere("amb_level", +level)
					.orderBy("points")
					.paginate({
						perPage: limit,
						currentPage: page,
						isLengthAware: true
					})
			} else {
				array = await db("profile")
					.andWhere("points", ">", 0)
					.orderBy("points")
					.paginate({
						perPage: limit,
						currentPage: page,
						isLengthAware: true
					})
			}
			const data = []
			array?.data.map(item => {
				item.wallet = `${item.wallet.slice(0, 8)} ... ${item.phone.slice(0 - 8)}`
				item.phone = `+${item.phone.slice(0, 5)}xxxx${item.phone.slice(0 - 2)}`
				data.push(item)
			})
			res.json({
				status: true,
				total: Math.ceil(array.pagination.total/limit),
				data,
			})
		} else res.json({status: false})
	} else res.json({status: false})
}