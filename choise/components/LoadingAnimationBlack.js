import styled from "styled-components";

export default function LoadingAnimationBlack() {
	return (
		<Wrapper className="loading_animation">
			<img src="/pic/loading-black.svg" alt="MintLoading"/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 40px;
	height: 40px;
	transform-origin: center center;
	animation: rotate 1.5s linear infinite;
	@keyframes rotate{
		to{ transform: rotate(360deg); }
	}
`