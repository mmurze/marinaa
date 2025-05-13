import styled from "styled-components";

export default function Button({children, className, type = "submit", disabled = false}) {
	return (
		<Wrapper className={`button ${className ? className : ""}`} type={type} disabled={disabled}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: #FFF;
	border-radius: 30px;
	height: 48px;
	font-weight: 500;
	font-size: 16px;
	line-height: 120%;
	letter-spacing: -0.03em;
	&:disabled{
		background: #9B9AA9;
		color: #FFFFFF;
	}
`