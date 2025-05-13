import nodemailer from 'nodemailer'
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === 'POST') {
		let transporter = nodemailer.createTransport({
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
		
		let message = {
			from: process.env.GoogleMailAccount,
			to: "0752545@gmail.com",
			subject: "Test subject",
			text: "test api Form",
			html: "test message"
		}
		
		await transporter.sendMail(message, (error) => {
			if (error) return res.json({status: false, error})
			transporter.close();
			res.json({status: true})
		});
		
	} else res.json({status: false})
}
