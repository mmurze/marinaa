import styled from "styled-components";
import Countdown from "react-countdown";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Million4choDayLeft() {
	const {locale} = useRouter()
	const {day_left} = require(`locale/components/${locale}.json`)
	
	const [active, setActive] = useState(false)
	useEffect(() => {
		if (typeof window !== "undefined") setActive(true)
	}, [])
	const renderer = ({days, completed}) => {
		if (completed) {
			return <span>0</span>
		} else return <span>{days}</span>;
	};
	return (
		active && (
			<Wrapper className="days_left">
				<img src="/pic/million4cho/timer.svg" alt="Days left"/>{day_left} <Countdown
				renderer={renderer}
				date={new Date(Date.UTC(2024, 1 - 1, 1, 12 - 3, 0, 0))}
			/>
			</Wrapper>
		)
	)
}

const Wrapper = styled.div`
	margin-left: 50px;
	border: 1px solid #EEEFF2;
	border-radius: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 9px 20px;
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;
	img{
		margin-right: 10px;
	}
	span{
		color: #4200FF;
		margin-left: 5px;
	}
`