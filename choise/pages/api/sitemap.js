import NextCors from "nextjs-cors";
import fs from "fs";
import path from "path";
const baseUrl = "https://choise.com"
const directusAPI = "https://cms.choise.com"
const accessToken = "72ZqJ8UF49hqf1ts"
export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
	});
	if (req.method === "GET") {
		const {token} = req.query
		if (token === accessToken) {
			function generateSitemap(pages) {
				let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
				xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
				pages.forEach((page) => {
					let url = `${baseUrl}${page}/`;
					if (path.basename(page) === "index") {
						url = url.replace(/\/index$/, "");
					}
					const stats = fs.statSync(`./pages${page}.js`);
					const lastMod = new Date(stats.mtime).toISOString().split('T')[0];
					xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1</priority>\n  </url>\n`;
				});
				xml += '</urlset>\n';
				fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);
			}
			
			function generateSitemapBlog(array) {
				let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
				xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
				array.forEach((page) => {
					let url = `${baseUrl}/news/${page.category.slug}/${page.slug}/`;
					const lastMod = new Date(page.date_updated ? page.date_updated : page.date_created).toISOString().split('T')[0];
					xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.5</priority>\n  </url>\n`;
				});
				xml += '</urlset>\n';
				fs.writeFileSync(path.join(process.cwd(), 'public', 'blog.xml'), xml);
			}
			
			function getAllPages(dir = 'pages', excludedFolders = []) {
				const pagesDir = path.join(process.cwd(), "pages");
				const pages = [];
				
				function traverse(dir) {
					const items = fs.readdirSync(dir, { withFileTypes: true });
					for (const item of items) {
						const itemPath = path.join(dir, item.name);
						if (item.isDirectory() && !excludedFolders.includes(item.name)) {
							traverse(itemPath);
						} else if (
							item.isFile() &&
							item.name.endsWith(".js") &&
							!item.name.startsWith("_") &&
							item.name !== "404.js" &&
							item.name !== "500.js" &&
							item.name !== "_document.js" &&
							item.name !== "app.js" &&
							item.name !== "link.js"
						) {
							const relativePath = path.relative(pagesDir, itemPath);
							let pagePath = "/" + relativePath.replace(/\.js$/, "");
							pages.push(pagePath);
						}
					}
				}
				traverse(pagesDir);
				return pages;
			}
			
			async function getAllPosts(catalog) {
				const data = await fetch(`${directusAPI}/items/${catalog}?fields=title,slug,date_created,date_updated,category.slug&status=published&limit=-1`)
					.then(response => response.json())
					.then(data => data)
					.catch(error => console.error(error));
				return data ? data?.data : []
			}
			
			let blogLength = 0
			const excludedFolders = ['admin-panel', 'api', 'c', "s", "news", "help"];
			const pages = getAllPages('pages', excludedFolders);
			await generateSitemap(pages)
			await getAllPosts("blog").then(r => {
				generateSitemapBlog(r)
				blogLength = r.length
			})
			
			res.json({status: true, pages: pages.length, blog: blogLength})
		} else res.json({status: false})
	} else res.json({status: false})
}
