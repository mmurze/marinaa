import axios from "axios";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {chainId} = req.query
		try {
			const data = (await axios.get(`${process.env.DEFI_API}/gas`)).data
			res.json([
				{
					title: "fast",
					value: data[chainId].fast
				},
				{
					title: "average",
					value: data[chainId].average
				},
				{
					title: "slow",
					value: data[chainId].slow
				}
			])
		} catch (error) {
			res.json([])
		}
	} else res.json({status: false})
}