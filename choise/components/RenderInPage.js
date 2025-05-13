import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function RenderInPage({children, slugArray}) {
	const {asPath} = useRouter()
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		slugArray.map(item => {
			if (asPath.split("?")[0] === item) {
				setVisible(true)
			}
		})
	}, [slugArray])
	return visible ? children : null
}
