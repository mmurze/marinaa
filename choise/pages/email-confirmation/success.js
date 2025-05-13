import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Success(){
	const {locale} = useRouter()
	const {email_success} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={email_success.seo_title}
				description={email_success.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={email_success.title}
					description={email_success.description}
					image="/pic/service/email-confirmation-signedup.png"
				/>
			</main>
			<Footer/>
		</>
	)
}