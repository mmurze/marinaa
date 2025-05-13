import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import { Link } from "react-scroll";

export default function BitdrivenEarn({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					<div className="item"><img src="/pic/bitdriven/choise-logo.svg" alt="Choise.com"/></div>
					<div className="item">
						<a href="https://onemore.fund/" target="_blank" rel="noreferrer">
							<img src="/pic/bitdriven/one-more-fund.svg" alt="OneMore Fund"/>
						</a>
					</div>
				</div>
				<div className="link">
					<Link className="link_button" smooth={true} offset={-150} to="main_form">{t.link}</Link>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.link{
		display: flex;
		justify-content: center;
		margin-top: 85px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.link_button{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 8px 24px;
		min-height: 56px;
		min-width: 286px;
		@media only screen and (max-width: 600px) {
			min-width: 100%;
		}
	}
	.list{
		display: flex;
		justify-content: center;
	}
	.item{
		margin: 0 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		@media only screen and (max-width: 600px) {
			margin: 0 20px;
		}
	}
`