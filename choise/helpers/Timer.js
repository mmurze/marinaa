import styled from "styled-components";
import Countdown from "react-countdown";
import {useEffect, useState} from "react";

export default function Timer({date, onCallBack}) {
	const [active, setActive] = useState(false)
	const now = new Date();
	const remainingTime = new Date(date).getTime() - now.getTime();

	useEffect(() => {
		if (typeof window !== "undefined") setActive(true)
	}, [])

	const renderer = ({days, hours, minutes, seconds, completed}) => {
		if (completed) {
			onCallBack(true)
			return <p>&nbsp;</p>
		} else {
			return (
				<div className="timer">
					<ul className="timer_list">
						<li>{days < 10 ? `0${days}` : days}</li>
						<li>{hours < 10 ? `0${hours}` : hours}</li>
						<li>{minutes < 10 ? `0${minutes}` : minutes}</li>
						<li>{seconds < 10 ? `0${seconds}` : seconds}</li>
					</ul>
					<ul className="timer_label">
						<li>days</li>
						<li>hours</li>
						<li>minutes</li>
						<li>seconds</li>
					</ul>
				</div>
			);
		}
	};

	return (
		<Wrapper className="timer">
			{active ? (
				<Countdown
					renderer={renderer}
					date={Date.now() + remainingTime}
				/>
			) : null}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	.timer{
		width: 100%;
		li{
			width: calc(100% / 4);
			text-align: center;
		}
	}
	.timer_list, .timer_label{
		display: flex;
		justify-content: space-between;
	}
	.timer_list{
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.2px;
    @media only screen and (max-width: 600px) {
	    font-size: 30px;
    }
	}
	.timer_label{
    color: #C6CAD3;
    font-size: 14px;
    font-weight: 450;
		margin-top: 5px;
	}
`
