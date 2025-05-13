import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function UnsuccessfulWithdrawal(){
	const {locale} = useRouter()
	const {unsuccessful_withdrawal} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={unsuccessful_withdrawal.seo_title}
				description={unsuccessful_withdrawal.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={unsuccessful_withdrawal.title}
					description={unsuccessful_withdrawal.description}
					image="/pic/service/message-unsuccessful-withdrawal.png"
				/>
			</main>
			<Footer/>
		</>
	)
}