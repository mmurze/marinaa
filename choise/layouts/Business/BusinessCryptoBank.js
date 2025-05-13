import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function BusinessCryptoBank({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<h2>{t.title}</h2>
				<p className="description">{t.description}</p>
				<ul className="list">
					{
						t.list.map((item, index) => {
							return (
								<li key={index}>
									<p>{item.value}</p>
									<h4>{item.title}</h4>
								</li>
							)
						})
					}
				</ul>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	color: #fff;
	@media only screen and (max-width: 820px) {
		margin-top: 80px;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background: #272A32;
		border-radius: 30px;
		padding: 50px;
		gap: 0 40px;
		margin-top: 50px;
		@media only screen and (max-width: 600px) {
			gap: 0;
			padding: 30px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
	}
	li{
		width: calc(100% / 4 - 40px);
		border-right: 1px solid #393D49;
		padding-bottom: 40px;
		@media only screen and (max-width: 820px) {
			width: calc(50% - 40px);
		}
		&:last-child, &:nth-child(4){
			border-right: none;
		}
		@media only screen and (max-width: 820px) {
			&:nth-child(even){
				border-right: none;
			}
		}
		@media only screen and (max-width: 600px) {
			width: calc(50% - 20px);
			padding-right: 0;
			border-right: none;
		}
		p{
			font-weight: 700;
			font-size: 30px;
			line-height: 120%;
			@media only screen and (max-width: 600px) {
				font-size: 22px;
				line-height: 120%;
			}
		}
	}
	h4{
		font-weight: 450;
		font-size: 16px;
		line-height: 130%;
		color: #C6CAD3;
		margin-top: 10px;
		max-width: 146px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
		}
		@media only screen and (max-width: 600px) {
			font-size: 14px;
			line-height: 130%;
		}
	}
	h2{
		text-align: center;
		font-weight: 500;
		font-size: 48px;
		line-height: 120%;
		@media only screen and (max-width: 600px) {
			text-align: left;
			font-size: 24px;
			line-height: 120%;
		}
	}
	.description{
		margin: 40px auto 0 auto;
		max-width: 461px;
		width: 100%;
		font-weight: 450;
		font-size: 18px;
		line-height: 150%;
		text-align: center;
		@media only screen and (max-width: 600px) {
			text-align: left;
			margin-top: 20px;
			max-width: 100%;
			font-size: 14px;
			line-height: 150%;
			color: #C6CAD3;
		}
	}
`