import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Signedup(){
	const {locale} = useRouter()
	const {email_signedup} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={email_signedup.seo_title}
				description={email_signedup.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={email_signedup.title}
					description={email_signedup.description}
					image="/pic/service/email-confirmation-signedup.png"
				/>
			</main>
			<Footer/>
		</>
	)
}