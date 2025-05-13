import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useEffect, useState} from "react";
import numberFormat from "helpers/numberFormat";
import htmlContent from "helpers/htmlContent";
import Timer from "helpers/Timer";
import image from "public/pic/bitdriven/finish-bitdriven.png"
import Image from "next/image";
import axios from "axios";

export default function BitdrivenMain({t}) {
	const [success, setSuccess] = useState(false)
	const [total, setTotal] = useState(0)
	const bitdrivenTotal = 1000000

	useEffect(() => {
		axios.get("/api/bitdriven").then(r => setTotal(r.data.total))
	}, [])
	const PoolBlock = ({className}) => {
		return (
			<div className={`pool_block ${className ? className : ""}`}>
				<div className="pool_heading">
					<p className="total_label">{t.total_already}</p>
					<p className="total_label">{t.total_price}</p>
				</div>
				<div className="total_values">
					<p>${numberFormat(total)}</p>
					<p><img src="/pic/bitdriven-icon.svg" alt="bitdriven"/>${numberFormat(5)}</p>
				</div>
				<ProgressBar total={(total / bitdrivenTotal) * 100}>
					<span/>
				</ProgressBar>
			</div>
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<h1>{htmlContent(t.title)}</h1>
					<div className="list">
						{
							t.descriptions.map((item, index) =>{
								return(
									<p key={index}>{item}</p>
								)
							})
						}
					</div>
				</div>
				{
					success ? (
						<div className="success_block">
							<div className="top">
								<h2>{t.closed_title}</h2>
								<PoolBlock className="finish"/>
								<p className="close_description">{htmlContent(t.closed_description)}</p>
							</div>
							<p className="total_link_closed">{t.total_button}</p>
						</div>
					) : (
						<div className="total_block">
							<div className="top">
								<div className="live">{t.live}</div>
								<div className="total_counter">
									<p className="total_label">{t.total_title}</p>
									<Timer
										date="2023-07-04T20:00:00Z"
										onCallBack={() => setSuccess(true)}
									/>
								</div>
								<PoolBlock/>
							</div>
							<a className="total_link" href="https://crypterium.onelink.me/jtmZ/bitdrivenmain?app_screen=bitdriven" target="_blank" rel="noreferrer">{t.total_button}</a>
						</div>
					)
				}
			</CenterBlock>
		</Wrapper>
	)
}

const ProgressBar = styled.div`
  border-radius: 50px;
  border: 1px solid var(--black-800, #454A58);
  height: 10px;
  width: 100%;
	overflow: hidden;
	margin-top: 30px;
	position: relative;
	span{
    width: ${p => p.total}%;
    border-radius: 50px;
    background: #28D180;
    height: 10px;
		position: absolute;
		top: 0;
		left: 0;
	}
`

const Wrapper = styled.section`
	color: #fff;
	margin-top: 170px;
	@media only screen and (max-width: 820px) {
		margin-top: 120px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	h1{
		font-weight: 500;
		font-size: 64px;
		line-height: 110%;
		text-transform: lowercase;
		@media only screen and (max-width: 1024px) {
			font-size: 45px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 32px;
			line-height: 110%;
		}
		span{
			color: #FFFB1F;
		}
	}
	.content{
		max-width: 595px;
		width: 100%;
		margin-right: 40px;
		@media only screen and (max-width: 820px) {
			margin-right: 0;
			max-width: 100%;
		}
	}
	.list{
		margin-top: 60px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
		p{
			font-size: 18px;
			line-height: 150%;
			color: #C6CAD3;
			margin-bottom: 30px;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 150%;
				margin-bottom: 15px;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.live{
		text-align: center;
		font-size: 30px;
		color: #5BEE9C;
		font-weight: bold;
	}
	.total_block, .success_block{
		background: #272A32;
		border-radius: 30px;
		max-width: 461px;
		width: 100%;
		padding: 40px;
    height: 576px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			min-height: auto;
			margin-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			padding: 30px 20px;
			height: auto;
		}
	}
	.total_label{
    color: #C6CAD3;
    font-size: 18px;
    line-height: 150%;
    @media only screen and (max-width: 600px) {
	    font-size: 14px;
    }
	}
	.total_counter{
    border-radius: 20px;
    background: #1A1C21;
		padding: 20px 30px;
		margin-top: 20px;
	}
	.timer{
		margin-top: 15px;
	}
	.pool_block{
		margin-top: 10px;
    border-radius: 20px;
    border: 1px solid #454A58;
		padding: 20px 30px;
		&.finish{
			margin-top: 40px;
		}
	}
	.pool_heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		p:last-child{
			text-align: right;
		}
	}
	.total_values{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
		p{
      color: #FFF;
      font-size: 30px;
      font-weight: 500;
      letter-spacing: -0.9px;
      @media only screen and (max-width: 600px) {
	      font-size: 23px;
      }
		}
		p:last-child{
			display: flex;
			align-items: center;
			justify-content: flex-end;
			text-align: right;
			img{
				margin-right: 8px;
			}
		}
	}
	.total_link{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
    border-radius: 40px;
    background: #FFFB1F;
    padding: 8px 24px;
    height: 56px;
    color: #191B20;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    @media only screen and (max-width: 600px) {
      margin-top: 40px;
    }
	}
	.total_link_closed{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 40px;
		background: #393D49;
		padding: 8px 24px;
		height: 56px;
		color: #fff;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.image{
		display: flex;
		justify-content: center;
	}
	h2{
		text-align: center;
		margin-top: 20px;
    font-size: 36px;
    font-weight: 700;
    line-height: 120%;
		color: #fff;
	}
	.close_description{
		text-align: center;
		margin: 25px auto 0 auto;
    color: #C6CAD3;
    font-size: 18px;
    line-height: 150%;
		max-width: 338px;
    width: 100%;
		a{
			color: #FFFB20;
			text-decoration: underline;
		}
	}
`
