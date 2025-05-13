import styled from "styled-components";
import LoadingAnimation from "components/LoadingAnimation";

export default function LoadingProfile() {
	return (
		<Wrapper>
			<LoadingAnimation/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 80px;
	.loading_animation{
		width: 100px;
		height: 100px;
	}
`