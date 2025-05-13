import {proxy} from "valtio";

export const stateProfile = proxy({
	profileUserId: null,
	phone: "",
	claimModalData: null, // Brand modal data
	ambassadorUserPoints: 0,
	verificatedProfileModal: false, // User validation modal
	verificatedUser: false
})
