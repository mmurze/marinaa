import Seo from "helpers/Seo";
import AmbassadorMain from "layouts/Ambassador/AmbassadorMain";
import AmbassadorRewards from "layouts/Ambassador/AmbassadorRewards";
import AmbassadorTasks from "layouts/Ambassador/AmbassadorTasks";
import AmbassadorBanner from "layouts/Ambassador/AmbassadorBanner";
import AmbassadorRewardsList from "layouts/Ambassador/AmbassadorRewardsList";
import AmbassadorLeaderboard from "layouts/Ambassador/AmbassadorLeaderboard";
import FaqBlock from "components/FaqBlock";
import array from "public/data/ambassador-faq.json"
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Ambassador(){
	const {locale} = useRouter()
	const t = require(`locale/page-ambassador/${locale}.json`)
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/ambassador.jpg"
			/>
			<Header/>
			<main>
				<AmbassadorMain t={t.main}/>
				<AmbassadorRewards t={t.rewards}/>
				<AmbassadorTasks t={t.task}/>
				<AmbassadorBanner t={t.banner}/>
				<AmbassadorRewardsList t={t.rewards_list}/>
				<AmbassadorLeaderboard t={t.leader_board}/>
				<FaqBlock array={array} center={true}/>
			</main>
			<Footer/>
		</>
	)
}