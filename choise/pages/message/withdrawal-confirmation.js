import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function WithdrawalConfirmation(){
	const {locale} = useRouter()
	const {withdrawal_confirmation} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={withdrawal_confirmation.seo_title}
				description={withdrawal_confirmation.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={withdrawal_confirmation.title}
					description={withdrawal_confirmation.description}
					image="/pic/service/message-successful-withdrawal.png"
				/>
			</main>
			<Footer/>
		</>
	)
}