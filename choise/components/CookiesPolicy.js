import styled from "styled-components";
import {useEffect, useState} from "react";

export default function CookiesPolicy({t}) {
	const [visible, setVisible] = useState(false)
	
	useEffect(() => {
		if (localStorage.getItem("cookies") === "true") {
			setVisible(false)
		} else setVisible(true)
	}, [])
	
	const onHandleClick = () => {
		localStorage.setItem("cookies", "true")
		setVisible(false)
	}
	
	return (
		<Wrapper className={visible ? "visible" : ""}>
			<p>{t.description_link_a}<a href="/pdf/choise-cookie-policy.pdf" target="_blank" rel="noreferrer">{t.link_a}</a></p>
			<button onClick={onHandleClick}>{t.title_button}</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	background: #191B20;
	border-radius: 100px;
	max-width: 618px;
	width: calc(100% - 20px);
	display: none;
	justify-content: space-between;
	align-items: center;
	z-index: 999;
	padding: 10px 10px 10px 30px;
	&.visible{
		display: flex;
	}
	p{
		font-size: 14px;
		line-height: 130%;
		color: #fff;
		@media only screen and (max-width: 600px) {
			width: calc(100% - 100px);
			font-size: 12px;
		}
	}
	a{
		color: #80889C;
		&:hover{
			color: #FFF921;
		}
	}
	button{
		width: auto;
		background: #F6F7F8;
		border-radius: 40px;
		padding: 8px 35px;
		height: 46px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #191B20;
		@media only screen and (max-width: 600px) {
			padding: 8px 20px;
			font-size: 14px;
		}
		&:hover{
			background: #FFF921;
		}
	}
`
