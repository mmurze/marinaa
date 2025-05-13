import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Link from "next/link";

export default function ChostakingToken({t}) {
	return (
		<Wrapper>
			<CenterBlock width={960}>
				<div className="block_position">
					<div className="information" dangerouslySetInnerHTML={{__html: `<div class="coinmarketcap-currency-widget" data-currencyid="19018" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>`}}/>
					<div className="content">
						<h3>{t.title}</h3>
						<p className="description">{t.description}</p>
					</div>
				</div>
				<div className="links">
					<a href="https://defi.choise.com/staking" target="_blank" rel="noreferrer">{t.link_a}</a>
					<Link href="/cho">{t.link}</Link>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	h3{
		font-size: 32px;
		line-height: 120%;
	}
	.description{
		font-size: 16px;
		line-height: 150%;
		color: #7B8199;
		margin-top: 30px;
	}
	.links{
		display: flex;
		justify-content: center;
		margin-top: 60px;
		@media only screen and (max-width: 910px) {
			flex-direction: column;
			justify-content: flex-start;
			margin-top: 30px;
		}
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 56px;
			border-radius: 40px;
			padding: 8px 35px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			margin: 0 5px;
			@media only screen and (max-width: 910px) {
				margin: 0;
				display: flex;
			}
			&:first-child{
				background: #FFFB1F;
				border: 1px solid #FFFB1F;
			}
			&:last-child{
				border: 1px solid #C6CAD3;
				@media only screen and (max-width: 910px) {
					margin-top: 10px;
				}
			}
			&:hover{
				background: #191B20;
				border: 1px solid #191B20;
				color: #F9F9F9;
			}
		}
	}
	.block_position{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 910px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.information{
		max-width: 520px;
		width: 100%;
		@media only screen and (max-width: 910px) {
			max-width: 100%;
			margin-top: 30px;
		}
	}
	.content{
		max-width: 367px;
		width: 100%;
		margin-left: 70px;
		@media only screen and (max-width: 910px) {
			margin-left: 0;
			max-width: 100%;
		}
	}
`