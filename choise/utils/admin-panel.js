import axios from "axios";

// Administrator check
export function checkAdmin(address){
	const check = process.env.ADMIN_ADDRESS.find(item => item.toLowerCase() === address.toLowerCase())
	return !!check;
}

// Changing the status of a task in the ambassador_task database
export async function takeTaskStatus({status, adminWallet, comment, userTaskId}) {
	return (await axios.post("/api/ambassador/admin/write-task-status", {
		adminWallet, status, comment, userTaskId
	})).data
}

// We write points for the user in profile_users
export async function takePointsToUser({status, points, adminWallet, profileUserId}) {
	return (await axios.post("/api/ambassador/admin/write-user-points", {
		adminWallet,
		points: +status === 1 ? points : 0,
		profileUserId
	})).data
}

// Getting a separate task to update the control panel
export async function takeTaskItem({taskId, adminWallet}) {
	return (await axios.get("/api/ambassador/admin/get-task-item", {
		params: {taskId, adminWallet}})).data.data
}

// Getting a separate reward for updating the control panel
export async function takeRewardItem({rewardId, adminWallet}) {
	return (await axios.get("/api/ambassador/admin/get-reward-item", {
		params: {rewardId, adminWallet}})).data
}

// Writing points to the ambassador_history database
export async function writePointsToUser({adminWallet, profileUserId, points, reason, taskId}){
	return (await axios.post("/api/ambassador/admin/write-points", {adminWallet, profileUserId, points, reason, taskId})).data
}

// Recording a reward in the database and assigning points
export async function writeRewardUser({adminWallet, status, rewardId, points, reason, profileUserId, rewardTableId}) {
	return (await axios.post("/api/ambassador/admin/write-user-reward", {adminWallet, status, rewardId, points, reason, profileUserId, rewardTableId})).data
}