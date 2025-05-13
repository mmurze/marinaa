import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSnapshot} from "valtio";
import {stateWeb3} from "state/web3";

export default function ChoSwapGasModal({gwei, onClick, active, closeModal}) {
	const {network, hexChainId} = useSnapshot(stateWeb3)
	const [array, setArray] = useState([])
	const [gasIndex, setGasIndex] = useState(0)
	
	useEffect(() => {
		if (network) {
			takeGas()
			const timer = setInterval(() => {
				takeGas()
			}, 20000);
			return () => clearInterval(timer);
		}
	}, [network])
	
	const takeGas = () => {
		axios.get("/api/swap/gas", {params: {
				chainId: hexChainId
			}}).then(r => {
			setArray(r.data)
			onClick(r.data[gasIndex])
		})
	}
	
	return (
		<Wrapper className={active ? "active" : ""}>
			<div className="modal">
				<h4>Advanced Settings</h4>
				<div className="gas_label">
					<p>Gas price</p>
					<p className="gas_value">{gwei.title} (<strong>{gwei.value}</strong> Gwei)</p>
				</div>
				<div className="gas_list">
					{
						array.map((item, index) => {
							return (
								<div
									className={`gas_item ${gwei.title === item.title ? "active" : ""}`}
									onClick={() => {
										onClick(item)
										setGasIndex(index)
									}}
									key={index}
								>
									<div className="gas_title">
										<span><img src="/pic/cho/swap/gwei-check.svg" alt={item.title}/></span>
										<p>{item.title}</p>
									</div>
									<p className="gas_value_description"><strong>{item.value}</strong> Gwei</p>
								</div>
							)
						})
					}
				</div>
				<div className="slippage_block">
					<p>Slippage %</p>
					<ul className="slippage_list">
						<li className="active"><strong>1</strong> %</li>
					</ul>
				</div>
			</div>
			<div className="overlay" onClick={() => closeModal(false)}/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	visibility: hidden;
	transition: all .3s ease-in-out;
	&.active{
		visibility: visible;
		transition: all .3s ease-in-out;
		.modal{
			transform: scale(1);
			transition: all .3s ease-in-out;
			opacity: 1;
			margin-top: 0;
		}
		.overlay{
			background: rgba(0, 0, 0, .3);
			backdrop-filter: blur(7px);
			transition: all .3s ease-in-out;
		}
	}
	.modal{
		max-width: 440px;
		width: calc(100% - 40px);
		background: #191B20;
		color: #F9F9F9;
		position: relative;
		z-index: 20;
		padding: 30px;
		border-radius: 24px;
		transform: scale(.2);
		margin-top: 20px;
		transition: all .3s ease-in-out;
		opacity: 0;
	}
	.overlay{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0);
		backdrop-filter: blur(0);
		transition: all .3s ease-in-out;
	}
	.gas_label{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30px;
		font-size: 16px;
	}
	.gas_value{
		text-transform: capitalize;
		color: #939299;
		strong{
			color: #F9F9F9;
			margin: 0 3px;
		}
	}
	.gas_list{
		margin-top: 30px;
	}
	.gas_title{
		display: flex;
		align-items: center;
		span{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 24px;
			height: 20px;
			border: 1px solid #464551;
			border-radius: 16px;
			transition: all .3s ease-in-out;
			padding: 6px;
			svg{
				opacity: 0;
			}
		}
		p{
			width: calc(100% - 24px);
			padding-left: 10px;
			color: #939299;
		}
	}
	.gas_item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
		text-transform: capitalize;
		cursor: pointer;
		&.active{
			.gas_title{
				p{
					color: #F9F9F9;
				}
				span{
					background: #7efb31;
					border: 1px solid #7efb31;
					transition: all .3s ease-in-out;
					svg{
						opacity: 1;
					}
				}
			}
		}
		&:last-child{
			margin-bottom: 0;
		}
	}
	.gas_value_description{
		color: #939299;
		strong{
			color: #F9F9F9;
		}
	}
	.slippage_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30px;
	}
	.slippage_list{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		li{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 32px;
			background: #3B3A53;
			color: #F9F9F9;
			padding: 5px 20px;
			border-radius: 10px;
			&.active{
				cursor: default;
				background: #F9F9F9;
				color: #3B3A53;
			}
		}
	}
`