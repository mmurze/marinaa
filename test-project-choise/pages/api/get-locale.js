export default async function handler(req, res){
	if(req.method === "GET"){
		const {lang, page} = req.query // GET
		const pageData = require(`locale/${page}/${lang}.json`)
		if (pageData){
			res.json({
				status: true,
				data: pageData
			})
		} else res.json({status: false})
	} else res.json({status: false})
}