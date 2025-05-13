import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import {state} from "state";
import LinkNav from "next/link"
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";

export default function AmbassadorMain({t}) {
	const {wallet} = useSnapshot(stateWeb3)
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title} <img width={70} height={70} src="/pic/decor/round-arrow-right.svg" alt=""/></h1></Title>
					<p className="description">{t.description}</p>
					{
						wallet ? (
							<LinkNav href="/profile?tab=ambassadors" className="link">
								{t.your_ambassador}
							</LinkNav> ) : (
							<button className="link" onClick={() => state.walletConnectModal = true}>
								{t.button_link}
							</button>
						)
					}
					<backquote>{t.backquote}</backquote>
				</div>
				<div className="image">
					<Image src="/pic/ambassador/ambassador-main.jpg" width={572} height={577} priority={true} alt="ambassador program"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}
	.content{
		max-width: 500px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 400px;
		}
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
	.description{
		font-size: 24px;
		line-height: 140%;
		margin-top: 20px;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 150%;
			color: #80889C;
		}
	}
	.link{
		width: auto;
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFFB1F 91.92%);
		border-radius: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 60px;
		height: 56px;
		padding: 16px 40px;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
			width: 100%;
		}
	}
	backquote{
		display: block;
		font-size: 14px;
		line-height: 150%;
		color: #80889C;
		border-left: 3px solid #0285FD;
		padding-left: 15px;
		margin-top: 70px;
		max-width: 360px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-top: 20px;
		}
	}
	.title{
		img{
			position: relative;
			top: 13px;
			@media only screen and (max-width: 820px) {
				width: 40px;
				height: 40px;
				top: 7px;
			}
		}
	}
	.image{
		padding-right: 110px;
		padding-left: 40px;
		@media only screen and (max-width: 820px) {
			padding-right: 0;
			padding-left: 20px;
		}
		@media only screen and (max-width: 600px) {
			padding-left: 0;
			margin-top: 70px;
		}
	}
`