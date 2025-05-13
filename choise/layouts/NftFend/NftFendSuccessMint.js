import styled from "styled-components";
import Modal from "components/Modal";
import moment from "moment";
import {renderTransactionLink} from "utils/nft";
import numberFormat from "helpers/numberFormat";
import Image from "next/image";
import LinkPage from "next/link";
import {Link} from "react-scroll";

export default function NftFendSuccessMint({t, success, coin, apy, transaction, period, amountTotal, onCallBack, mintToken}) {
	return (
		<Modal width={450} className="success_modal" active={success} onCallBack={() => onCallBack(null)}>
			<Wrapper>
				<div className="glow"><img src="/pic/fend/fend-success-glow.svg" alt="You have successfully minted"/></div>
				<div className="image">
					<Image
						src={`/pic/fend/fend-success-${coin.toLowerCase()}.png`}
						width={100}
						height={100}
						priority={true}
						alt="Token #834"
					/>
				</div>
				<p className="top_heading"></p>
				<h2>{coin} {t.with} {apy}% {t.APY}</h2>
				<div className="success_list">
					<div className="success_item">
						<p>{t.hash}</p>
						<p>{renderTransactionLink(transaction, 4)}</p>
					</div>
					<div className="success_item">
						<p>{t.token}</p>
						<p>#{numberFormat(mintToken)}</p>
					</div>
					<div className="success_item">
						<p>{t.lock}</p>
						<p className="lock_period">{moment(new Date()).add(period, "months").format("MMM, DD YYYY")} <span>({period} {t.months})</span></p>
					</div>
					<div className="success_item">
						<p>{t.profit}</p>
						<p className="total">{numberFormat(amountTotal, " ", ",", "2")} {coin}</p>
					</div>
				</div>
				<p className="profile_link">
					{t.profile_link} <LinkPage href="/profile">{t.profile}</LinkPage>
				</p>
				<Link className="anchor" to="calculator" onClick={() => onCallBack(null)} smooth={true} offset={-150}>{t.mint}</Link>
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	position: relative;
	overflow: hidden;
	margin-top: -30px;
	padding-top: 30px;
	.top_heading{
		font-size: 16px;
		line-height: 140%;
		text-align: center;
		color: #7B8199;
		margin-top: 15px;
	}
	h2{
		font-size: 30px;
		line-height: 130%;
		margin-top: 5px;
	}
	.success_list{
		margin-top: 40px;
		.success_item{
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
			p{
				width: calc(50% - 5px);
				font-weight: 500;
				font-size: 16px;
				line-height: 150%;
				a{
					text-decoration: underline;
				}
				&:first-child{
					text-align: left;
					color: #80889C;
				}
				&:last-child{
					text-align: right;
				}
			}
		}
	}
	.total{
		color: #24BE74;
	}
	.glow{
		position: absolute;
		top: -50px;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
	}
	.image{
		position: relative;
		z-index: 10;
	}
	.profile_link{
		margin-top: 40px;
		background: #F6F7F8;
		border-radius: 16px;
		text-align: center;
		padding: 17px 40px;
		color: #80889C;
		font-size: 14px;
		line-height: 150%;
		a{
			color: #0285FD;
		}
	}
	.anchor{
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
		border-radius: 40px;
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 20px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}
	.lock_period{
		span{
			@media only screen and (max-width: 600px) {
				display: block;
			}
		}
	}
`