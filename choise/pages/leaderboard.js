import LeaderboardMain from "layouts/Leaderboard/LeaderboardMain";
import LeaderboardForm from "layouts/Leaderboard/LeaderboardForm";
import LeaderboardSteps from "layouts/Leaderboard/LeaderboardSteps";
import LeaderboardList from "layouts/Leaderboard/LeaderboardList";
import Seo from "helpers/Seo";
import LeaderboardBanner from "layouts/Leaderboard/LeaderboardBanner";
import LeaderboardInformation from "layouts/Leaderboard/LeaderboardInformation";
import LeaderboardManual from "layouts/Leaderboard/LeaderboardManual";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Leaderboard(){
	const {locale} = useRouter()
	const t = require(`locale/page-leaderboard/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/leaderboard.jpg"
			/>
			<Header/>
			<main>
				<LeaderboardMain t={t.main}/>
				<LeaderboardManual t={t.manual}/>
				<LeaderboardBanner t={t.banner}/>
				<LeaderboardInformation t={t.information}/>
				<LeaderboardForm t={t.form}/>
				<LeaderboardSteps t={t.steps}/>
				<LeaderboardList t={t.list}/>
			</main>
			<Footer/>
		</>
	)
}