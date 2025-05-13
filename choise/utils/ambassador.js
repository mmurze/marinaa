import axios from "axios";
import {state} from "state";

// Render list of tasks from WP
export async function renderTasksArray(){
	const welcomeTask = [
		{
			"id": 1,
			"title": "welcome task 👋",
			"content": "<p>Complete all steps to sign up for Ambassador Program.</p>",
			"welcome": true,
			"tags": ["Everyone"],
			"points": 200,
			"single": true,
			"visible": true
		}
	]
	const r = (await axios.get(`${process.env.DIRECTUS_API}/ambassadors_tasks`, {
		params: {
			sort: "-date_created",
			fields: "*"
		}
	})).data.data
	return welcomeTask.concat(r)
}

export async function findTaskById(id){
	return (await axios.get(`${process.env.DIRECTUS_API}/ambassadors_tasks`, {
		params: {
			sort: "-date_created",
			fields: "*",
			filter: {
				id: {
					_eq: id
				}
			}
		}
	})).data.data[0]
}

export async function findRewardById(id) {
	return (await axios.get(`${process.env.DIRECTUS_API}/ambassador_rewards`, {
		params: {
			sort: "-date_created",
			fields: "*",
			filter: {
				id: {
					_eq: id
				}
			}
		}
	})).data.data[0]
}

// Render the list of rewards from WP
export async function renderRewardsArray(){
	return (await axios.get(`${process.env.DIRECTUS_API}/ambassador_rewards`, {
		params: {
			sort: "-date_created",
			fields: "*"
		}
	})).data.data
}

// Getting a point from a WP page reward
export async function getRewardPointItem(id) {
	return (await axios.get(`${process.env.DIRECTUS_API}/ambassador_rewards`, {
		params: {
			sort: "-date_created",
			fields: "points, single",
			filter: {
				id: {
					_eq: id
				}
			}
		}
	})).data.data[0]
}

// Getting a point from a WP page task
export async function getTaskPointItem(id) {
	return (await axios.get(`${process.env.DIRECTUS_API}/ambassadors_tasks`, {
		params: {
			sort: "-date_created",
			fields: "points, single",
			filter: {
				id: {
					_eq: id
				}
			}
		}
	})).data.data[0]
}

// Выгрузка лидеров из базы profile_users
export async function renderLeaderboardArray(){
	return []
}

export function statusHistoryLabel(status){
	switch (status) {
		case 1: return "Approved"
		case 2: return "Refused"
		case 3: return "Pending"
	}
}

export function statusHistoryClass(status){
	switch (status){
		case 1: return "approved"
		case 2: return "refused"
		case 3: return "pending"
	}
}

// Пользователь записывает таск в базу
export async function writeTaskUser({taskId, userMessage, profileUserWallet}){
	return (await axios.post("/api/ambassador/user/write-user-task", {
		taskId, userMessage, profileUserWallet: profileUserWallet.toLowerCase()
	})).data
}

export async function writeTaskUserWelcome({taskId, userMessage, profileUserWallet}) {
	return (await axios.post("/api/ambassador/user/write-user-task-welcome", {
		taskId, userMessage, profileUserWallet: profileUserWallet.toLowerCase()
	})).data
}

// Получаем список тасков из базы для пользователя
export async function getTasksUserList({profileUserId, page, limit}) {
	return (await axios.get("/api/ambassador/user/get-user-tasks-list", {params: {profileUserId, page, limit}})).data
}

// Получаем список поинтов из базы для пользователя
export async function getPointsUserList({profileUserId, page, limit}) {
	return (await axios.get("/api/ambassador/user/get-points-list", {params: {profileUserId, page, limit}})).data
}

// Получение total поинтов для пользователя в профиль
export async function getUserPoints(profileUserId) {
	const data = (await axios.get("/api/ambassador/get-user-points",
		{params: {profileUserId}
		})).data
	if (data.status) state.ambassadorUserPoints = data.points
}

// Получение списка rewards для пользователя в профиль
export async function getRewardsUserList({profileUserId, page, limit}) {
	return (await axios.get("/api/ambassador/user/get-rewards-list", {params: {profileUserId, page, limit}})).data
}

// Запись в базу reward от пользователя
export async function writeRewardUser({rewardId, profileUserWallet}){
	return (await axios.post("/api/ambassador/user/write-user-reward", {rewardId, profileUserWallet: profileUserWallet.toLowerCase()})).data
}

// Проверка есть таск или ревард у пользователя или нет
export async function checkSingleTaskReward({userWallet, id, table}){
	return (await axios.get("/api/ambassador/user/check-single-item", {
		params: {userWallet: userWallet.toLowerCase(), id, table}
	})).data.status
}