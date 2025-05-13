import styled from "styled-components";

export default function Title({children, className}) {
	return (
		<Wrapper className={`title ${className ? className : ""}`}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	h1{
		font-weight: 700;
		font-size: 90px;
		line-height: 100%;
		letter-spacing: -0.03em;
		@media only screen and (max-width: 1024px) {
			font-size: 70px;
		}
		@media only screen and (max-width: 820px) {
			font-size: 65px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 55px;
		}
	}
	h2{
		font-weight: 700;
		font-size: 90px;
		line-height: 100%;
		letter-spacing: -0.03em;
		@media only screen and (max-width: 1024px) {
			font-size: 70px;
		}
		@media only screen and (max-width: 820px) {
			font-size: 65px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 55px;
		}
	}
	h3{
		font-weight: 700;
		font-size: 48px;
		line-height: 100%;
		letter-spacing: -0.03em;
		@media only screen and (max-width: 1024px) {
			font-size: 40px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 30px;
		}
	}
	h4{
		font-weight: 700;
		font-size: 36px;
		line-height: 130%;
		@media only screen and (max-width: 1024px) {
			font-size: 30px;
		}
		@media only screen and (max-width: 820px) {
			font-size: 26px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 20px;
		}
	}
`