import axios from "axios";
import random from 'just-random';

// UTM entry during wallet connection
export async function sendUtm(wallet, utm) {
	await axios.post(`${process.env.NFT_API}/Timestamp`, {wallet, utm})
}

// Get available countries for the cards page
export async function getAvailableCountries() {
	const r = (await axios.get(`${process.env.DIRECTUS_API}/available_countries`, {
		params: {fields: "array"}
	})).data.data.array
	const array = []
	r.map(item => array.push(item.country))
	return array
}

export async function getBurnCrpt(){
	return (await axios.get(`${process.env.DIRECTUS_API}/burning_schedule`, {
		params: {fields: "array"}
	})).data.data.array
}

export async function getBanners(){
	const bannerArray = (await axios.get(`${process.env.DIRECTUS_API}/choise_banners`, {
		params: {
			fields: ["*", "image.*", "mobile_image.*"],
			filter: {
				status: 'published'
			}
		}
	})).data.data
	if (bannerArray.length) {
		return random(bannerArray)
	} else return null
}