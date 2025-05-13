import styled from "styled-components";
import LoadingAnimation from "components/LoadingAnimation";
import Image from "next/image";
import notFountImage from "public/pic/nft/not-found.png"
export default function NftLoadingNotFound({loading}) {
	return (
		<Wrapper>
			<div className="image">
				{loading ? <LoadingAnimation/> : (
					<Image className="not_found" src={notFountImage} alt="You haven’t got any CHO NFT tokens"/>
				)}
			</div>
			<h3>{loading ? "Loading" : "You haven’t got any CHO NFT tokens"}</h3>
			<div className="background">
				<img src="/pic/nft/not-found-background.svg" alt=""/>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	padding-top: 100px;
	text-align: center;
	position: relative;
	.image{
		display: flex;
		justify-content: center;
		position: relative;
		z-index: 10;
	}
	.not_found{
		width: 190px;
	}
	.link{
		position: relative;
		display: flex;
		justify-content: center;
		margin-top: 50px;
		z-index: 10;
		a, span{
			background: #FFFB1F;
			border-radius: 40px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 8px 24px;
			height: 56px;
			font-size: 14px;
			line-height: 24px;
			max-width: 220px;
			width: 100%;
		}
		span{
			opacity: .4;
			cursor: default;
		}
	}
	h3{
		font-size: 36px;
		line-height: 100%;
		max-width: 331px;
		width: 100%;
		margin: 55px auto 0 auto;
		position: relative;
		z-index: 10;
	}
	.background{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
`