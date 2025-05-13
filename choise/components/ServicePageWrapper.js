import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import htmlContent from "helpers/htmlContent";
import Image from "next/image";

export default function ServicePageWrapper({children, title, description, image}) {
	return (
		<Wrapper id="main_wrapper">
			<CenterBlock>
				<div className="image">
					<Image src={image} width={250} height={250} alt={title} priority={true}/>
				</div>
				<Title><h1>{htmlContent(title)}</h1></Title>
				<p className="description">{description}</p>
				{children}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	position: relative;
	overflow: hidden;
	padding-bottom: 40px;
	padding-top: 120px;
	@media only screen and (max-width: 600px) {
		padding-top: 100px;
	}
	&:before{
		content: url("/pic/service-blur.svg");
		position: absolute;
		top: -600px;
	}
	.image{
		@media only screen and (max-width: 600px) {
			max-width: 180px;
			width: 100%;
			margin: 0 auto;
		}
	}
	.center_block{
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		padding: 80px 0;
		@media only screen and (max-width: 600px) {
			padding: 40px 0 0 0;
		}
	}
	.title{
		max-width: 1024px;
		width: 100%;
		margin: 60px auto 0 auto;
		@media only screen and (max-width: 600px) {
			margin: 30px auto 0 auto;
		}
	}
	h1{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 60px;
		line-height: 100%;
		text-align: center;
		@media only screen and (max-width: 820px) {
			display: block;
		}
		span:before{
			display: block;
			content: url("/pic/service-title-round.svg");
			position: relative;
			top: 10px;
			margin: 0 20px;
			@media only screen and (max-width: 820px) {
				display: none;
			}
		}
	}
	.description{
		max-width: 546px;
		width: 100%;
		margin: 35px auto 0 auto;
		text-align: center;
		font-size: 18px;
		line-height: 130%;
	}
`