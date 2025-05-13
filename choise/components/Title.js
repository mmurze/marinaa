import styled from "styled-components";

export default function Title({children, className, center = false}) {
	return (
		<Wrapper className={`title ${className ? className : ""} ${center ? "center" : ""}`}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: relative;
	z-index: 10;
	text-transform: lowercase;
	&.center{
		text-align: center;
		margin: 0 auto;
	}
	h1{
		font-size: 90px;
		line-height: 100%;
		@media only screen and (max-width: 1024px) {
			font-size: 70px;
		}
		@media only screen and (max-width: 820px) {
			font-size: 46px;
		}
	}
	h2{
		font-size: 48px;
		line-height: 100%;
		@media only screen and (max-width: 820px) {
			font-size: 46px;
			line-height: 100%;
		}
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	h3{
		font-size: 48px;
		line-height: 110%;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	img{
		position: relative;
	}
	h4{
		font-size: 36px;
		line-height: 110%;
		@media only screen and (max-width: 600px) {
			font-size: 26px;
			line-height: 110%;
		}
	}
	h5{
		font-size: 30px;
		line-height: 110%;
		@media only screen and (max-width: 600px) {
			font-size: 23px;
			line-height: 110%;
		}
	}
	h6{
		font-size: 22px;
		line-height: 120%;
	}
`