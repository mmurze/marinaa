import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Success(){
	const {locale} = useRouter()
	const {kyc_success} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={kyc_success.seo_title}
				description={kyc_success.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={kyc_success.title}
					description={kyc_success.description}
					image="/pic/service/kyc-ondato-success.png"
				/>
			</main>
			<Footer/>
		</>
	)
}