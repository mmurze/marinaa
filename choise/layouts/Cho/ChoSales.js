import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function ChoSales() {
	const array = [
		{
			"label": "Pre-sale",
			"title": "3 mln CHO",
			"value": "$300k",
		},
		{
			"label": "IDO",
			"title": "3.25 mln CHO",
			"value": "$650k",
		},
		{
			"label": "Community sale",
			"title": "3.5 mln CHO",
			"value": "$525k",
		},
		{
			"label": "NFT sale",
			"title": "1.53 mln CHO",
			"value": "410bnb",
		}
	]
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h2>CHO token sales</h2></Title>
					<div className="list_content">
						<p>Community Sale and IDO rounds were a huge success. After, we’ve got plenty requests for CHO tokens’ purchase before the TGE</p>
						<p>We couldn’t ignore the demand and additionally arranged something really special: not just a token sale but an NFT Sale worthy of the new MetaFi era creation</p>
						<p>CHO NFT Collection was sold out in less than 24 hours</p>
					</div>
				</div>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="label">{item.label} <span>0{index + 1}</span></div>
									<div className="bottom">
										<div className="title">{item.title}</div>
										<div className="value">{item.value}</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.content{
		max-width: 353px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
		}
	}
	.list{
		width: calc(100% - 353px);
		padding-left: 50px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: -20px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-top: 40px;
			padding-left: 0;
		}
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			width: calc(100% + 40px);
			margin: 40px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.item{
		width: calc(50% - 10px);
		border-radius: 24px;
		height: 280px;
		padding: 30px;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			width: 285px;
			margin-right: 20px;
			flex: 0 0 auto;
		}
		&:nth-child(1){
			background: #FFFB1F;
		}
		&:nth-child(2){
			background: #0285FD;
			margin-top: 50px;
			@media only screen and (max-width: 600px) {
				margin-top: 0;
			}
		}
		&:nth-child(3){
			background: #5CEE9C;
			margin-top: -50px;
			@media only screen and (max-width: 600px) {
				margin-top: 0;
			}
		}
		&:nth-child(4){
			background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
		}
	}
	.title{
		font-weight: 700;
		font-size: 40px;
		line-height: 100%;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	.value{
		font-size: 40px;
		line-height: 100%;
		color: #F9F9F9;
		padding: 9px 26px;
		background: #191B20;
		border-radius: 500px;
		display: inline-flex;
		margin-top: 10px;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	.label{
		font-weight: 700;
		font-size: 26px;
		line-height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			font-size: 20px;
			line-height: 100%;
		}
		span{
			width: 55px;
			height: 55px;
			background: #F9F9F9;
			border-radius: 40px;
			font-weight: 700;
			font-size: 20px;
			line-height: 110%;
			display: flex;
			align-items: center;
			justify-content: center;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 110%;
			}
		}
	}
	.list_content{
		margin-top: 50px;
		p{
			font-size: 18px;
			line-height: 150%;
			color: #80889C;
			margin-bottom: 30px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
`