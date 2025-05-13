import styled from "styled-components";

export default function Button({children, className, onClick, type = "submit", disabled = false}) {
	return (
		<Wrapper type={type} disabled={disabled} className={`button ${className ? className : ""}`} onClick={onClick}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.button`
	background: #FFFB1F;
	border-radius: 40px;
	font-weight: 700;
	font-size: 18px;
	line-height: 24px;
	height: 64px;
	padding: 20px 45px;
	&:disabled{
		opacity: .4;
	}
`
