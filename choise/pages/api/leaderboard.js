import db from "dbConnect";
import checkApi from "utils/check-api";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	switch (req.method) {
		case "GET": {
			const {limit} = req.query
			if (limit <= 50) {
				const data = await db("leadearboard")
					.where("system", false)
					.orderBy("trades")
					.limit(limit)
				data.map(item => {
					item.address = `${item.address.substring(0, 14)}...`
				})
				res.json(data)
			} else res.json([])
			break;
		}
		case "POST": {
			const {address, phone, email, utm} = req.body
			if (await checkApi(req, res)) {
				try {
					await db("leadearboard_form").insert({address, phone, email, utm})
					res.json({status: true})
				} catch (error) {
					res.json({status: true})
				}
			} else res.json({status: true})
			break
		}
	}
}