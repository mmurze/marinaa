import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function BurgerNavButton() {
	const snap = useSnapshot(state);
	return (
		<Wrapper onClick={() => state.burgerNav = !snap.burgerNav} className="nav">
			{
				snap.burgerNav ? (
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.99925 5.58623L11.9493 0.63623L13.3633 2.05023L8.41325 7.00023L13.3633 11.9502L11.9493 13.3642L6.99925 8.41423L2.04925 13.3642L0.635254 11.9502L5.58525 7.00023L0.635254 2.05023L2.04925 0.63623L6.99925 5.58623Z"/>
					</svg>
				) : (
					<>
						<span/>
						<span/>
					</>
				)
			}
		</Wrapper>
	)
}

const Wrapper = styled.button`
	width: 18px;
	height: 40px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin-left: 20px;
	display: none;
	@media only screen and (max-width: 1100px) {
		display: flex;
	}
	@media only screen and (max-width: 600px) {
		margin-left: 0;
	}
	svg{
		fill: #001133;
	}
	span{
		display: block;
		width: 18px;
		border-bottom: 2px solid #191B20;
		margin-bottom: 7px;
		&:last-child{
			margin-bottom: 0;
		}
	}
`