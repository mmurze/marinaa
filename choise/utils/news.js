import axios from "axios";
import moment from "moment";

export function directusImage(image) {
	return `${process.env.DIRECTUS_IMAGE}/${image.filename_disk}`
}

export async function getCategoryData(slug){
	const r = (await axios.get(`${process.env.DIRECTUS_API}/blog_category`, {
		params: {
			fields: "id, title, slug",
			filter: {slug: {_eq: slug}}
		}
	})).data.data[0]
	return r ? r : null
}

/**
 * Get related posts
 * @param postId
 * @param id
 * @returns {Promise<*>}
 */
export async function renderSimilarNews(postId, id){
	return (await axios.get(`${process.env.DIRECTUS_API}/blog`, {
		params: {
			limit: 3,
			sort: "-date_created",
			fields: "*, image.*, category.title, category.slug, category.id",
			filter: {
				category: {_eq: id},
				id: {_neq: postId}
			}
		}
	})).data.data
}

/**
 * Get all posts
 * @param page
 * @param limit
 * @returns {Promise<{total: number, data}>}
 */
export async function renderAllPosts({page, limit}) {
	const r = (await axios.get(`${process.env.DIRECTUS_API}/blog`, {
		params: {
			sort: "-date_created",
			fields: "*, image.*, category.title, category.slug",
			meta: "filter_count",
			filter: {
				status: {
					_eq: "published"
				}
			},
			limit,
			page,
		}
	})).data
	return {
		total: Math.ceil(r.meta.filter_count/limit),
		data: r.data
	}
}

/**
 * Getting posts from a category
 * @param page
 * @param limit
 * @param slug - category slug
 * @returns {Promise<{total: number, data}>}
 */
export async function renderCategoryPosts({page, limit, slug}) {
	const r = (await axios.get(`${process.env.DIRECTUS_API}/blog`, {
		params: {
			sort: "-date_created",
			fields: "*, image.*, category.title, category.slug",
			meta: "filter_count",
			filter: {
				status: {
					_eq: "published"
				},
				category: {
					slug: {_eq: slug}
				}
			},
			limit,
			page,
		}
	})).data
	return {
		total: Math.ceil(r.meta.filter_count/limit),
		data: r.data,
	}
}

/**
 * Download full post
 * @param slug - link to the page
 * @returns {Promise<null|*>}
 */
export async function renderFullPost(slug){
	return (await axios.get(`${process.env.DIRECTUS_API}/blog`, {
		params: {
			fields: "*, image.*, category.title, category.slug, category.id",
			filter: {
				slug: {_eq: slug}
			}
		}
	})).data.data[0]
}

/**
 * Upload date in moment format
 * @param date
 * @returns {{date: string, time: string}}
 */
export function renderDate(date){
	return {
		date: moment(date).format("MMM DD, YYYY"),
		time: moment(date).format("HH:MM")
	}
}

/**
 * Search post category post for 301 redirect (moving)
 * slug - ссылка на пост
 * @returns {Promise<{total: number, data}>}
 */
export async function searchPost(search) {
	return (await axios.get(`${process.env.DIRECTUS_API}/blog`, {
		params: {
			limit: 9,
			sort: "-date_created",
			fields: "*, image.*, category.title, category.slug, category.id",
			filter: {
				status: {
					_eq: "published"
				}
			},
			search: search
		}
	})).data
}