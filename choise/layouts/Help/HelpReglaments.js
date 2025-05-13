import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import {getFilesList} from "utils/help-zendesk";
import Image from "next/image";
import {useRouter} from "next/router";
import Scroll from "react-scroll"
import htmlContent from "helpers/htmlContent";

export default function HelpReglaments({t}) {
	const {asPath} = useRouter()
	const scroller = Scroll.scroller;
	const [array, setArray] = useState([])
	
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0)
		}, 100)
		getFilesList().then(r => {
			setArray(r)
			if (asPath === "/help#reglaments" || asPath === "/help#conditions") {
				scroller.scrollTo("reglaments", {
					duration: 1000,
					delay: 100,
					smooth: true,
					offset: -150,
				})
			}
		})
	}, [])
	const splitBody = (body) => {
		const splitString = body.split(t.text)[1]
		if (splitString) {
			return splitString
		} else return body
	}
	return (
		<Wrapper id="reglaments">
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="link">{htmlContent(item.body)}</div>
									<div className="icon">
										<Image src="/pic/help/file-icon.png" width={49} height={58.3} priority={true} alt={item.name}/>
									</div>
									<div className="list_item">
										{htmlContent(splitBody(item.body))}
									</div>
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 820px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.list{
		margin-top: 50px;
		display: flex;
		flex-wrap: wrap;
		margin-right: -20px;
		margin-bottom: -20px;
		@media only screen and (max-width: 600px) {
			margin-right: 0;
			flex-direction: column;
		}
	}
	.icon{
		width: 50px;
	}
	.list_item{
		width: calc(100% - 50px);
		padding-left: 10px;
	}
	.item{
		width: calc(100% / 4 - 20px);
		margin-right: 20px;
		margin-bottom: 20px;
		position: relative;
		font-size: 16px;
		line-height: 120%;
		display: flex;
		align-items: center;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 820px) {
			width: calc(100% / 3 - 20px);
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% + 40px);
			display: flex;
			border-top: 1px solid #DDDFE4;
			margin: 0 -20px 0 -20px;
			padding: 15px 20px;
			font-size: 18px;
			line-height: 120%;
			&:last-child{
				border-bottom: 1px solid #DDDFE4;
			}
		}
		&:hover{
			color: #0285FD;
			transition: all .3s ease-in-out;
			a{
				color: #0285FD;
			}
		}
	}
	.link{
		font-size: 0;
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
		}
	}
`