import Seo from "helpers/Seo";
import NftMain from "layouts/Nft/NftMain";
import NftBenefits from "layouts/Nft/NftBenefits";
import NftTeam from "layouts/Nft/NftTeam";
import NftFaq from "layouts/Nft/NftFaq";
import NftJoinCommunity from "layouts/Nft/NftJoinCommunity";
import NftMedia from "layouts/Nft/NftMedia";
import MainChoiseEcosystem from "layouts/Main/MainChoiseEcosystem";
import NftCollections from "layouts/Nft/NftCollections";
import NftVideo from "layouts/Nft/NftVideo";
import MintLoading from "components/MintLoading";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Nft(){
	const {locale} = useRouter()
	const t = require(`locale/page-nft-main/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og/nft.jpg"
			/>
			<Header/>
			<main>
				<MintLoading/>
				<NftMain t={t.main}/>
				<NftBenefits t={t.benefits}/>
				<NftCollections t={t.collections}/>
				<NftVideo t={t.video}/>
				<MainChoiseEcosystem t={t.ecosystem}/>
				<NftMedia t={t.media}/>
				<NftJoinCommunity t={t.community}/>
				<NftTeam t={t.team}/>
				<NftFaq/>
			</main>
			<Footer/>
		</>
	)
}