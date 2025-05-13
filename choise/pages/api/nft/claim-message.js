import nodemailer from "nodemailer";
import checkApi from "utils/check-api";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	const {phone, transaction, tokenId, bonus, lockUp, linearRelease, tokenType} = req.body
	let transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com', port: 465, secure: true, auth: {
			type: 'OAuth2',
			user: process.env.GoogleMailAccount,
			clientId: process.env.GoogleClientId,
			clientSecret: process.env.GoogleClientSecret,
			refreshToken: process.env.GoogleRefreshToken,
			accessToken: process.env.GoogleAccessToken
		},
	});
	
	const renderTransaction = (transaction) => {
		if (process.env.NODE_ENV === "development") {
			return `https://testnet.bscscan.com/tx/${transaction}`
		} else return `https://bscscan.com/tx/${transaction}`
	}
	
	const htmlTemplate = () => {
		return (`
		<html lang="ru">
    <head>
     <title>Произвести начисление депозита</title>
    </head>
    <body>
     <h2>${process.env.NODE_ENV === "development" ? "ТЕСТОВАЯ ВЕРСИЯ!" : "Произвести начисление депозита:"}</h2>
     <table style="width: 100%; margin: 20px 0 0 0">
      <tr>
        <td style="padding: 3px 10px"><b>Номер телефона</b></td>
        <td style="padding: 3px 10px">${phone}</td>
      </tr>
      <tr><td colspan="2"><hr/></td></tr>
      <tr>
        <td style="padding: 3px 10px"><b>URL транзакции</b></td>
        <td style="padding: 3px 10px">
        	<a href="${renderTransaction(transaction)}" target="_blank" rel="noreferrer nofollow">${transaction.substr(0, 25)}...</a>
				</td>
      </tr>
      <tr><td colspan="2"><hr/></td></tr>
      <tr>
        <td style="padding: 3px 10px"><b>TokenID</b></td>
        <td style="padding: 3px 10px">${tokenId}</td>
      </tr>
     <tr><td colspan="2"><hr/></td></tr>
     <tr>
        <td style="padding: 3px 10px"><b>Тип токена</b></td>
        <td style="padding: 3px 10px">${tokenType}</td>
      </tr>
      <tr><td colspan="2"><hr/></td></tr>
      <tr>
        <td style="padding: 3px 10px"><b>Сумма начисления CHO</b></td>
        <td style="padding: 3px 10px">1500</td>
      </tr>
      <tr><td colspan="2"><hr/></td></tr>
      <tr>
        <td style="padding: 3px 10px"><b>Бонус</b></td>
        <td style="padding: 3px 10px">${bonus}</td>
      </tr>
      <tr><td colspan="2"><hr/></td></tr>
      <tr>
        <td style="padding: 3px 10px"><b>Сроки разблокировки</b></td>
        <td style="padding: 3px 10px">${lockUp}</td>
      </tr>
      <tr><td colspan="2"><hr/></td></tr>
      <tr>
        <td style="padding: 3px 10px"><b>Вестинг период</b></td>
        <td style="padding: 3px 10px">${linearRelease}</td>
      </tr>
     </table>
    </body>
   </html>
			`)
	}
	const message = {
		from: process.env.GoogleMailAccount,
		to: "support@choise.com",
		subject: "Заявка на Claim",
		html: htmlTemplate(),
	}
	if (await checkApi(req, res)) {
		await transporter.sendMail(message, (error) => {
			if (error) return res.json({status: false})
			transporter.close();
		});
		res.json({status: true})
	} else res.json({status: false})
}