import styled from "styled-components";

export default function SwitchToggle({checked, onClick}) {
	return (
		<Wrapper className={`switch_toggle ${checked ? "checked" : ""}`} onClick={() => onClick(!checked)}>
			<span/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: #ebebeb;
	border-radius: 14px;
	position: relative;
	width: 48px;
	height: 28px;
	cursor: pointer;
	transition: all .3s ease-in-out;
	&.checked{
		background: #28D180;
		transition: all .3s ease-in-out;
		span{
			left: 25px;
			transition: all .3s ease-in-out;
			background: #fff;
			transition-delay: .1s;
		}
	}
	span{
		background: #1A1B21;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		position: absolute;
		left: 4px;
		top: 4px;
		transition: all .3s ease-in-out;
		transition-delay: .1s;
	}
`
