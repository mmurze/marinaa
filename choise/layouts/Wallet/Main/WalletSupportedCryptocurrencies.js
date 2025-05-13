import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function WalletSupportedCryptocurrencies() {
	const array = [
		{
			"title": "Bitcoin",
			"label": "BTC",
			"icon": "/pic/wallet/supported-btc.svg",
			"values": [true, true, true, false, false],
			"background": "#FFFB1F",
			"color": "#191B20"
		},
		{
			"title": "Etherium",
			"label": "ETH",
			"icon": "/pic/wallet/supported-eth.svg",
			"values": [false, false, false, false, false],
			"background": "#0285FD",
			"color": " #FFFFFF"
		},
		{
			"title": "Tether USD",
			"label": "USDT",
			"icon": "/pic/wallet/supported-usdt.svg",
			"values": [false, false, true, false, true],
			"background": "#28D180",
			"color": " #FFFFFF"
		}
	]
	
	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return <td key={index}>{item ? <img src="/pic/wallet/check.svg" alt="Check"/> : null}</td>
			})
		)
	}
	
	const renderMobileArray = (array) => {
		return (
			array.map((item, index) => {
				return <div className="item" key={index}>{item ? <img src="/pic/wallet/check.svg" alt="Check"/> : null}</div>
			})
		)
	}
	
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>25 supported cryptocurrencies</h2></Title>
				<table className="list">
					<thead>
						<tr>
							<td>Digital Asset</td>
							<td>Send</td>
							<td>Receive</td>
							<td>Support</td>
							<td>Export</td>
							<td>Notifications</td>
						</tr>
					</thead>
					<tbody>
						{
							array.map((item, index) => {
								return (
									<Item background={item.background} color={item.color} key={index}>
										<td className="heading">
											<div className="heading_block">
												<span className="icon"><img src={item.icon} alt={item.title}/></span>
												<h3>{item.title}</h3>
												<span className="label">{item.label}</span>
											</div>
										</td>
										{renderArray(item.values)}
									</Item>
								)
							})
						}
					</tbody>
				</table>
				<div className="list_mobile">
					<div className="head">
						<div className="item top_head">Digital Asset</div>
						{
							array.map((item, index) => {
								return (
									<div className="item head_item" key={index}>
										<img src={item.icon} alt={item.title}/>
										{item.title}
									</div>
								)
							})
						}
					</div>
					<div className="content">
						<div className="content_list content_heading">
							<div className="item">Send</div>
							<div className="item">Receive</div>
							<div className="item">Support</div>
							<div className="item">Export</div>
							<div className="item">Notifications</div>
						</div>
						{
							array.map((item, index) => {
								return (
									<div className="content_list values" key={index}>
										{renderMobileArray(item.values)}
									</div>
								)
							})
						}
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Item = styled.tr`
	td{
		padding: 15px 0;
		border-top: 1px solid #EBEBEB;
		text-align: center;
		&:first-child{
			text-align: left;
		}
	}
	&:last-child{
		td{
			border-bottom: 1px solid #EBEBEB;
		}
	}
`

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.content_list{
		width: calc(100% / 4);
		&.values{
			.item{
				display: flex;
				justify-content: center;
			}
		}
	}
	.content_heading{
		font-size: 16px;
		line-height: 19px;
		color: #80889C;
	}
	.content{
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 40px;
		.item{
			margin-bottom: 14px;
			padding-bottom: 14px;
			border-bottom: 1px solid #EBEBEB;
			height: 40px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.list{
		width: 100%;
		margin-top: 70px;
		border-collapse: collapse;
		@media only screen and (max-width: 600px) {
			display: none;
		}
		thead{
			td{
				font-size: 20px;
				line-height: 24px;
				color: #7B8199;
				padding-bottom: 15px;
				text-align: center;
				&:first-child{
					text-align: left;
				}
				&:nth-child(1){
					color: #191B20;
				}
			}
		}
	}
	.top_head{
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
	}
	.list_mobile{
		display: none;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			display: block;
		}
		.head{
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.item{
				width: calc(100% / 4 - 10px);
				&.head_item{
					text-align: center;
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					font-size: 16px;
					line-height: 100%;
					img{
						display: block;
						margin-bottom: 14px;
					}
				}
			}
		}
	}
	.icon{
		margin-right: 17px;
	}
	.heading_block{
		display: flex;
		align-items: center;
	}
	.heading{
		h3{
			font-size: 22px;
			line-height: 100%;
			font-weight: normal;
		}
		.label{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: ${p => p.background};
			height: 24px;
			padding: 0 10px;
			margin-left: 5px;
		}
	}
`