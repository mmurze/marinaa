import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useEffect, useState} from "react";
import {getCategories} from "utils/help-zendesk";
import Title from "components/Title";
import Link from "next/link";

export default function HelpGetStarted({t}) {
	const [array, setArray] = useState([])
	useEffect(() => {
		getCategories().then(r => setArray(array.concat(r)))
	}, [])
	
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<Link href={`/help/${item.id}`}>{item.id}</Link>
									<h4>{item.name}</h4>
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
	@media only screen and (max-width: 600px) {
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
			justify-content: space-between;
		}
	}
	.item{
		width: calc(100% / 4 - 20px);
		margin-right: 20px;
		margin-bottom: 20px;
		position: relative;
		background: #F6F7F8;
		border-radius: 55px;
		height: 83px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 820px) {
			width: calc(100% / 3 - 20px);
		}
		@media only screen and (max-width: 600px) {
			width: calc(50% - 10px);
			margin-right: 0;
			height: 47px;
			padding: 5px 10px;
		}
		&:hover{
			background: #FFFB1F;
			transition: all .3s ease-in-out;
		}
		h4{
			font-weight: 500;
			font-size: 20px;
			line-height: 120%;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 120%;
			}
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 0;
			font-size: 0;
		}
	}
`