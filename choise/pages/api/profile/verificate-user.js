import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "POST") {
		const {wallet, phone} = req.body
		try {
			const checkData = await db("profile").where("phone", phone).first()
			if (checkData){
				await db("profile")
					.update({verificated: true, phone: checkData.phone, wallet})
					.where("id", checkData.id)
				res.json({status: true})
			} else {
				await db("profile").insert({wallet, phone, verificated: true, registration_date: new Date()})
				res.json({status: true})
			}
		} catch (error) {
			res.json({status: false, ...error})
		}
	}
}