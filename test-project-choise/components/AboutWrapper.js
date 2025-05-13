import styled from "styled-components";

export default function AboutWrapper({children}) {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: 0 120px;
	@media only screen and (max-width: 1000px) {
		margin: 90px;
	}
	@media only screen and (max-width: 600px) {
		margin: 40px;
	}
`