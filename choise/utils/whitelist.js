import axios from "axios";
import {state} from "state";
import moment from "moment";

export async function getTotal(){
	const data = (await axios.get("/api/whitelist")).data
	if (data.status) state.whiteListTotal = data.data
}

export async function sendForm(name, email, phone){
	try {
		return (await axios.post("/api/whitelist", {
			date: moment(new Date()).format("DD.MM.YYYY"),
			time: moment(new Date()).format("HH:MM:ss"),
			name,
			email,
			phone,
			select: "Community sale",
			amount: 0
		})).data
	} catch (error) {
		console.log(error)
	}
}