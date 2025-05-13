import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import numberFormat from "helpers/numberFormat";
import {useEffect, useState} from "react";
import htmlContent from "helpers/htmlContent";

export default function CrptBurnIt({array, t}) {
	const [total, setTotal] = useState(null)
	useEffect(() => {
		if (array.length) {
			let total = 1323386;
			array.map(item => total += item.burn)
			setTotal(total)
		}
	}, [array])
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image">
					<Image src="/pic/crpt/crpt-burn.png" width={338.08} height={394.24} priority={true} alt="we looooove it, yet we buuuuurn it"/>
				</div>
				<div className="content">
					<Title><h2>{htmlContent(t.title)}</h2></Title>
					<p className="description">{t.description}</p>
					<ul className="data_list">
						<li><p>{numberFormat(total, ",", ",")}</p><span>{t.total_crpt}</span></li>
						<li><p>{numberFormat(0.5, ".", ".", "1")}%</p><span>{t.transaction}</span></li>
					</ul>
				</div>
			</CenterBlock>
			<div className="glow">
				<img src="/pic/crpt/burn-glow.svg" alt="Burn glow"/>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	padding: 80px 0;
	background: #191B20;
	overflow: hidden;
	position: relative;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
		padding: 40px 0;
	}
	.glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		@media only screen and (max-width: 820px) {
			width: 250%;
		}
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	.image{
		padding-right: 40px;
		display: flex;
		justify-content: center;
		width: calc(100% - 575px);
		@media only screen and (max-width: 820px) {
			width: 100%;
			padding-right: 0;
		}
		@media only screen and (max-width: 600px) {
			padding: 0 80px;
		}
	}
	.content{
		width: 572px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			text-align: center;
			margin-top: 80px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.title{
		color: #F9F9F9;
	}
	.description{
		margin-top: 50px;
		font-size: 18px;
		line-height: 150%;
		color: #F9F9F9;
		max-width: 500px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			margin: 30px auto 0 auto;
		}
	}
	.data_list{
		display: flex;
		align-items: flex-start;
		margin-top: 80px;
		justify-content: space-between;
		max-width: 480px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			margin: 40px auto 0 auto;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			max-width: 100%;
		}
		li{
			position: relative;
			&:first-child{
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				@media only screen and (max-width: 600px) {
					flex-direction: row;
					align-items: flex-start;
				}
				span{
					right: -30px;
					@media only screen and (max-width: 600px) {
						right: 0;
						margin-left: 10px;
					}
				}
			}
			&:last-child{
				display: flex;
				align-items: center;
				@media only screen and (max-width: 600px) {
					margin-top: 20px;
				}
				span{
					margin-left: 10px;
					top: -5px;
				}
			}
			p{
				background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				font-weight: 700;
				font-size: 36px;
				line-height: 100%;
			}
			span{
				font-size: 14px;
				line-height: 150%;
				transform: rotate(-7.36deg);
				padding: 5px 15px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				background: #5CEE9C;
				border-radius: 65.3708px;
				position: relative;
			}
		}
	}
`