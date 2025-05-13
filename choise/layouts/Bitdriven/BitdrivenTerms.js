import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function BitdrivenTerms({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="link_block">
					<a href="/pdf/terms-of-bitdriven-asset-token.pdf" target="_blank" rel="noreferrer">{t.link}</a>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	.link_block{
		display: flex;
		justify-content: center;
		border-bottom: 1px solid #454A58;
		padding-bottom: 180px;
		@media only screen and (max-width: 600px) {
			padding-bottom: 80px;
		}
		a{
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			text-decoration-line: underline;
			text-transform: uppercase;
			color: #80889C;
			&:hover{
				color: #fff;
			}
		}
	}
`