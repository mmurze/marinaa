import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {slug} = req.query
		try {
			const data = await db("short_links").where("slug", `https://choise.com/s/${slug}`).first()
			return res.status(200).json({status: true, ...data})
		} catch (error) {
			return res.status(404).json({status: false, error})
		}
	} return res.status(500).json({status: false})
}