import {useEffect} from "react";
import styled from "styled-components";
import Image from "next/image";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import htmlContent from "helpers/htmlContent";

export default function SupportFinal({t}){
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [])

	return (
		<Wrapper>
			<CenterBlock>
				<Title><h1><h1>{t.title}</h1></h1></Title>
				<p className="description">{htmlContent(t.description)}</p>
				<div className="image">
					<Image src="/pic/support/support-finish.jpg" width={521} height={406} alt="thank you"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	text-align: center;
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	button{
		margin-top: 50px;
	}
	h1{
		font-size: 60px;
		line-height: 76px;
		@media only screen and (max-width: 600px) {
			font-size: 48px;
			line-height: 61px;
		}
	}
	p{
		font-size: 18px;
		line-height: 26px;
		color: #7B8199;
		margin: 15px 0 0 0;
	}
	.image{
		margin-top: 22px;
	}
`
