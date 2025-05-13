import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useEffect, useState} from "react";
import StepInformationEarn from "layouts/Main/StepInformation/StepInformationEarn";
import StepInformationBuy from "layouts/Main/StepInformation/StepInformationBuy";
import StepInformationExchange from "layouts/Main/StepInformation/StepInformationExchange";
import StepInformationInsure from "layouts/Main/StepInformation/StepInformationInsure";
import StepInformationPredict from "layouts/Main/StepInformation/StepInformationPredict";
import StepInformationCard from "layouts/Main/StepInformation/StepInformationCard";
import StepInformationCHO from "layouts/Main/StepInformation/StepInformationCHO";
import axios from "axios";

export default function MainTabsInformation({t}) {
	const [step, setStep] = useState(0)
	const [array, setArray] = useState([])
	useEffect(() => {
		axios.get("https://api.cryptoforecast.io/api/v1/currency/ETH/daily_predictions?period=Months&prediction=ALL&profit=ALL").then(r => {
			setArray(r.data.items.slice(-7))
		})
	}, [])
	const renderSteps = () => {
		switch (step) {
			case 0: return <StepInformationEarn t = {t.step_earn}/>
			case 1: return <StepInformationBuy t = {t.step_buy}/>
			case 2: return <StepInformationExchange t = {t.step_exchange}/>
			case 3: return <StepInformationInsure t = {t.step_insure}/>
			case 4: return <StepInformationPredict t = {t.step_predict} array={array}/>
			case 5: return <StepInformationCard t = {t.step_card}/>
			case 6: return <StepInformationCHO t = {t.step_cho}/>
		}
	}
	return (
		<Wrapper>
			<CenterBlock>
				<div className="tab_block">
					<div className="tab_heading">
						<div className="list">
							{
								t.tabs_array.map((item, index) => {
									return (
										<button
											className={step === index ? "active" : ""}
											onClick={() => setStep(index)}
											key={index}
										>{item}
										</button>
									)
								})
							}
						</div>
						<div className="tab_arrows">
							<button onClick={() => setStep(step === 0 ? t.tabs_array.length - 1 : step - 1)}>
								<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M9.88388 16.8839C9.39573 17.372 8.60427 17.372 8.11612 16.8839L1.11612 9.88388C0.627962 9.39573 0.627962 8.60427 1.11612 8.11612L8.11612 1.11612C8.60427 0.62796 9.39573 0.62796 9.88388 1.11612C10.372 1.60427 10.372 2.39573 9.88388 2.88388L3.76777 9L9.88388 15.1161C10.372 15.6043 10.372 16.3957 9.88388 16.8839Z"/>
								</svg>
							</button>
							<button onClick={() => setStep(step === t.tabs_array.length - 1 ? 0 : step + 1)}>
								<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M1.11612 1.11612C1.60427 0.627961 2.39573 0.627961 2.88388 1.11612L9.88388 8.11612C10.372 8.60427 10.372 9.39573 9.88388 9.88388L2.88388 16.8839C2.39573 17.372 1.60427 17.372 1.11612 16.8839C0.627961 16.3957 0.627961 15.6043 1.11612 15.1161L7.23223 9L1.11612 2.88388C0.627961 2.39573 0.627961 1.60427 1.11612 1.11612Z"/>
								</svg>
							</button>
						</div>
					</div>
					<div className="step_block">
						{renderSteps()}
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 1024px) {
		margin-top: 70px;
	}
	.tab_block{
		background: #ebebeb;
		border-radius: 15px;
		padding: 30px;
		@media only screen and (max-width: 1024px) {
			padding: 40px 20px;
			margin-left: -40px;
			margin-right: -40px;
			width: calc(100% + 80px);
			border-radius: 0;
		}
		@media only screen and (max-width: 820px) {
			margin-left: -20px;
			margin-right: -20px;
			width: calc(100% + 40px);
		}
	}
	.tab_heading{
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			align-items: flex-start;
		}
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		@media only screen and (max-width: 1024px) {
			gap: 10px;
		}
		button{
			width: auto;
			padding: 6px 16px;
			height: 33px;
			border: 1px solid #D9D9D9;
			border-radius: 120px;
			font-weight: 500;
			font-size: 14px;
			line-height: 150%;
			&:hover{
				background: #F6F7F8;
			}
			&.active{
				border: 1px solid #FFFB1F;
				background: #FFFB1F;
			}
		}
	}
	.tab_arrows{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
		button{
			width: auto;
			svg{
				fill: #C6CAD3;
			}
			&:hover svg{
				fill: #191B20;
			}
			&:first-child{
				margin-right: 30px;
			}
		}
	}
	.step_block{
		margin: 30px 0 -10px 0;
		padding: 0 0 10px 0;
		flex-wrap: nowrap;
		overflow-x: auto;
		@media only screen and (max-width: 1024px) {
			margin: 30px -20px -10px -20px;
			padding: 0 20px 10px 20px;
		}
		::-webkit-scrollbar {
			width: 3px; height: 3px;
			@media only screen and (max-width: 1024px) {
				display: none;
			}
		}
		::-webkit-scrollbar-button {  display: none; }
		::-webkit-scrollbar-track {  background-color: #191B20;}
		::-webkit-scrollbar-track-piece { background-color: #ebebeb;}
		::-webkit-scrollbar-thumb { height: 50px; background-color: #191B20; border-radius: 3px;}
		::-webkit-scrollbar-corner { background-color: #191B20;}
		::-webkit-resizer { background-color: #191B20;}
	}
	.tab_item_block{
		flex: 0 0 auto;
		scroll-snap-align: start;
		width: 1140px;
	}
`
