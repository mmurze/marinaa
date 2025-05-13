import axios from "axios";

export default function SlugLink(){
	return null
}

export async function getServerSideProps(ctx) {
	const r = (await axios.get("https://choise.com/api/short-link/redirect", {params: {
			slug: ctx.query.slug
	}})).data
	if (r.status) {
		return {
			redirect: {
				permanent: false,
				destination: r.redirect_slug
			}
		}
	} else {
		return {
			redirect: {
				permanent: false,
				destination: "/404"
			}
		}
	}
}