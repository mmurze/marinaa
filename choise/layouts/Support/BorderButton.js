import styled from "styled-components";

export default function BorderButton({children, onClick, active}) {
	return (
		<BorderButtonWrapper onClick={onClick} className={active ? 'active' : ''}>
			{children}
		</BorderButtonWrapper>
	)
}

const BorderButtonWrapper = styled.button`
	min-height: 60px;
	background: #F9F9F9;
	border: 1px solid #E0F0FF;
	box-sizing: border-box;
	box-shadow: 0 0 50px rgba(41, 146, 250, 0.08);
	border-radius: 20px;
	font-size: 18px;
	line-height: 23px;
	text-align: center;
	color: #7B8199;
	display: flex;
	align-items: center;
	img{
		margin-right: 10px;
	}
	&.active{
		border: 1px solid #2992FA;
		color: #29304A;
	}
`
