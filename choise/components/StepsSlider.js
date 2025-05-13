import styled from "styled-components";
import {useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";

export default function StepsSlider({array, title, children}) {
	const {locale} = useRouter()
	const {steps_slider} = require(`locale/components/${locale}.json`)
	
	const [active, setActive] = useState(0)
	return (
		<Wrapper className="steps_slider">
			{title && <h2>{title}</h2>}
			<div className="list">
				<div className="content">
					<div className="top">
						<div className="buttons">
							{
								array.map((item, index) => {
									return (
										<button onClick={() => setActive(index)} className={active === index ? "active" : ""} key={index}>{steps_slider.step} {index + 1}</button>
									)
								})
							}
						</div>
						<h3>{array[active].title}</h3>
						<p className="description">{array[active].description}</p>
					</div>
					<div className="content_buttons">
						{array[active].children && (
							<div className="children_block">{children}</div>
						)}
						<div className="arrows">
							<button onClick={() => setActive(active !== 0 ? active - 1 : array.length - 1)}>
								<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M5.24259 11.3033L0.46962 6.5303C0.176727 6.23741 0.176727 5.76254 0.469621 5.46964L5.24259 0.696675C5.53548 0.403782 6.01036 0.403782 6.30325 0.696675C6.59615 0.989569 6.59615 1.46444 6.30325 1.75734L2.81061 5.24998L14.2 5.24998C14.6142 5.24998 14.95 5.58576 14.95 5.99998C14.95 6.41419 14.6142 6.74998 14.2 6.74998L2.81061 6.74998L6.30325 10.2426C6.59614 10.5355 6.59614 11.0104 6.30325 11.3033C6.01036 11.5962 5.53548 11.5962 5.24259 11.3033Z"/>
								</svg>
							</button>
							<p>{active + 1} / {array.length}</p>
							<button onClick={() => setActive(active !== array.length - 1 ? active + 1 : 0)}>
								<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M9.95736 11.3033L14.7303 6.5303C15.0232 6.23741 15.0232 5.76254 14.7303 5.46964L9.95736 0.696675C9.66447 0.403782 9.18959 0.403782 8.8967 0.696675C8.60381 0.989569 8.60381 1.46444 8.8967 1.75734L12.3893 5.24998L0.999999 5.24998C0.585786 5.24998 0.249999 5.58576 0.249999 5.99998C0.249999 6.41419 0.585786 6.74998 0.999999 6.74998L12.3893 6.74998L8.8967 10.2426C8.60381 10.5355 8.60381 11.0104 8.8967 11.3033C9.18959 11.5962 9.66447 11.5962 9.95736 11.3033Z"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="image_block">
					<div className="image">
						<Image src={array[active].image} width={320} height={573} priority={true} alt={array[active].title}/>
					</div>
				</div>
			</div>
			<div className="background">
				<img src="/pic/step-slider-background.svg" alt="step slider"/>
			</div>
			<div className="list_mobile">
				{
					array.map((item, index) => {
						return (
							<div className="mobile_item" key={index}>
								<div className="top">
									<span className="step">{steps_slider.step} {index + 1}</span>
									<h3>{item.title}</h3>
									<p className="description">{item.description}</p>
									{item.children && (
										<div className="children_block">{children}</div>
									)}
								</div>
								<div className="image">
									<Image src={item.image} width={320} height={573} priority={true} alt={item.title}/>
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
	background: #F6F7F8;
	border-radius: 24px;
	padding: 50px 40px;
	@media only screen and (max-width: 820px) {
		background: #F9F9F9;
		padding: 0;
		border-radius: 0;
	}
	.list{
		display: flex;
		justify-content: space-between;
		min-height: 400px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			display: none;
		}
	}
	.list_mobile{
		display: none;
		padding: 0 20px 40px 20px;
		margin: 40px -20px -40px -20px;
		@media only screen and (max-width: 820px) {
			display: flex;
			flex-wrap: nowrap;
			overflow-x: auto;
		}
	}
	.mobile_item{
		flex: 0 0 auto;
		width: 340px;
		margin-right: 20px;
		background: #F6F7F8;
		border-radius: 24px;
		padding: 30px;
		overflow: hidden;
		height: 650px;
		@media only screen and (max-width: 600px) {
			width: 310px;
		}
	}
	.step{
		background: #5CEE9C;
		border-radius: 500px;
		font-size: 14px;
		line-height: 120%;
		padding: 3px 16px;
	}
	.background{
		position: absolute;
		bottom: 0;
		right: 0;
		@media only screen and (max-width: 820px) {
			display: none;
		}
	}
	.content{
		max-width: 550px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}
	.image_block{
		width: calc(100% - 550px);
		position: relative;
		margin-left: 90px;
	}
	.image{
		position: absolute;
		bottom: -50px;
		left: 0;
		line-height: 0;
		@media only screen and (max-width: 820px) {
			position: relative;
			bottom: -30px;
			margin-top: 20px;
		}
	}
	.buttons{
		display: flex;
		margin-top: 30px;
		button{
			width: auto;
			margin-right: 10px;
			height: 26px;
			padding: 0 16px;
			border: 1px solid #DDDFE4;
			border-radius: 500px;
			font-weight: 500;
			font-size: 16px;
			line-height: 120%;
			color: #A2A8B7;
			&.active{
				background: #5CEE9C;
				color: #191B20;
				border: 1px solid #5CEE9C;
			}
			&:last-child{
				margin-right: 0;
			}
		}
	}
	h2{
		font-weight: 700;
		font-size: 26px;
		line-height: 110%;
		max-width: 392px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			text-align: center;
			margin: 0 auto;
		}
	}
	h3{
		font-size: 40px;
		line-height: 110%;
		margin-top: 50px;
		max-width: 554px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			font-size: 20px;
			line-height: 110%;
			max-width: 190px;
			width: 100%;
			margin-top: 20px;
		}
	}
	.description{
		margin-top: 20px;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		width: calc(100% - 60px);
		padding-right: 40px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			padding-right: 0;
		}
	}
	.content_buttons{
		margin-top: 20px;
	}
	.arrows{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 160px;
		position: absolute;
		right: 0;
		bottom: 10px;
		button{
			width: 42px;
			height: 42px;
			border: 1px solid #DDDFE4;
			border-radius: 50%;
			padding: 0;
			&:hover{
				background: #FFFB1F;
				border: 1px solid #FFFB1F;
				svg{
					fill: #191B20;
					transition: all .3s ease-in-out;
				}
			}
			svg{
				fill: #A2A8B7;
				transition: all .3s ease-in-out;
			}
		}
	}
	.link{
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
		}
		a{
			background: #FFFB1F;
			border-radius: 40px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 60px;
			font-size: 16px;
			line-height: 24px;
			padding: 15px 65px;
			@media only screen and (max-width: 600px) {
				padding: 15px 60px;
			}
		}
	}
`