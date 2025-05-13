import {proxy} from "valtio";

export const stateNft = proxy({
	ownerLastCallRoundNft: [],
	ownerCharismBetaNft: [],
	ownerFendUSDT: [],
	ownerFendUSDC: [],
	ownerFendDAI: []
})