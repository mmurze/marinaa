import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function DepositsCoinsList() {
	const array = [
		{
			"title": "crpt",
			"icon": "/pic/supported-coins/crpt.svg",
			"percent": 21,
			"months": 6,
			"description": "*for new users only"
		},
		{
			"title": "usdc",
			"icon": "/pic/supported-coins/usdc.svg",
			"percent": 15.6,
			"months": 6
		},
		{
			"title": "dai",
			"icon": "/pic/supported-coins/dai.svg",
			"percent": 17.2,
			"months": 6
		},
		{
			"title": "usdt",
			"icon": "/pic/supported-coins/usdt.svg",
			"percent": 10.6,
			"months": 6
		},
		{
			"title": "eth",
			"icon": "/pic/supported-coins/eth.svg",
			"percent": 7.2,
			"months": 3
		}
	]
	return (
		<Wrapper>
			<CenterBlock>
				<div className="heading">
					<Title><h2>choose crypto and conditions</h2></Title>
					<p>into crypto savings accounts</p>
				</div>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="top">
										<div className="icon"><img src={item.icon} alt={item.title}/></div>
										<h3>{item.title}</h3>
										{item.description && <p className="description">{item.description}</p>}
									</div>
									<div className="bottom">
										<p className="percent">{item.percent}%</p>
										<p className="months">from {item.months} months</p>
									</div>
									<div className="deposit_link">
										<a href="#" target="_blank" rel="noreferrer nofollow">Deposit now</a>
									</div>
								</div>
							)
						})
					}
				</div>
				<div className="show_more">
					<button>Show more</button>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 105px;
		.title{
			max-width: 503px;
			width: 100%;
		}
		p{
			max-width: 127px;
			width: 100%;
			font-weight: 500;
			font-size: 16px;
			line-height: 140%;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 65px;
	}
	.item{
		width: calc(100% / 5 - 10px);
		background: #F7F7F7;
		border-radius: 24px;
		padding: 30px;
		height: 290px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: all .3s ease-in-out;
		overflow: hidden;
		position: relative;
		&:hover{
			background: #E0FFA1;
			transition: all .3s ease-in-out;
			.icon{
				top: -100px;
				transition: all .3s ease-in-out;
			}
			h3{
				top: -65px;
				transition: all .3s ease-in-out;
			}
			.bottom{
				top: -120px;
				transition: all .3s ease-in-out;
			}
			.description{
				opacity: 0;
				transition: all 0.2s ease-in-out;
			}
			.deposit_link{
				bottom: 30px;
				transition: all .3s ease-in-out;
			}
		}
	}
	.icon{
		position: relative;
		top: 0;
		transition: all .3s ease-in-out;
	}
	h3{
		font-size: 18px;
		line-height: 140%;
		text-transform: uppercase;
		margin-top: 11px;
		position: relative;
		transition: all .3s ease-in-out;
		top: 0;
	}
	.percent{
		font-weight: 700;
		font-size: 48px;
		line-height: 120%;
	}
	.months{
		font-weight: 700;
		font-size: 16px;
		line-height: 120%;
	}
	.description{
		font-size: 14px;
		line-height: 100%;
		color: #A8A8A8;
		margin-top: 35px;
		transition: all .3s ease-in-out;
	}
	.bottom{
		position: relative;
		transition: all .3s ease-in-out;
		top: 0;
	}
	.deposit_link{
		position: absolute;
		bottom: -56px;
		transition: all .3s ease-in-out;
		a{
			background: #191B20;
			border-radius: 64px;
			padding: 16px 50px;
			height: 56px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 14px;
			line-height: 24px;
			color: #F9F9F9;
			&:hover{
				background: #0285FD;
			}
		}
	}
	.show_more{
		margin-top: 68px;
		display: flex;
		justify-content: center;
		button{
			width: auto;
			border: 1px solid #EBEBEB;
			border-radius: 33px;
			height: 47px;
			padding: 16px 30px;
		}
	}
`