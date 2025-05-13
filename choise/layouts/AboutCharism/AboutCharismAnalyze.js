import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function AboutCharismAnalyze({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image">
					<Image src="/pic/charism/about-analyze.png" width={590} height={400} priority={true} alt="analyze you portfolio across all chains"/>
				</div>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.content{
		width: 524px;
		@media only screen and (max-width: 820px) {
			width: calc(50% - 20px);
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.image{
		margin-right: 88px;
		@media only screen and (max-width: 820px) {
			max-width: calc(50% - 20px);
			margin-right: 0;
		}
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-top: 25px;
		}
	}
	.description{
		font-size: 16px;
		line-height: 150%;
		color: #80889C;
	}
`