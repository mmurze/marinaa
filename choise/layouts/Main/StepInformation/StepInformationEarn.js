import styled from "styled-components";
import Link from "next/link";

export default function StepInformationEarn({t}) {
	return (
		<Wrapper className="tab_item_block">
			<div className="top_block">
				<a className="block_link" href="https://crpt.onelink.me/WpQ0/lkjmkm1w" target="_blank" rel="noreferrer">{t.block_link}</a>
				<div className="top">
					<h3>{t.title}</h3>
					<div className="description_list">
						{
							t.descriptions.map((item, index) => {
								return(
									<p key={index}>{item}</p>
								)
							})
						}
					</div>
				</div>
				<div className="earn_link_block">{t.earn_link_block}</div>
			</div>
			<div className="list_block">
				{
					t.array.map((item, index) => {
						return (
							<div className="item" key={index}>
								<Link href={item.slug} className="block_link">{t.invest_link_button}</Link>
								<div className="top">
									<div className="percent_block">
										<p>{item.percent}%</p>
										<p>{t.percent_block}<br/>{item.apy}</p>
									</div>
								</div>
								<div className="bottom">
									<div className="income_block">
										<p>{item.income_label}</p>
										<p>{item.income}</p>
									</div>
									<div className="invest_link_button">{t.invest_link_button}</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	.top_block{
		width: 286px;
		background: #F9F9F9;
		position: relative;
		padding: 30px;
		border-radius: 20px;
		height: 500px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		&:hover{
			.earn_link_block{
				background: #272A32;
				transition: .3s ease-in-out;
			}
		}
	}
	.list_block{
		width: calc(100% - 286px - 20px);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		height: 500px;
		.item{
			width: calc(50% - 10px);
			background: #F9F9F9;
			position: relative;
			padding: 30px;
			border-radius: 20px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&:hover{
				.invest_link_button{
					background: #272A32;
					color: #F9F9F9;
					transition: .3s ease-in-out;
				}
			}
			&:nth-child(1), &:nth-child(2){
				margin-bottom: 20px;
			}
		}
	}
	h3{
		font-size: 24px;
		line-height: 120%;
		max-width: 200px;
		width: 100%;
	}
	.description_list{
		margin-top: 20px;
		p{
			margin-bottom: 20px;
			font-size: 14px;
			line-height: 150%;
			color: #848484;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.earn_link_block{
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 55px;
		height: 43px;
		padding: 20px;
		background: #191B20;
		color: #F9F9F9;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		text-align: center;
		transition: .3s ease-in-out;
	}
	.percent_block{
		display: flex;
		align-items: center;
		p{
			&:first-child{
				font-weight: 700;
				font-size: 40px;
				line-height: 120%;
			}
			&:last-child{
				font-weight: 700;
				font-size: 14px;
				line-height: 130%;
				margin-left: 20px;
			}
		}
	}
	.income_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		p{
			&:nth-child(1){
				font-weight: 700;
				font-size: 13px;
				line-height: 130%;
			}
			&:nth-child(2){
				font-weight: 700;
				font-size: 14px;
				line-height: 130%;
				text-align: right;
			}
		}
	}
	.invest_link_button{
		background: #ebebeb;
		border-radius: 55px;
		padding: 20px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 44px;
		margin-top: 20px;
		transition: .3s ease-in-out;
	}
	.block_link{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		font-size: 0;
	}
	.new{
		background: #F2EF1D;
		border-radius: 100px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 5px 16px;
		font-size: 12px;
		line-height: 130%;
	}
	.top_percent{
		font-weight: 700;
		font-size: 64px;
		line-height: 100%;
		margin-top: 30px;
	}
	.top_apy{
		margin-top: 5px;
		font-weight: 700;
		font-size: 16px;
		line-height: 130%;
	}
	.top_label{
		margin-top: 40px;
		font-weight: 700;
		font-size: 14px;
		line-height: 130%;
	}
	.tokens_label{
		margin-top: 20px;
		font-weight: 500;
		font-size: 12px;
		line-height: 130%;
		color: #959200;
	}
	.tokens_list{
		font-weight: 700;
		font-size: 14px;
		line-height: 130%;
		margin-top: 3px;
	}
	.invest_button{
		background: #F9F9F9;
		border-radius: 55px;
		padding: 20px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 44px;
		margin-top: 20px;
		transition: .3s ease-in-out;
		position: relative;
		z-index: 10;
	}
	.top{
		position: relative;
		z-index: 10;
	}
	.earn_pic{
		position: absolute;
		bottom: 0;
		left: 0;
		line-height: 0;
		transition: .3s ease-in-out;
	}
`