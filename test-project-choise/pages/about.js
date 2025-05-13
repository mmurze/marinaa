import Seo from "helpers/Seo";
import AboutPage from "layouts/About/AboutPage";
import axios from "axios";
export default function About({t}){
	return (
		<>
			<Seo
				title={t.title}
				description={t.description}
			/>
			<AboutPage t={t}/>
		</>
	)
}
export async function getServerSideProps({locale}) {
	const t = (await axios.get(`${process.env.ROUTE_PATH}/api/get-locale`, {
		params: {
			lang: locale,
			page: "page-about"
		}
	})).data
	if(!t){
		return {
			redirect:{
				permanent: false,
				destination: "/500"
			}
		}
	}
	return { props: {t: t.data} }
}