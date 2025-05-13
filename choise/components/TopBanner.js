import {useSnapshot} from "valtio";
import {state} from "state";
import BannerBuybtc from "layouts/Banners/BannerBuybtc";
import BannerBtcInsurance from "layouts/Banners/BannerBtcInsurance";
import {useEffect} from "react";
import axios from "axios";

export default function TopBanner() {
	const snap = useSnapshot(state)
	useEffect(() => {
		axios.get(`${process.env.DIRECTUS_API}/top_banners`).then(r => {
			if (r.status) {
				state.topBanner = r.data.data.banner
			}
		})
	}, [])
	const renderBanner = () => {
		switch (snap.topBanner) {
			case "buybtc": return <BannerBuybtc/>
			case "btc-insurance": return <BannerBtcInsurance/>
			default: return null
		}
	}
	return renderBanner()
}
