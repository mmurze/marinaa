import NextCors from "nextjs-cors";

export default async function checkApi(req, res){
	let success = false
	await NextCors(req, res, {
		methods: ["POST"],
		origin: 'https://choise.com',
		optionsSuccessStatus: 200,
	});
	const userAgent = req.headers['user-agent'];
	const agents = ["Opera", "Mozilla", "Google", "Chrome"]
	for (let i = 0; i<userAgent.length; i++) {
		if (userAgent.indexOf(agents[i]) !== -1) {
			success = true
			break
		}
	}
	
	const origin = req.headers['origin']
	if (!origin || origin.indexOf("https://choise.com") === -1) success = false
	if (process.env.NODE_ENV === "development") success = true
	return success
}