import styled from "styled-components";
import numberFormat from "helpers/numberFormat";
import declOfNum from "helpers/declOfNum";

export default function NftTraits({item}) {
	return (
		<Wrapper className="nft_traits">
			{item.traits.totalcho && (
				item.traits.bonus && item.traits.bonus !== "0" ? (
					<li className="tokens_count bonus">
						Tokens <span>🔥 {numberFormat(item.traits.totalcho, ",", ",")} CHO <p className="bonus_description">bonus {numberFormat(item.traits.bonus, ",", ",")}</p></span>
					</li>
				) : (
					<li className="tokens_count">Tokens <span>{numberFormat(item.traits.totalcho, ",", ",")} CHO</span></li>
				)
			)}
			{item.traits.lockup && <li>Lock-up <span>{item.traits.lockup} {declOfNum(item.traits.lockup, ["month", "months", "months"])}</span></li>}
			{item.traits.vesting && <li>Linear release <span>{item.traits.vesting} {declOfNum(item.traits.vesting, ["month", "months", "months"])}</span></li>}
			{item.traits.initunlock && item.traits.initunlock !== "0" && <li>Initial unlock <span>{item.traits.initunlock}%</span></li>}
		</Wrapper>
	)
}

const Wrapper = styled.ul`
	margin-top: 16px;
	li{
		font-size: 16px;
		line-height: 160%;
		color: #7B8199;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&.tokens_count{
			span{
				color: #0285FD;
				font-weight: 900;
			}
		}
		&.bonus{
			span{
				position: relative;
				cursor: pointer;
				&:hover{
					.bonus_description{
						opacity: 1;
						visibility: visible;
						transition: all .3s ease-in-out;
					}
				}
			}
		}
		span{
			color: #191B20;
		}
	}
	.sale{
		margin-top: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		span{
			font-size: 12px;
			line-height: 14px;
			&.sale_title{
				font-weight: 700;
			}
			&.sale_pieces{
				background: #191B20;
				border-radius: 100px;
				color: #F9F9F9;
				padding: 4px 12px;
			}
		}
	}
	.bonus_description{
		position: absolute;
		width: 90px;
		right: 0;
		top: 30px;
		background: #0285FD;
		border-radius: 5px;
		font-size: 12px;
		line-height: 120%;
		color: #F9F9F9;
		padding: 6px;
		opacity: 0;
		visibility: hidden;
		transition: all .3s ease-in-out;
		text-align: center;
		&:before{
			content: url("/pic/nft/bonus-arrow.svg");
			position: absolute;
			right: 10px;
			top: -10px;
			transform: rotate(90deg);
		}
	}
`