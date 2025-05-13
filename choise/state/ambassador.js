import {proxy} from "valtio";

export const stateAmbassador = proxy({
	ambassadorTasksAgree: false,
	ambassadorTasksArray: []
})