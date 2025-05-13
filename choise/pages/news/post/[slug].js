import {renderFullPost} from "utils/news";

export default function PostSlugRedirect() {
	return null
}

export async function getServerSideProps(ctx) {
	try {
		const data = await renderFullPost(ctx.query.slug)
		if (data) {
			return {
				redirect: {
					permanent: false,
					destination: `/news/${data.category.slug}/${ctx.query.slug}`
				}
			}
		} else {
			return {
				redirect: {
					permanent: false,
					destination: '/404'
				}
			}
		}
	} catch (error) {
		return {
			redirect: {
				permanent: false,
				destination: '/404'
			}
		}
	}
}