import axios from "axios";
import {state} from "state";

export async function getProfileData(userWallet) {
	const data = (await axios.get("/api/profile/profile-user", {params: {wallet: userWallet}})).data
	if (data) {
		state.phone = data.phone
		state.profileUserId = data.id
		if (data.verificated) state.verificatedUser = true
		return {
			phone: data.phone
		}
	} else {
		state.resolveClaim = false
		return {
			phone: ""
		}
	}
}

export async function check2Fa({phone, wallet, password, sessionId, code}) {
	const development = process.env.NODE_ENV === "development"
	const api = development ? "https://crpt-backend-main-service.dev.testessential.net/oauth/token" : "https://api.crypterium.com/oauth/token"
	const formData = new FormData()
	formData.append("grant_type", "mobile_phone")
	formData.append("number", phone)
	formData.append("password", password)
	try {
		const data = (await axios.post(api, formData, {
			headers: {
				"Authorization": "Basic ZG9jOnNlY3JldA==",
				"Content-Type": "multipart/form-data",
				"X-ConfirmationCode": btoa(`${sessionId}:${code}`)
			}
		})).data
		if (data) {
			return (await axios.post("/api/profile/verificate-user", {wallet: wallet.toLowerCase(), phone})).data
		}
		return {status: false}
	} catch (error) {
		return {
			status: false,
			errorId: error.response.data.errorId,
			message: error.response.data.message
		}
	}
}

export async function loginChoiseUser({phone, password, wallet}){
	const development = process.env.NODE_ENV === "development"
	const api = development ? "https://crpt-backend-main-service.dev.testessential.net/oauth/token" : "https://api.crypterium.com/oauth/token"
	const formData = new FormData()
	formData.append("grant_type", "mobile_phone")
	formData.append("number", phone)
	formData.append("password", password)
	try {
		const data = (await axios.post(api, formData, {
			headers: {
				"Authorization": "Basic ZG9jOnNlY3JldA==",
				"Content-Type": "multipart/form-data"
			}
		})).data
		if (data) {
			return (await axios.post("/api/profile/verificate-user", {wallet: wallet.toLowerCase(), phone})).data
		}
		return {status: false}
	} catch (error) {
		const errorId = error.response.data.errorId
		if (errorId === 424) {
			return {
				status: true,
				activated2FA: true,
				sessionId: error.response.data.sessionId
			}
		} else return {
			status: false,
			errorId: error.response.data.errorId,
			message: error.response.data.message
		}
	}
}