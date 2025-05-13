import ServicePageWrapper from "components/ServicePageWrapper";
import Seo from "helpers/Seo";
import {useRouter} from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Logout(){
	const {locale} = useRouter()
	const {logout} = require(`locale/system-pages/${locale}.json`)
	return (
		<>
			<Seo
				title={logout.seo_title}
				description={logout.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ServicePageWrapper
					title={logout.title}
					description={logout.description}
					image="/pic/service/message-logout.png"
				/>
			</main>
			<Footer/>
		</>
	)
}