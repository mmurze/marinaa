import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import data from "public/data/crypterium-markets.json"
import Title from "components/Title";

export default function MainCrypteriumMarkets({t}) {
	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return (
					<div className="item" key={index}>
						{item.slug !== "#" ? (
							<a target="_blank" href={item.slug} dangerouslySetInnerHTML={{__html: item.icon}}/>
						) : (
							<span dangerouslySetInnerHTML={{__html: item.icon}}/>
						)}
					</div>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<div className="market_item">
					<Title><h4>{t.title_1}</h4></Title>
					<div className="list">{renderArray(data.choise)}</div>
				</div>
				<div className="market_item">
					<Title><h4>{t.title_2}</h4></Title>
					<div className="list">{renderArray(data.crpt)}</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 200px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		@media only screen and (max-width: 600px) {
			display: flex;
			justify-content: space-between;
		}
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		margin-top: 60px;
		gap: 20px 40px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			gap: 2px 0;
		}
	}
	.item{
		width: 205px;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		a{
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			line-height: 0;
			&:hover{
				svg{
					fill: #191B20;
					transition: all .3s ease-in-out;
				}
			}
			svg{
				fill: #C6CAD3;
				transition: all .3s ease-in-out;
			}
		}
	}
	.market_item{
		margin-bottom: 120px;
		@media only screen and (max-width: 600px) {
			width: calc(50% - 20px);
			margin-bottom: 0;
		}
		&:last-child{
			margin-bottom: 0;
		}
	}
`