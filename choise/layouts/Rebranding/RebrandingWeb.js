import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function RebrandingWeb({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="list">
					<div className="item">
						<Image src="/pic/rebranding/rebranding-web-1.jpg" layout="fill" objectFit="cover" objectPosition="center" priority={true} alt="Crypterium"/>
					</div>
					<div className="arrow"><img src="/pic/decor/round-arrow-right.svg" alt="Arrow"/></div>
					<div className="item">
						<Image src="/pic/rebranding/rebranding-web-2.jpg" layout="fill" objectFit="cover" objectPosition="center" priority={true} alt="Choise.com"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.title{
		text-align: center;
		max-width: 756px;
		width: 100%;
		margin: 0 auto;
	}
	.description{
		text-align: center;
		margin: 30px auto 0 auto;
		max-width: 460px;
		width: 100%;
		font-size: 20px;
		line-height: 150%;
		color: #80889C;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
		position: relative;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.item{
		width: calc(50% - 10px);
		border: 1px solid #EEEFF2;
		border-radius: 24px;
		height: 340px;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 768px) {
			height: 220px;
			border-radius: 20px;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			height: 330px;
			&:last-child{
				margin-top: 20px;
			}
		}
	}
	.arrow{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		@media only screen and (max-width: 600px) {
			display: none;
		}
		img{
			width: 66px;
			height: 66px;
		}
	}
`