import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function DaoMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1><img src="/pic/decor/round-arrow-right.svg" alt="dao. your choise to make an impact" width={70} height={70}/>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<div className="links">
						<p className="label">{t.label}<span>{t.title_span}</span></p>
						<a href="https://dao.choise.com" target="_blank" rel="nofollow">{t.link_a}</a>
					</div>
				</div>
				<div className="image">
					<Image src="/pic/dao/main-dao.jpg" width={461} height={519} priority={true} alt="dao. your choise to make an impact"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	.center_block{
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.title{
		img{
			margin-right: 10px;
			@media only screen and (max-width: 600px) {
				width: 40px;
				height: 40px;
			}
		}
	}
	.content{
		max-width: 646px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
	.description{
		margin-top: 40px;
		max-width: 425px;
		width: 100%;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-top: 20px;
		}
	}
	.links{
		display: flex;
		align-items: center;
		margin-top: 50px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		a{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-left: 20px;
			border: 1px solid #191B20;
			border-radius: 40px;
			padding: 16px 40px;
			height: 56px;
			font-weight: 500;
			font-size: 18px;
			line-height: 24px;
			@media only screen and (max-width: 600px) {
				margin-left: 0;
				width: 100%;
				margin-top: 20px;
			}
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
	.label{
		background: #FFFDD9;
		padding: 15px 30px;
		border-radius: 16px;
		font-size: 18px;
		line-height: 150%;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		span{
			display: block;
			font-size: 14px;
			line-height: 150%;
			color: #757564;
		}
	}
	.image{
		padding-left: 40px;
		@media only screen and (max-width: 600px) {
			padding: 0 40px;
			margin-top: 40px;
		}
	}
`