import Seo from "helpers/Seo";
import BusinessMain from "layouts/Business/BusinessMain";
import BusinessBanner from "layouts/Business/BusinessBanner";
import BusinessBenefits from "layouts/Business/BusinessBenefits";
import BusinessRegulations from "layouts/Business/BusinessRegulations";
import BusinessCryptoBank from "layouts/Business/BusinessCryptoBank";
import BusinessCertificates from "layouts/Business/BusinessCertificates";
import BusinessSupported from "layouts/Business/BusinessSupported";
import BusinessForm from "layouts/Business/BusinessForm";
import Header from "components/Header";
import Footer from "components/Footer";
import BusinessPartners from "layouts/Business/BusinessPartners";
import BusinessCalculator from "layouts/Business/BusinessCalculator";
import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import BusinessFormModal from "layouts/Business/BusinessFormModal";
import Script from "next/script";
import {useRouter} from "next/router";

export default function Business(){
	const {locale} = useRouter()
	const t = require(`locale/page-business/${locale}.json`)

	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/business.jpg"
			/>
			<Script type="text/javascript" src="https://secure.intelligentcloudforesight.com/js/779368.js"/>
			<Header blackTheme={true}/>
			<noscript dangerouslySetInnerHTML={{__html: `<img alt="" src="https://secure.intelligentcloudforesight.com/779368.png" style="display:none;" />`}}/>
			<main className="black_background">
				<BusinessFormModal/>
				<BusinessMain t={t.main}/>
				<BusinessCalculator/>
				<BusinessBanner t={t.banner}/>
				<BusinessBenefits t={t.benefits}/>
				<BusinessRegulations t={t.regulations}/>
				<BusinessCryptoBank t={t.cryptoBank}/>
				<BusinessCertificates t={t.certificates}/>
				<BusinessSupported t={t.supported}/>
				<BusinessPartners t={t.partners}/>
				<Wrapper id="form_block">
					<CenterBlock width={990}>
						<BusinessForm/>
					</CenterBlock>
				</Wrapper>
			</main>
			<Footer blackTheme={true}/>
		</>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	color: #fff;
	@media only screen and (max-width: 820px) {
		margin-top: 80px;
	}
`
