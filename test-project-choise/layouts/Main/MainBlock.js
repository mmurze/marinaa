import styled from "styled-components";
import Image from "next/image";
import Title from "helpers/Title";
import a from "next/link";
import CenterBlock from "helpers/CenterBlock";

export default function MainBlock({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
					<div className="links">
						<a href="#" target="_blank" rel="noreferrer" className="link_icon"><img src="/pic/icon_app_store.svg" alt="app store" width={21}/></a>
						<a href="#" target="_blank" rel="noreferrer" className="link_icon"><img src="/pic/icon_play_market.svg" alt="play market" width={21}/></a>
						<a href="#" target="_blank" rel="noreferrer" className="background_button">{t.link_name}</a>
					</div>
				</div>
				<div className="picture">
					<Image src="/pic/main/main-block/main_pic.jpg" alt="choise" width={585} height={602} priority={true}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	.center_block{
		margin-top: 150px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 770px) {
			margin-top: 90px;
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.content{
		max-width: 580px;
		width: 100%;
		margin-right: 10px;
		@media only screen and (max-width: 770px) {
			margin-right: 0;
			max-width: 650px;
			width: 100%;
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		margin-top: 40px;
		@media only screen and (max-width: 820px) {
			font-size: 16px;
		}
	}
	.links {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-top: 60px;
		gap: 10px;
		flex-wrap: wrap;
		a {
			border-radius: 30px;
			min-height: 60px;
		}
		.background_button {
			background:#FFFB1F;
			width: auto;
			padding: 0 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 18px;
			line-height: 24px;
			@media only screen and (max-width: 820px) {
				font-size: 16px;
			}
		}
		.link_icon {
			position: relative;
			background: #F6F7F8;
			width: 60px;
			img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%)
			}
		}
	}
	.picture{
		@media only screen and (max-width: 770px) {
			margin-right: 0;
			max-width: 450px;
			width: 100%;
		}
	}
`