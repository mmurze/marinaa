import styled from "styled-components";
import LoadingAnimation from "components/LoadingAnimation";

export default function ClaimLoading({loading}) {
	return (
		loading ? (
			<Wrapper>
				<LoadingAnimation color="#ffffff"/>
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 40;
	background: rgba(0, 0, 0, .9);
	display: flex;
	align-items: center;
	justify-content: center;
`