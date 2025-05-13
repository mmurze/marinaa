import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import htmlContent from "helpers/htmlContent";

export default function Million4choFooter({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<p>{htmlContent(t.description)}</p>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.footer`
	background: #111111;
	padding: 50px 0 130px 0;
	p{
		text-align: center;
		font-size: 12px;
		line-height: 150%;
		color: #393D49;
		a{
			color: #656D81;
		}
	}
`