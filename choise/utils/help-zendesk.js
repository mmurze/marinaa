import axios from "axios";
const url = "https://crypterium.zendesk.com/api/v2/help_center"

/**
 * Getting partitions from zendesk
 * @returns {Promise<void>}
 */
export async function getCategories() {
	return (await axios.get(`${url}/categories/360003038919/sections?per_page=50`)).data.sections
}

/**
 * Post page output
 * @param id - страницы поста
 * @returns {Promise<*>}
 */
export async function getHelpPage(id) {
	return (await axios.get(`${url}/articles/${id}`)).data.article
}

/**
 * Download directory name by id
 * @param id - directory id
 * @returns {Promise<{total: *, array: *}>}
 */
export async function getCatalogPostsTitle(id) {
	return (await axios.get(`${url}/sections/${id}`)).data.section
}

/**
 * Unloading posts from a category
 * @param id
 * @returns {Promise<{total: *, array: *}>}
 */
// TODO make pagination
export async function getCatalogPostsList(id) {
	const data = (await axios.get(`${url}/sections/${id}/articles`)).data
	return {
		array: data.articles,
		total: data.page_count
	}
}

/**
 * Zendesk Search
 * @param search - слово поиска
 * @returns {Promise<any>}
 */
export async function getSearch(search) {
	return (await axios.get(`${url}/articles/search`, {params: {
		query: search
	}})).data.results
}

/**
 * Getting files from Zendesk
 * @returns {Promise<any>}
 */
export async function getFilesList() {
	const data = (await axios.get(`${url}/sections/360005367080/articles`)).data.articles
	if (data.length) {
		return data
	} else return []
}