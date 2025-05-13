import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import Link from "next/link";

export default function LearnAboutCrypto({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="heading">
					<Title><h2><img src="/pic/decor/round-arrow-right.svg" alt="learn everything about crypto card here"/>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
				</div>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									{item.target ? (
										<a href={item.slug} target="_blank" rel="noreferrer">{item.title}</a>
									) : (
										<Link href={item.slug}>{item.title}</Link>
									)}
									<div className="top">
										<Title><h4>{item.title}</h4></Title>
										<p>{item.description}</p>
									</div>
									<div className="image">
										<Image src={item.image} width={385} height={295} priority={true} alt={item.title}/>
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
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.description{
		font-size: 16px;
		line-height: 150%;
		max-width: 380px;
		width: 100%;
		padding-left: 40px;
		@media only screen and (max-width: 820px) {
			padding-left: 0;
			max-width: 100%;
			margin-top: 20px;
		}
	}
	.title{
		max-width: 550px;
		width: 100%;
		img{
			position: relative;
			top: 8px;
			margin-right: 20px;
			@media only screen and (max-width: 600px) {
				margin-right: 10px;
				width: 35px;
				height: 35px;
				top: 5px;
			}
		}
	}
	.list{
		margin-top: 80px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 80px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
		@media only screen and (max-width: 600px) {
			margin: 40px -20px -20px -20px;
		}
	}
	.image{
		line-height: 0;
		margin-top: 70px;
	}
	.item{
		width: calc(100% / 3 - 10px);
		background: #F7F7F7;
		border-radius: 24px;
		padding: 30px 40px 0 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		position: relative;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 820px) {
			width: 310px;
			margin-right: 20px;
			flex: 0 0 auto;
		}
		&:hover{
			background: #FFFB1F;
			transition: all .3s ease-in-out;
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
			font-size: 0;
		}
		p{
			font-size: 16px;
			line-height: 140%;
			margin-top: 18px;
		}
	}
`