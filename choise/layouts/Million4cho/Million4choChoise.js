import styled from "styled-components";
export default function Million4choChoise({t}) {
	return (
		<Wrapper>
			<p className="choise_title">{t.title}</p>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #111111;
	overflow: hidden;
	margin-bottom: -1px;
	display: flex;
	justify-content: center;
	position: relative;
	height: 100vh;
	align-items: center;
	@media only screen and (max-width: 820px) {
		height: 600px;
	}
	@media only screen and (max-width: 600px) {
		height: 250px;
	}
	p{
		color: #F9F9F9;
		font-weight: 500;
		font-size: 64px;
		line-height: 130%;
		white-space: nowrap;
		cursor: default;
		@media only screen and (max-width: 1024px) {
			font-size: 50px;
			line-height: 130%
		}
		@media only screen and (max-width: 820px) {
			font-size: 40px;
			line-height: 130%
		}
		@media only screen and (max-width: 600px) {
			font-size: 18px;
			line-height: 130%;
		}
	}
`
