import styled from "styled-components";
import copy from "copy-to-clipboard";
import {useEffect, useState} from "react";

export default function CopyOnClick({value, successText = "address copied", className}) {
	const [visible, setVisible] = useState(false)
	
	useEffect(() => {
		if (visible) {
			setTimeout(() => {
				setVisible(false)
			}, 2500)
		}
	}, [visible])
	
	const onHandleClick = () => {
		setVisible(false)
		setVisible(true)
		copy(value);
	}
	return (
		<>
			<Wrapper className={`copy_on_click ${className ? className : ""}`}>
				<span>{value}</span>
				<button onClick={onHandleClick}>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M2.17085 2.17085C2.28025 2.06146 2.42862 2 2.58332 2H9.70828C9.86299 2 10.0114 2.06146 10.1208 2.17085C10.2302 2.28025 10.2916 2.42862 10.2916 2.58332V3.37499C10.2916 3.92727 10.7393 4.37499 11.2916 4.37499C11.8439 4.37499 12.2916 3.92727 12.2916 3.37499V2.58332C12.2916 1.89818 12.0194 1.24111 11.535 0.756638C11.0505 0.272171 10.3934 0 9.70828 0H2.58332C1.89818 0 1.24111 0.272171 0.756638 0.756638C0.272171 1.24111 0 1.89818 0 2.58332V9.70828C0 10.3934 0.272171 11.0505 0.756638 11.535C1.24111 12.0194 1.89818 12.2916 2.58332 12.2916H3.37499C3.92727 12.2916 4.37499 11.8439 4.37499 11.2916C4.37499 10.7393 3.92727 10.2916 3.37499 10.2916H2.58332C2.42862 10.2916 2.28025 10.2302 2.17085 10.1208C2.06146 10.0114 2 9.86299 2 9.70828V2.58332C2 2.42862 2.06146 2.28025 2.17085 2.17085ZM7.54102 8.12489C7.54102 7.80273 7.80218 7.54156 8.12434 7.54156H15.2493C15.5715 7.54156 15.8326 7.80273 15.8326 8.12489V15.2498C15.8326 15.572 15.5715 15.8332 15.2493 15.8332H8.12434C7.80218 15.8332 7.54102 15.572 7.54102 15.2498V8.12489ZM8.12434 5.54156C6.69761 5.54156 5.54102 6.69816 5.54102 8.12489V15.2498C5.54102 16.6766 6.69761 17.8332 8.12434 17.8332H15.2493C16.676 17.8332 17.8326 16.6766 17.8326 15.2498V8.12489C17.8326 6.69816 16.676 5.54156 15.2493 5.54156H8.12434Z"/>
					</svg>
				</button>
			</Wrapper>
			<SuccessFrame className={visible ? "visible" : ""}>{successText}</SuccessFrame>
		</>
	)
}

const SuccessFrame = styled.div`
	width: 100%;
	background: linear-gradient(74.34deg, #5CEE9C -29.37%, #FFEF21 82.66%);
	height: 88px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: -88px;
	transition: all .3s ease-in-out;
	font-weight: 700;
	font-size: 24px;
	line-height: 100%;
	left: 0;
	z-index: 9999;
	text-transform: lowercase;
	&.visible{
		bottom: 0;
		transition: all .3s ease-in-out;
	}
`

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #F6F7F8;
	border: 1px solid #DDDDDD;
	border-radius: 500px;
	padding: 20px 3px 20px 20px;
	font-weight: 450;
	font-size: 16px;
	height: 56px;
	line-height: 100%;
	text-align: left;
	button{
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: #FFFB1F;
		svg{
			fill: #191B20;
			transition: all .3s ease-in-out;
		}
		&:hover{
			background: #0285FD;
			svg{
				fill: #F9F9F9;
				transition: all .3s ease-in-out;
			}
		}
	}
	span{
		display: block;
		width: calc(100% - 60px);
		padding-right: 20px;
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}
`