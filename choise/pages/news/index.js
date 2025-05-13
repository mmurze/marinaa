import Seo from "helpers/Seo";
import NewsSearch from "layouts/News/NewsSearch";
import NewsWrapper from "layouts/News/NewsWrapper";
import NewsCategories from "layouts/News/NewsCategories";
import NewsGrid from "layouts/News/NewsGrid";
import {renderAllPosts} from "utils/news";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function News({data, page}){
	const {locale} = useRouter()
	const t = require(`locale/page-news/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description=""
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<NewsSearch/>
				<NewsWrapper>
					<NewsCategories/>
					<NewsGrid data={data.data} page={page} title="all news" total={data.total} slug="all"/>
				</NewsWrapper>
			</main>
			<Footer/>
		</>
	)
}

export async function getServerSideProps(ctx) {
	const data = await renderAllPosts({page: ctx.query.page ? ctx.query.page : 1, limit: 9})
	return {props: {data, page: ctx.query.page ? ctx.query.page : 1}}
}