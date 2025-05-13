import styled from "styled-components";

export default function YellowButton({className, children, onClick, disabled = false, type = "submit"}) {
	return (
		<Wrapper className={`button ${className ? className : ""}`} onClick={onClick} disabled={disabled} type={type}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.button`
	height: 56px;
	padding: 16px 40px;
	background: #FFFB1F;
	border-radius: 40px;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	&:hover{
		background: #191B20;
		color: #F9F9F9;
	}
`