import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function WalletSendPrices({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="heading">
					<Title><h2>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
				</div>
				<div className="list">
					<div className="item list_header">
						<ul>
							{
								t.list_header.map((item, index)=>{
									return(
										<li key={index}>{item}</li>
									)
								})
							}
						</ul>
					</div>
					{
						t.array.map((item, index) => {
							return (
								<div className={`item list_item ${item.active ? "active" : ""}`} key={index}>
									<div className="logo">
										<img src={item.logo} alt={item.alt}/>
									</div>
									<ul>
										<li>{item.fees}</li>
										<li>{item.time}</li>
										<li>{item.method}</li>
									</ul>
								</div>
							)
						})
					}
				</div>
				<p className="information">{t.information}</p>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}
	.title{
		max-width: 250px;
		width: 100%;
	}
	.description{
		max-width: 367px;
		width: 100%;
		color: #7B8199;
		font-size: 18px;
		line-height: 150%;
		margin-right: 155px;
		@media only screen and (max-width: 820px) {
			margin-right: 0;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
	}
	.information{
		text-align: center;
		font-size: 14px;
		line-height: 17px;
		color: #7B8199;
		margin-top: 50px;
	}
	.list{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		background: #F7F7F7;
		border-radius: 24px;
		padding: 30px;
		@media only screen and (max-width: 820px) {
			background: transparent;
			padding: 0 0 20px 20px;
			border-radius: 0;
			flex-wrap: nowrap;
			overflow-x: auto;
			margin-left: -20px;
			margin-right: -20px;
			margin-bottom: -20px;
		}
	}
	.item{
		width: calc(100% / 5 - 20px);
		height: 234px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 24px;
		@media only screen and (max-width: 820px) {
			width: 220px;
			margin-right: 20px;
			flex: 0 0 auto;
			&:first-child{
				width: 180px;
			}
		}
		&.active{
			background: radial-gradient(70.51% 68.38% at 125% 41.24%, #5CEE9C 0%, #FFFB1F 100%);
			border: none;
		}
		&.list_header{
			padding: 30px 30px 30px 0;
			justify-content: flex-end;
			li{
				font-weight: 500;
				font-size: 19px;
				line-height: 23px;
				color: #7B8199;
			}
		}
		&.list_item{
			border: 1px solid #EBEBEB;
			padding: 30px;
		}
		li{
			margin-bottom: 20px;
			font-size: 19px;
			line-height: 23px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
`