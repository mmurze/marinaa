import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {Link} from "react-scroll";
import Image from "next/image";

export default function CharismBetaMetaFi({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="link">
					<Link smooth={true} offset={-150} to="email_form">{t.link}</Link>
				</div>
				<div className="element1">
					<Image src="/pic/charism/charism-metafi-left.png" width={208} height={155} priority={true} alt="contribute to the new era of global finance – metafi"/>
				</div>
				<div className="element2">
					<Image src="/pic/charism/charism-metafi-right.png" width={182} height={110} priority={true} alt="Sign up for Beta Test"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	overflow: hidden;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		max-width: 629px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}
	.link{
		display: flex;
		justify-content: center;
		margin-top: 80px;
		@media only screen and (max-width: 600px) {
			margin-top: 50px;
		}
		a{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
			border-radius: 40px;
			height: 56px;
			padding: 8px 60px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
		}
	}
	.element1{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		@media only screen and (max-width: 600px) {
			width: 100px;
			left: -40px;
			margin-top: -20px;
		}
	}
	.element2{
		position: absolute;
		top: 0;
		right: 0;
		@media only screen and (max-width: 600px) {
			width: 100px;
			top: auto;
			right: -40px;
			bottom: 50px;
		}
	}
`