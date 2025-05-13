import {proxy}  from "valtio"

const state = proxy({
	mobNav: false
})

export {state};