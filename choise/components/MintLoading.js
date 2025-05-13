import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";
import Image from "next/image";
import LoadingAnimationBlack from "components/LoadingAnimationBlack";
import {useRouter} from "next/router";

export default function MintLoading() {
	const {locale} = useRouter()
	const t = require(`locale/components/${locale}.json`)
	const snap = useSnapshot(state);
	
	return (
		<Wrapper className={snap.loading ? "active" : ""}>
			<div className="mint_loading_box">
				<div className="loading">
					<LoadingAnimationBlack/>
				</div>
				<div className="title">{t.mint_loading.processing}</div>
				<div className="background">
					<Image src="/pic/nft/loading.jpg" width={377} height={349} alt="Loading" priority={true}/>
				</div>
				<p className="description">
					{t.mint_loading.description}
				</p>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.8);
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	visibility: hidden;
	transition: all .3s ease-in-out;
	padding: 0 20px;
	&.active{
		opacity: 1;
		visibility: visible;
		transition: all .3s ease-in-out;
	}
	.mint_loading_box{
		max-width: 420px;
		width: 100%;
		min-height: 458px;
		background: #F9F9F9;
		border: 1px solid #1A1C21;
		box-sizing: border-box;
		border-radius: 500px 500px 8px 8px;
		letter-spacing: -0.03em;
		text-align: center;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 40px;
	}
	.title{
		font-weight: 700;
		font-size: 32px;
		line-height: 120%;
		margin-top: 70px;
		position: relative;
		z-index: 10;
	}
	.background{
		position: absolute;
		top: 22px;
		width: 100%;
		display: flex;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			top: 0;
		}
	}
	.description{
		font-size: 18px;
		line-height: 140%;
		color: #80889C;
		max-width: 293px;
		width: 100%;
		margin: 0 auto;
		position: relative;
		z-index: 10;
	}
	.loading{
		position: absolute;
		z-index: 10;
		width: 40px;
		height: 40px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin-left: 60px;
		margin-top: -60px;
	}
`