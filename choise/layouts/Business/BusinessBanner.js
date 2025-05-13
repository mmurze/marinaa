import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import {state} from "state";

export default function BusinessBanner({t}) {
	return (
		<Wrapper>
			<CenterBlock width={990}>
				<div className="banner">
					<div className="content">
						<img src="/pic/logo-white.svg" alt="Choise.com custom plan"/>
						<h2>{t.title_1} <span>{t.title}</span> {t.title_2}</h2>
					</div>
					<div className="link_block">
						<Image src="/pic/business/banner-image.jpg" alt="Apply now" width={363} height={269} priority={true}/>
						<button onClick={() => state.businessFormModal = true}>{t.title_button}</button>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	color: #FFFFFF;
	@media only screen and (max-width: 820px) {
		margin-top: 80px;
	}
	.banner{
		background: #272A32;
		border-radius: 24px;
		padding: 50px 60px;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 30px;
		}
	}
	.content{
		max-width: 327px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
	h2{
		font-weight: 700;
		font-size: 48px;
		line-height: 110%;
		margin-top: 130px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
			font-size: 32px;
			line-height: 110%;
		}
		span{
			color: #FFFB1F;
		}
	}
	.link_block{
		max-width: 362px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-top: 40px;
		}
		button{
			margin-top: 40px;
			height: 56px;
			background: #FFFB1F;
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
		}
	}
`