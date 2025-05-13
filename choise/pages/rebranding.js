import Seo from "helpers/Seo";
import RebrandingMain from "layouts/Rebranding/RebrandingMain";
import RebrandingDescription from "layouts/Rebranding/RebrandingDescription";
import RebrandingLetter from "layouts/Rebranding/RebrandingLetter";
import RebrandingFaq from "layouts/Rebranding/RebrandingFaq";
import RebrandingWeb from "layouts/Rebranding/RebrandingWeb";
import RebrandingPathFar from "layouts/Rebranding/RebrandingPathFar";
import RebrandingVideoBanner from "layouts/Rebranding/RebrandingVideoBanner";
import MediaNewsList from "components/MediaNewsList";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Rebranding(){
	const {locale} = useRouter()
	const t = require(`locale/page-rebranding/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/rebranding.jpg"
			/>
			<Header/>
			<main>
				<RebrandingMain t={t.main}/>
				<RebrandingDescription t={t.description}/>
				<RebrandingLetter t={t.letter}/>
				<RebrandingPathFar t={t.path_far}/>
				<RebrandingVideoBanner t={t.video_banner}/>
				<MediaNewsList array={t.array}/>
				<RebrandingFaq t={t.faq}/>
				<RebrandingWeb t={t.web}/>
			</main>
			<Footer/>
		</>
	)
}