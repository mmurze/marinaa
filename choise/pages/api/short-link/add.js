import {checkAdmin} from "utils/admin-panel";
import db from "dbConnect";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	const {slug, redirectSlug, adminWallet, description} = req.body
	if (checkAdmin(adminWallet)) {
		try {
			await db("short_links").insert({slug, redirect_slug: redirectSlug, description})
			const data = await db("short_links").orderBy("id").limit(1)
			res.json({status: true, data})
		} catch (error) {
			res.json({status: false, error})
		}
	} else res.json({status: false})
}