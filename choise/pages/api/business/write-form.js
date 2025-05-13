import NextCors from "nextjs-cors";
import db from "dbConnect";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "POST") {
		const {name, phone, email, utm} = req.body
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				type: 'OAuth2',
				user: process.env.GoogleMailAccount,
				clientId: process.env.GoogleClientId,
				clientSecret: process.env.GoogleClientSecret,
				refreshToken: process.env.GoogleRefreshToken,
				accessToken: process.env.GoogleAccessToken
			},
		});
		const message = {
			from: process.env.GoogleMailAccount,
			to: "b2b.ba.choise@gmail.com",
			subject: "Choise.com page-business form",
			html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>UTM: ${utm}</p>`
		}
		await transporter.sendMail(message, () => {
			transporter.close();
		});
		await db("business_form").insert({
			date: new Date(), name, phone, email, utm
		})
		res.json({status: true})
	}	else res.json({status: false})
}