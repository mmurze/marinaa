import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function CpaRegister({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="link">
					<a href="#" target="_blank">{t}</a>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 60px;
	.link{
		display: flex;
		justify-content: center;
	}
	a{
		display: inline-flex;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 7px 46px;
		align-items: center;
		justify-content: center;
		text-align: center;
		min-height: 63px;
	}
`