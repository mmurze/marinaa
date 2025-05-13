import nodemailer from 'nodemailer'
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === 'POST') {
		const {email, message} = req.body
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
		
		let messageData = {
			from: `${email} <${email}>`,
			to: "support@choise.com",
			subject: `Support message from ${email}`,
			html: message
		}
		
		await transporter.sendMail(messageData, (error) => {
			if (error) return res.json({status: false, error})
			transporter.close();
			return res.json({status: true})
		});
		
	} else res.json({status: false})
}
