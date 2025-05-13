import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import htmlContent from "helpers/htmlContent";

export default function ChoDistributionContent({t}) {
	const renderList = (array) => {
		return (
			array.map((item, index) => {
				return <li key={index}>{item}</li>
			})
		)
	}
	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return (
					<Item background={item.background} color={item.color} className="item" key={index}>
						<div className="label">{item.title}</div>
						<p className="description">{htmlContent(item.description)}</p>
						{item.list && (
							<ul className="list">{renderList(item.list)}</ul>
						)}
					</Item>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<div className="block_list">
					<div className="block_item">{renderArray(t.aArray)}</div>
					<div className="block_item">{renderArray(t.bArray)}</div>
					<div className="block_item">{renderArray(t.cArray)}</div>
					<div className="block_item">{renderArray(t.dArray)}</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Item = styled.div`
	margin-bottom: 70px;
	.label{
		font-weight: 700;
		font-size: 18px;
		line-height: 100%;
		color: ${p => p.color};
		background: ${p => p.background};
		display: inline-flex;
		padding: 5px 10px;
		border-radius: 130.694px;
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #7B8199;
		margin-top: 20px;
	}
	.list{
		margin-top: 30px;
		font-size: 18px;
		line-height: 150%;
		color: #7B8199;
		list-style: disc;
		padding-left: 15px;
		li{
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
`

const Wrapper = styled.section`
	margin-top: 80px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.block_list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-wrap: wrap;
		}
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			justify-content: flex-start;
			width: calc(100% + 40px);
			margin: 40px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.block_item{
		width: calc(100% / 4 - 30px);
		margin-bottom: -70px;
		@media only screen and (max-width: 820px) {
			width: calc(100% / 2 - 30px);
			margin-bottom: 0;
		}
		@media only screen and (max-width: 600px) {
			width: 285px;
			margin-right: 20px;
			flex: 0 0 auto;
		}
	}
`