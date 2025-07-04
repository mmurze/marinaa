import NextCors from "nextjs-cors";
import db from "dbConnect";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "POST") {
		const {choise_user, phone, email, currency, amount, utm} = req.body
		await db("btc_insurance_page").insert({
			choise_user, phone, email, currency, amount, utm, date: new Date()
		})
		res.json({status: true})
	} else res.json({status: false})
}
