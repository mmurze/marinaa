import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import DecorTubes1 from "components/DecorItems/DecorTubes1";
import DecorTubes2 from "components/DecorItems/DecorTubes2";

export default function CardsBanner({t}) {
	const renderImage = <Image src="/pic/cards/banner-image.png" width={320} height={404} priority={true} alt="crypterium virtual card"/>
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="item content">
						<Title><h2>{t.title_1}</h2></Title>
						<p>{t.description_1}</p>
					</div>
					<div className="item image desktop">
						{renderImage}
					</div>
					<div className="item content">
						<Title><h2>{t.title_2}</h2></Title>
						<p>{t.description_2}</p>
					</div>
					<div className="item image mobile">{renderImage}</div>
					<DecorTubes1 className="d_top"/>
					<DecorTubes2 className="d_bottom"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 180px;
	color: #F9F9F9;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.d_top{
		position: absolute;
		top: -80px;
		left: 230px;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			display: none;
		}
	}
	.d_bottom{
		position: absolute;
		bottom: -50px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		margin-left: 140px;
		@media only screen and (max-width: 600px) {
			margin-left: 0;
		}
	}
	.banner{
		background: #0285FD;
		border-radius: 24px;
		padding: 55px 50px 0 50px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		position: relative;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		@media only screen and (max-width: 600px) {
			padding: 50px 20px 0 20px;
			margin-left: -20px;
			margin-right: -20px;
			border-radius: 40px 40px 0 0;
		}
	}
	.item{
		width: calc(100% / 3);
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
		&:nth-child(1){
			padding-right: 96px;
			padding-bottom: 105px;
			@media only screen and (max-width: 820px) {
				padding-right: 0;
				padding-bottom: 40px;
			}
		}
		&:nth-child(3){
			padding-left: 96px;
			padding-bottom: 105px;
			@media only screen and (max-width: 820px) {
				padding-left: 0;
				padding-bottom: 0;
			}
		}
	}
	.image{
		line-height: 0;
		display: flex;
		justify-content: center;
		&.desktop{
			@media only screen and (max-width: 820px) {
				display: none;
			}
		}
		&.mobile{
			display: none;
			margin-top: 60px;
			@media only screen and (max-width: 820px) {
				display: flex;
			}
		}
	}
	p{
		font-size: 18px;
		line-height: 150%;
		margin-top: 40px;
	}
`