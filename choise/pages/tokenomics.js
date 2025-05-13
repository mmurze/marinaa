import Seo from "helpers/Seo";
import TokenomicsMain from "layouts/Tokenomics/TokenomicsMain";
import TokenomicsDescription from "layouts/Tokenomics/TokenomicsDescription";
import TokenomicsCeFiEcosystem from "layouts/Tokenomics/TokenomicsCeFiEcosystem";
import TokenomicsUnderlyingTokens from "layouts/Tokenomics/TokenomicsUnderlyingTokens";
import TokenomicsInterconnection from "layouts/Tokenomics/TokenomicsInterconnection";
import ChoiseProducts from "layouts/ChoiseProducts";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Tokenomics(){
	const {locale} = useRouter()
	const t = require(`locale/page-tokenomics/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/tokenomics.jpg"
			/>
			<Header/>
			<main>
				<TokenomicsMain t={t.main}/>
				<TokenomicsDescription t={t.description}/>
				<TokenomicsUnderlyingTokens t={t.underlyingTokens}/>
				<TokenomicsInterconnection t={t.interconnection}/>
				<TokenomicsCeFiEcosystem t={t.ceFiEcosystem}/>
				{/*<TokenomicsRoadMap/>*/}
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}