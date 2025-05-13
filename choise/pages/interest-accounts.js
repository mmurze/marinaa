import Seo from "helpers/Seo";
import DepositsMain from "layouts/Deposits/DepositsMain";
import DepositsSavingsAccount from "layouts/Deposits/DepositsSavingsAccount";
import DepositsBenefits from "layouts/Deposits/DepositsBenefits";
import DepositsSteps from "layouts/Deposits/DepositsSteps";
// import DepositsFaq from "layouts/Deposits/DepositsFaq";
import ChoiseProducts from "layouts/ChoiseProducts";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function InterestAccounts(){
	const {locale} = useRouter()
	const t = require(`locale/page-interest-accounts/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/deposits.jpg"
			/>
			<Header/>
			<main>
				<DepositsMain t={t.main}/>
				{/*<DepositsCoinsList/>*/}
				<DepositsSavingsAccount t={t.savingsAccount}/>
				{/*<DepositsHoldCrypto/>*/}
				<DepositsBenefits t={t.benefits}/>
				{/*<DepositsCalculateProfit/>*/}
				<DepositsSteps t={t.steps}/>
				{/*<DepositsFaq/>*/}
				<ChoiseProducts/>
			</main>
			<Footer/>
		</>
	)
}