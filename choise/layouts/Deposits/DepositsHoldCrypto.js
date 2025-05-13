import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import array from "public/data/deposits-hold-coins.json"

export default function DepositsHoldCrypto() {
	const renderMonths = (array) => {
		return (
			<ul className="months_block">
				{
					array.map((item, index) => {
						return <li key={index}><span>{item.months} months /</span> {item.percent}%</li>
					})
				}
			</ul>
		)
	}
	const renderItem = (array) => {
		return (
			array.map((item, index) => {
				return (
					<div className="item" key={index}>
						<div className="coin">
							<div className="icon"><img src={item.icon} alt={item.title}/></div>
							<div className="label">
								<p>{item.title}</p>
								<p>{item.label}</p>
							</div>
						</div>
						{renderMonths(item.apy)}
						<div className="start_link">
							<a href="#" target="_blank" rel="noreferrer nofollow">Start now</a>
						</div>
					</div>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<div className="heading">
					<Title><h2><img src="/pic/decor/round-arrow-right.svg" alt="don't just HODL your crypto. Grow it."/>don't just HODL your crypto. Grow it.</h2></Title>
					<p>Compound your cryptocurrency holdings. Discover options to make the most of what you hold.</p>
				</div>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="box" key={index}>
									<div className="header">
										<p>Asset</p>
										<p>APY</p>
									</div>
									{renderItem(item)}
								</div>
							)
						})
					}
				</div>
				<div className="line"/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		p{
			max-width: 231px;
			width: 100%;
			font-weight: 500;
			font-size: 16px;
			line-height: 150%;
		}
	}
	.title{
		max-width: 436px;
		width: 100%;
		img{
			position: relative;
			top: 9px;
			margin-right: 10px;
		}
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		margin-right: -20px;
		margin-bottom: -20px;
		margin-top: 70px;
	}
	.box{
		background: #F7F7F7;
		border-radius: 24px;
		padding: 35px 30px;
		width: calc(100% / 3 - 20px);
		margin-right: 20px;
		margin-bottom: 20px;
	}
	.header{
		display: flex;
		justify-content: space-between;
		font-weight: 700;
		font-size: 18px;
		line-height: 26px;
		margin-bottom: 23px;
	}
	.item{
		border-top: 1px solid #EBEBEB;
		padding: 20px 0;
		display: flex;
		justify-content: space-between;
		transition: all .3s ease-in-out;
		overflow: hidden;
		position: relative;
		&:hover{
			background: #F9F9F9;
			box-shadow: 0 5px 8px rgba(0, 0, 0, 0.04);
			border-radius: 10px;
			transition: all .3s ease-in-out;
			margin-left: -20px;
			margin-right: -20px;
			padding: 20px;
			.months_block{
				li:first-child{
					top: -100px;
					transition: all 0.5s ease-in-out;
				}
				li:last-child{
					bottom: -100px;
					transition: all 0.5s ease-in-out;
				}
			}
			.start_link{
				right: 20px;
				transition: all 0.5s ease-in-out;
			}
		}
	}
	.coin{
		display: flex;
		align-items: center;
	}
	.icon{
		width: 36px;
	}
	.label{
		width: calc(100% - 36px);
		padding-left: 15px;
		font-size: 14px;
		line-height: 17px;
		p:last-child{
			margin-top: 4px;
		}
	}
	.months_block{
		li{
			display: flex;
			text-align: right;
			font-size: 14px;
			line-height: 17px;
			margin-bottom: 4px;
			position: relative;
			transition: all 0.5s ease-in-out;
			span{
				color: #A8A8A8;
				margin-right: 3px;
			}
			&:first-child{
				top: 0;
			}
			&:last-child{
				bottom: 0;
				margin-bottom: 0;
			}
		}
	}
	.start_link{
		position: absolute;
		top: 50%;
		right: -100%;
		transform: translateY(-50%);
		transition: all 0.5s ease-in-out;
		a{
			background: #FFFB1F;
			border-radius: 46px;
			height: 47px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 14px;
			line-height: 17px;
			padding: 15px 25px;
			&:hover{
				background: #000000;
				color: #F9F9F9;
			}
		}
	}
	.line{
		border-bottom: 1px solid #EBEBEB;
		padding-bottom: 60px;
	}
`