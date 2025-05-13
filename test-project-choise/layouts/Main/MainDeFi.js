import styled from "styled-components";
import Title from "helpers/Title";
import Button from "components/Button";
import CenterBlock from "helpers/CenterBlock";

export default function MainDeFi({t}) {
	return (
		<Wrapper>
			<CenterBlock width={1100}>
				<div className="text">
					<Title>
						<h2>{t.title}</h2>
						<Button>{t.button_name}</Button>
					</Title>
					<p className="description">{t.description}</p>
				</div>
				<div className="computer">
					<img src="/pic/main/main-charism-wallte/comp.svg" alt="comp"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #28D180 url("/pic/main/main-charism-wallte/back.svg") no-repeat top center;
	margin-top: 150px;
	@media only screen and (max-width: 820px) {
		margin-top: 60px;
	}
	.text {
		display: flex;
		padding-top: 150px;
		color: #ffffff;
		gap: 30px;
		justify-content: flex-start;
		@media only screen and (max-width: 820px) {
			margin-top: 60px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: center;
			gap: 30px;
		}
	}
	button {
		width: auto;
		margin-top: 70px;
		padding: 15px 40px;
	}
	.description {
		max-width: 310px;
		width: 100%;
		//margin: 40px 5% 0 0;
		//text-justify: auto;
		@media only screen and (max-width: 820px) {
			//margin-top: 90px;
		}
	}
	.title{
		max-width: 700px;
		width: 100%;
	}
	.computer {
		display: flex;
		justify-content: center;
		margin-top: 80px;
	}
`