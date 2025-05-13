import styled from "styled-components";
import Image from "next/image";
import numberFormat from "helpers/numberFormat";
import {useEffect, useState} from "react";
import {getFendItemDate} from "utils/fend-nft";
export default function ProfileInterestAccountItem({item}) {
	const [date, setDate] = useState(null)
	useEffect(() => {
		getFendItemDate(item.currency, item.id, item.lock_period).then(r => setDate(r))
	}, [])
	return (
		<Wrapper className="interest_account_item">
			<div className="image">
				<Image src={item.image.split("https://choise.com")[1]} width={400} height={507.69} priority={true} alt={item.name}/>
			</div>
			<div className="content">
				<div className="information">
					<div className="item">
						<p>APY</p>
						<p className="apr_value">{item.apy}%</p>
					</div>
					{
						date && (
							<div className="item">
								<p>Lock until</p>
								<p>{date.date}</p>
							</div>
						)
					}
				</div>
				{
					date && (
						<ProgressBar width={100 - (date.timestampNow * 100 / date.timestampLock)} className="progress_bar">
							<span/>
						</ProgressBar>
					)
				}
				<div className="profit">
					<p>Current profit</p>
					<p>{numberFormat(item.profit)} {item.currency}</p>
				</div>
				<p className="lock_description">Claim will be able at the end of lock duration</p>
			</div>
		</Wrapper>
	)
}

const ProgressBar = styled.div`
	margin-top: 20px;
	position: relative;
	background: #EEEFF2;
	border-radius: 5px;
	height: 8px;
	width: 100%;
	overflow: hidden;
	span{
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background: #24BE74;
		border-radius: 5px;
		width: ${p => p.width}%;
	}
`

const Wrapper = styled.div`
	background: #F6F7F8;
	border-radius: 40px;
	.content{
		padding: 20px;
	}
	.item{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		&:last-child{
			margin-bottom: 0;
		}
		p{
			width: calc(50% - 10px);
			font-size: 16px;
			line-height: 150%;
			&:first-child{
				color: #80889C;
			}
			&:last-child{
				text-align: right;
			}
		}
	}
	.profit{
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		p{
			width: calc(50% - 10px);
			font-size: 16px;
			line-height: 150%;
			&:first-child{
				color: #80889C;
			}
			&:last-child{
				text-align: right;
				color: #24BE74;
				font-weight: 700;
			}
		}
	}
	.apr_value{
		font-weight: 700;
	}
	.lock_description{
		text-align: center;
		font-size: 16px;
		line-height: 130%;
		color: #A2A8B7;
		margin-top: 30px;
	}
	.image{
		position: relative;
		line-height: 0;
	}
`