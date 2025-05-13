import { useMediaQuery } from 'react-responsive'
import {useEffect, useState} from "react";

/**
 * Адаптивные блоки убирающие дубли
 * @param children - десктоп версия
 * @param mobile - мобильная версия
 * @param width - ширина триггера в моб
 * @returns {*}
 * @constructor
 */
export default function Responsive({children, mobile, width = 768}){
	const [loading, setLoading] = useState(false)
	const isBigScreen = useMediaQuery({ query: `(min-width: ${width + 1}px)` })
	useEffect(() => {setLoading(true)}, [])
	return loading ? (isBigScreen ? children ? children : null : mobile ? mobile : null) : null
}