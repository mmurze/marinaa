import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useState} from "react";

export default function BusinessBenefits({t}) {
	const [visible, setVisible] = useState(false)
	return (
		<Wrapper>
			<div className={`modal ${visible ? "visible" : ""}`}>
				<button type="button" className="close_modal" onClick={() => setVisible(false)}>
					<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.98119 5.2L10.2242 0.957001C10.6147 0.566536 11.2477 0.566535 11.6382 0.957C12.0287 1.34747 12.0287 1.98053 11.6382 2.371L7.39519 6.614L11.6382 10.857C12.0287 11.2475 12.0287 11.8805 11.6382 12.271C11.2477 12.6615 10.6147 12.6615 10.2242 12.271L5.98119 8.028L1.73819 12.271C1.34772 12.6615 0.714653 12.6615 0.324188 12.271C-0.0662779 11.8805 -0.0662777 11.2475 0.324188 10.857L4.56719 6.614L0.324188 2.371C-0.066277 1.98054 -0.0662779 1.34747 0.324188 0.957C0.714653 0.566535 1.34772 0.566535 1.73819 0.957L5.98119 5.2Z"/>
					</svg>
				</button>
				<CenterBlock width={1200}>
					<h4>{t.title}</h4>
					<div className="modal_position">
						<div className="modal_item">
							<ul className="modal_list">
								{
									t.modalContent.map((item, index) => {
										return (
											<li key={index}>
												<p>{item.title}</p>
												{item.description && <p>{item.description}</p>}
												{item.coins && <p><img src="/pic/business/coins-list.svg" alt="coins-list"/></p>}
											</li>
										)
									})
								}
							</ul>
						</div>
						<div className="modal_item">
							<div className="step_list">
								{
									t.stepArray.map((item, index) => {
										return (
											<div className="step_item" key={index}>
												<h5><span>Step {index + 1}</span>{item.title}</h5>
												{item.description && <p className="step_description">{item.description}</p>}
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</CenterBlock>
			</div>
			<CenterBlock width={990}>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="icon">
										<img src={item.icon} alt={item.title}/>
									</div>
									<h3>{item.title}</h3>
									<p className="description">{item.description}</p>
									{item.modal && (
										<button
											onClick={() => setVisible(true)}
											className="modal_button">{t.title_button}</button>
									)}
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	color: #FFFFFF;
	@media only screen and (max-width: 820px) {
		margin-top: 80px;
	}
	.list{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 0 -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
			justify-content: flex-start;
		}
	}
	.item{
		background: #272A32;
		border-radius: 30px;
		width: calc(100% / 3 - 10px);
		padding: 30px;
		@media only screen and (max-width: 820px) {
			width: 320px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
			&:last-child {
				margin-right: 0;
			}
		}
	}
	h3{
		margin-top: 30px;
		font-weight: 700;
		font-size: 30px;
		line-height: 130%;
		min-height: 78px;
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #C6CAD3;
		margin-top: 25px;
	}
	.icon{
		background: #393D49;
		border-radius: 8px;
		width: 54px;
		height: 54px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal_button{
		margin-top: 30px;
		display: inline-block;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #FFFB1F;
		width: auto;
	}
	.modal{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #191B20;
		z-index: 9999;
		padding: 100px 0;
		visibility: hidden;
		transition: all .3s ease-in-out;
		opacity: 0;
		overflow-y: auto;
		@media only screen and (max-width: 600px) {
			padding: 30px 0;
		}
		&.visible{
			visibility: visible;
			transition: all .3s ease-in-out;
			opacity: 1;
		}
	}
	h4{
		text-align: center;
		font-weight: 500;
		font-size: 48px;
		line-height: 120%;
		@media only screen and (max-width: 600px) {
			font-size: 32px;
			line-height: 110%;
			text-align: left;
			padding-right: 40px;
		}
	}
	.close_modal {
		position: absolute;
		width: 30px;
		height: 30px;
		right: 30px;
		top: 30px;
		background: #454A58;
		line-height: 0;
		border-radius: 50%;
		transition: all .3s ease-in-out;
		z-index: 30;
		svg {
			fill: #fff;
			transition: all .3s ease-in-out;
		}
		&:hover {
			transition: all .3s ease-in-out;
			background: #FFFB1F;
			svg{
				fill: #000000;
				transition: all .3s ease-in-out;
			}
		}
	}
	.modal_position{
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.modal_item{
		width: calc(50% - 10px);
		background: #272A32;
		border-radius: 30px;
		padding: 50px;
		@media only screen and (max-width: 768px) {
			padding: 30px;
		}
		&:last-child{
			padding: 50px 60px 50px 50px;
			@media only screen and (max-width: 768px) {
				padding: 30px 60px 30px 30px;
			}
		}
		@media only screen and (max-width: 1024px) {
			width: 100%;
			&:last-child{
				margin-top: 40px;
			}
		}
	}
	.modal_list{
		li{
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #454A58;
			padding-bottom: 30px;
			margin-bottom: 30px;
			&:last-child{
				margin-bottom: 0;
				padding-bottom: 0;
				border-bottom: none;
			}
			p{
				width: calc(50% - 10px);
				&:first-child{
					font-weight: 700;
					font-size: 20px;
					line-height: 120%;
				}
				&:last-child{
					text-align: right;
					max-width: 227px;
					width: 100%;
					font-size: 20px;
					line-height: 120%;
				}
			}
		}
	}
	.step_list{
		position: relative;
		&:after{
			content: "";
			height: 86%;
			border-left: 1px dashed #fff;
			position: absolute;
			right: -30px;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.step_item{
		background: #454A58;
		border-radius: 20px;
		padding: 20px;
		margin-bottom: 16px;
		position: relative;
		&:nth-child(1){
			&:after{
				content: "";
				position: absolute;
				top: 29px;
				right: -27px;
				width: 20px;
				border-bottom: 1px dashed #fff;
			}
		}
		&:nth-child(2){
			display: inline-flex;
			flex-direction: column;
		}
		&:last-child{
			margin-bottom: 0;
			&:after{
				content: "";
				position: absolute;
				bottom: 29px;
				right: -27px;
				width: 20px;
				border-bottom: 1px dashed #fff;
			}
		}
		h5{
			font-weight: 450;
			font-size: 16px;
			line-height: 130%;
			span{
				background: #FFFFFF;
				border-radius: 500px;
				padding: 0 6px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				font-weight: 450;
				font-size: 12px;
				line-height: 140%;
				color: #393D49;
				margin-right: 6px;
			}
		}
	}
	.step_description{
		font-weight: 450;
		font-size: 14px;
		line-height: 140%;
		color: #C6CAD3;
		margin-top: 10px;
	}
`