import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function TokenomicsDescription({t}) {
	return (
		<Wrapper>
			<CenterBlock width={990}>
				<div className="description_block">
					<div className="content">
						<p className="description">{t.description}</p>
						<Title><h2>{t.title}</h2></Title>
					</div>
					<div className="image">
						<img src="/pic/tokenomics/t-description.svg" alt="choise.com ecosystem"/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 40px;
	@media only screen and (max-width: 820px) {
		margin-top: 0;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 30px;
	}
	.description_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: center;
		}
	}
	.content{
		max-width: 488px;
		width: 100%;
		margin-right: 20px;
		@media only screen and (max-width: 820px) {
			margin-right: 0;
		}
	}
	.image{
		@media only screen and (max-width: 820px) {
			margin-top: 30px;
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
	}
	.title{
		margin-top: 20px;
	}
	.description_image{
		margin-top: 70px;
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
	}
`