import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Fail(){
	const {locale} = useRouter()
	const {bonus_fail} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={bonus_fail.seo_title}
				description={bonus_fail.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={bonus_fail.title}
					description={bonus_fail.description}
					image="/pic/service/bonus-fail.png"
				/>
			</main>
			<Footer/>
		</>
	)
}