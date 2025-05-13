import styled from "styled-components";

export default function DocumentationButton() {
	return (
		<Wrapper className="documentation">
			<a href="https://docs.choise.com/more/token-and-tokenomics" rel="noreferrer nofollow" target="_blank">Documentation</a>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	a{
		border: 1px solid #0285FD;
		border-radius: 40px;
		padding: 8px 24px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: #0285FD;
		font-size: 14px;
		line-height: 24px;
		height: 40px;
		&:hover{
			background: #0285FD;
			color: #F9F9F9;
		}
	}
`
