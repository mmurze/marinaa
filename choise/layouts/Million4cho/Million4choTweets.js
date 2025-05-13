import styled from "styled-components";
import Marquee from "react-fast-marquee";
import numberFormat from "helpers/numberFormat";
export default function Million4choTweets() {
	const array = [
		{
			"title": "Patryk  lifuart",
			"account": "@Patryk lifuart",
			"predicion": 1.835
		},
		{
			"title": "Patryk  lifuart",
			"account": "@Patryk lifuart",
			"predicion": 1.835
		},
		{
			"title": "Patryk  lifuart",
			"account": "@Patryk lifuart",
			"predicion": 1.835
		},
		{
			"title": "Patryk  lifuart",
			"account": "@Patryk lifuart",
			"predicion": 1.835
		},
		{
			"title": "Patryk  lifuart",
			"account": "@Patryk lifuart",
			"predicion": 1.835
		},
		{
			"title": "Patryk  lifuart",
			"account": "@Patryk lifuart",
			"predicion": 1.835
		},
		{
			"title": "Patryk  lifuart",
			"account": "@Patryk lifuart",
			"predicion": 1.835
		},
		{
			"title": "Patryk  lifuart",
			"account": "@Patryk lifuart",
			"predicion": 1.835
		}
	]
	return (
		<Wrapper>
			<Marquee gradient={false}>
				{
					array.concat(array).map((item, index) => {
						return (
							<div className="item" key={index}>
								<div className="icon">
									<div className="twitter_icon">
										<img src="/pic/share/twitter.svg" alt="Twitter"/>
									</div>
								</div>
								<ul className="content">
									<li><p className="title">{item.title}</p> <span className="account">{item.account}</span></li>
									<li className="prediction"><p>Predicion</p> <span>${numberFormat(item.predicion, " ", ".", "3")}</span></li>
								</ul>
							</div>
						)
					})
				}
			</Marquee>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #F3F3F3;
	height: 78px;
	padding: 12px 0;
	.item{
		display: flex;
		align-items: center;
		background: #F9F9F9;
		border-radius: 8px;
		width: 253px;
		margin-right: 10px;
		padding: 6px;
	}
	.icon{
		width: 42px;
		height: 42px;
		border-radius: 50%;
		background: #000000;
		position: relative;
	}
	.content{
		width: calc(100% - 42px);
		padding-left: 15px;
		display: flex;
		align-items: center;
		.title{
			font-size: 14px;
			line-height: 130%;
		}
		.account{
			font-weight: 500;
			font-size: 11px;
			line-height: 130%;
			color: #B6B6B6;
		}
		span{
			display: block;
		}
	}
	.prediction{
		font-size: 14px;
		line-height: 130%;
		border-left: 1px solid #E9E9E9;
		padding-left: 15px;
		margin-left: 15px;
	}
	.twitter_icon{
		position: absolute;
		width: 23px;
		height: 23px;
		background: #0085FF;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
		bottom: -3px;
		right: -6px;
	}
`