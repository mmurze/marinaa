import Seo from "helpers/Seo";
import NewsSearch from "layouts/News/NewsSearch";
import NewsWrapper from "layouts/News/NewsWrapper";
import NewsCategories from "layouts/News/NewsCategories";
import NewsGrid from "layouts/News/NewsGrid";
import {getCategoryData, renderCategoryPosts} from "utils/news";
import Header from "components/Header";
import Footer from "components/Footer";

export default function NewsPosts({data, page, category}) {
	return (
		<>
			<Seo
				title={category.title}
				description=""
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<NewsSearch/>
				<NewsWrapper>
					<NewsCategories category={category.slug} main={true}/>
					<NewsGrid
						slug={category.slug}
						title={category.title}
						page={page}
						data={data.data}
						total={data.total}
					/>
				</NewsWrapper>
			</main>
			<Footer/>
		</>
	)
}

export async function getServerSideProps(ctx) {
	const category = await getCategoryData(ctx.query.category)
	if (!category) {
		return {
			redirect: {
				permanent: false,
				destination: '/news'
			}
		}
	}
	const data = await renderCategoryPosts({
		page: ctx.query.page ? ctx.query.page : 1,
		limit: 9,
		slug: ctx.query.category
	})
	return { props: {data, page: ctx.query.page ? ctx.query.page : 1, category} }
}