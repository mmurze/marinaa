import Seo from "helpers/Seo";
import NewsCategories from "layouts/News/NewsCategories";
import NewsWrapper from "layouts/News/NewsWrapper";
import NewsSearchGrid from "layouts/News/NewsSearchGrid";
import NewsSearch from "layouts/News/NewsSearch";
import {searchPost} from "utils/news";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Search({search, data}){
	return (
		<>
			<Seo
				title={search}
				description=""
				image=""
			/>
			<Header/>
			<main>
				<NewsSearch searchValue={search}/>
				<NewsWrapper>
					<NewsCategories/>
					<NewsSearchGrid array={data.data} search={search}/>
				</NewsWrapper>
			</main>
			<Footer/>
		</>
	)
}

export async function getServerSideProps(ctx) {
	const data = await searchPost(ctx.query.s)
	return { props: {search: ctx.query.s, data} }
}