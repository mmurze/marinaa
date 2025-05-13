import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import Million4choDayLeft from "layouts/Million4cho/Million4choDayLeft";
import Responsive from "helpers/Responsive";
export default function Million4choMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image_left">
					<Image src="/pic/million4cho/million4cho-main-left.png" width={594.62} height={641.45} alt="Publish one single tweet and win left" priority={true}/>
				</div>
				<h1>{t.title}</h1>
				<div className="win_image">
					<span className="win_label"><img src="/pic/million4cho/win-label.svg" alt="Win the grand prize"/></span>
					<Image src="/pic/million4cho/win-main.png" width={1111.44} height={374.12} priority={true} alt="Publish one single tweet and win"/>
				</div>
				<Responsive width={600} mobile={
					<div className="days_left_block">
						<Million4choDayLeft/>
					</div>
				}/>
				<div className="image_right">
					<Image src="/pic/million4cho/million4cho-main-right.png" width={624.01} height={521.41} alt="Publish one single tweet and win right" priority={true}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 30px;
	position: relative;
	overflow: hidden;
	padding-bottom: 100px;
	margin-bottom: -100px;
	@media only screen and (max-width: 600px) {
		margin-top: 0;
	}
	.center_block{
		background: url("/pic/million4cho/gray-grid.svg");
		border-bottom: 1px solid #EEEEEE;
		border-right: 1px solid #EEEEEE;
		padding: 130px 0 170px 0;
		@media only screen and (max-width: 600px) {
			padding: 80px 0 80px 0;
			background: url("/pic/million4cho/gray-grid-mobile.svg");
		}
	}
	h1{
		font-weight: 400;
		font-size: 36px;
		line-height: 130%;
		text-transform: uppercase;
		text-align: center;
		font-family: "Tusker Grotesk", sans-serif;
		position: relative;
		z-index: 10;
	}
	.win_image{
		margin: 0 100px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			margin: 0;
		}
	}
	.win_label{
		position: absolute;
		top: 40px;
		right: 0;
		z-index: 10;
		@media only screen and (max-width: 1024px) {
			right: -20px;
			top: 15px;
		}
		@media only screen and (max-width: 600px) {
			width: 50px;
		}
	}
	.image_left{
		position: absolute;
		top: 0;
		left: -100px;
		@media only screen and (max-width: 1050px) {
			left: -200px;
		}
		@media only screen and (max-width: 1024px) {
			width: 450px;
			left: -50px;
			top: 70px;
		}
		@media only screen and (max-width: 600px) {
			left: -50px;
			top: 120px;
			width: 200px;
		}
	}
	.image_right{
		position: absolute;
		top: 100px;
		right: -150px;
		@media only screen and (max-width: 1050px) {
			right: -250px;
		}
		@media only screen and (max-width: 1024px) {
			width: 450px;
			right: -140px;
			top: 100px;
		}
		@media only screen and (max-width: 600px) {
			width: 300px;
			right: -150px;
			top: 150px;
		}
	}
	.days_left_block{
		display: flex;
		justify-content: center;
		margin-top: 100px;
	}
	.days_left{
		margin-left: 0;
		background: #F9F9F9;
		border: 1px solid #EEEFF2;
		border-radius: 40px;
		display: inline-flex;
	}
`