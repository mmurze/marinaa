import styled from "styled-components";
import Title from "components/Title";
import {useEffect, useState} from "react";
import numberFormat from "helpers/numberFormat";
import Image from "next/image";
import {filter} from "smart-array-filter";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function ChoSwapModal({value, active, onClick, closeModal}) {
	const snap = useSnapshot(state);
	const [search, setSearch] = useState("")
	const [listArray, setListArray] = useState([])
	
	useEffect(() => {
		setListArray(snap.balanceArray)
	}, [snap.balanceArray])
	
	const onHandleClickModal = () => {
		closeModal(false)
		setSearch("")
	}
	useEffect(() => {
		if (search.length) {
			const filterData = filter(snap.balanceArray, {
				keywords: `name:${search}`
			})
			setListArray(filterData)
		} else setListArray(snap.balanceArray)
	}, [search])
	
	const onHandleClick = (item) => {
		if (item.symbol !== "CHO"){
			onHandleClickModal()
			onClick(item)
		}
	}
	
	return (
		<Wrapper className={active ? "active" : ""}>
			<div className="select_modal">
				<button className="close_modal" onClick={onHandleClickModal}>
					<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L7 6.08579L12.2929 0.792893C12.6834 0.402369 13.3166 0.402369 13.7071 0.792893C14.0976 1.18342 14.0976 1.81658 13.7071 2.20711L8.41421 7.5L13.7071 12.7929C14.0976 13.1834 14.0976 13.8166 13.7071 14.2071C13.3166 14.5976 12.6834 14.5976 12.2929 14.2071L7 8.91421L1.70711 14.2071C1.31658 14.5976 0.683417 14.5976 0.292893 14.2071C-0.0976311 13.8166 -0.0976311 13.1834 0.292893 12.7929L5.58579 7.5L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z"/>
					</svg>
				</button>
				<Title><h5>Select token</h5></Title>
				<div className="select_form">
					<input
						type="text"
						className="search_input"
						value={search} onChange={(e) => setSearch(e.target.value)}
						placeholder="Search"
					/>
					<button className="search_button">
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.4145 12.4952L11.0139 10.114C11.9458 8.95217 12.397 7.47745 12.2749 5.9931C12.1528 4.50875 11.4667 3.12759 10.3575 2.13362C9.24834 1.13965 7.80051 0.608415 6.3117 0.649154C4.82289 0.689893 3.40628 1.29951 2.35314 2.35265C1.3 3.40579 0.690381 4.8224 0.649642 6.31121C0.608903 7.80002 1.14014 9.24785 2.13411 10.357C3.12808 11.4662 4.50924 12.1523 5.99359 12.2744C7.47794 12.3965 8.95266 11.9453 10.1145 11.0134L12.4957 13.3946C12.5558 13.4553 12.6274 13.5034 12.7063 13.5363C12.7851 13.5691 12.8697 13.586 12.9551 13.586C13.0405 13.586 13.1251 13.5691 13.2039 13.5363C13.2828 13.5034 13.3544 13.4553 13.4145 13.3946C13.5311 13.274 13.5963 13.1127 13.5963 12.9449C13.5963 12.7771 13.5311 12.6159 13.4145 12.4952ZM6.48451 11.0134C5.58868 11.0134 4.71297 10.7478 3.96811 10.2501C3.22325 9.7524 2.6427 9.045 2.29988 8.21736C1.95706 7.38972 1.86737 6.479 2.04213 5.60038C2.2169 4.72176 2.64829 3.9147 3.28174 3.28125C3.91519 2.6478 4.72225 2.21641 5.60087 2.04165C6.47949 1.86688 7.3902 1.95657 8.21784 2.2994C9.04549 2.64222 9.75288 3.22276 10.2506 3.96762C10.7483 4.71248 11.0139 5.58819 11.0139 6.48403C11.0139 7.6853 10.5367 8.83737 9.68729 9.6868C8.83786 10.5362 7.68579 11.0134 6.48451 11.0134Z"/>
						</svg>
					</button>
				</div>
				<div className="list">
					{
						listArray.map((item, index) => {
							return (
								<div
									className={`select_item ${value === item.label ? "active" : ""} ${item.symbol === "CHO" ? "disabled" : ""}`}
									onClick={() => onHandleClick(item)}
									key={index}>
									<div className="content_box">
										{
											item.icon.length ? (
												<div className="icon">
													<Image
														width={24}
														height={24}
														src={`https://defi.choise.com${item.icon}`}
														alt={item.name}
													/>
												</div>
											) : null
										}
										<p>
											{item.name}
											<span>{numberFormat(item.balanceUi, ",", ",", "4")} {item.symbol} · ${numberFormat(item.price, ",", ",", "4")}</span>
										</p>
									</div>
									<p className="value_box">${numberFormat(item.balanceUi * item.price, ",", ",", "2")}</p>
								</div>
							)
						})
					}
				</div>
			</div>
			<div className="overflow" onClick={onHandleClickModal}/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
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
	&.active{
		visibility: visible;
		transition: all .3s ease-in-out;
		.select_modal{
			transform: scale(1);
			transition: all .3s ease-in-out;
		}
	}
	.overflow{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		background: rgba(25, 27, 32, 0.4);
	}
	.select_modal{
		background: #F9F9F9;
		border-radius: 30px;
		max-width: 500px;
		width: calc(100% - 40px);
		padding: 30px;
		position: relative;
		transform: scale(0);
		transition: all .3s ease-in-out;
		z-index: 30;
	}
	.select_form{
		position: relative;
		margin-top: 16px;
	}
	.search_input{
		height: 48px;
		background: #EEEFF2;
		border-radius: 12px;
		padding: 12px 60px 12px 20px;
		font-size: 16px;
		line-height: 24px;
	}
	.search_button{
		width: 40px;
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		display: flex;
		align-items: center;
		&:hover svg{
			fill: #191B20;
		}
		svg{
			fill: #A2A8B7;
		}
	}
	.content_box{
		display: flex;
		align-items: center;
		p{
			font-size: 14px;
			line-height: 16px;
			margin-left: 8px;
			span{
				display: block;
				color: #878787;
			}
		}
	}
	.list{
		margin-top: 30px;
		overflow-y: auto;
		min-height: 100px;
		max-height: 300px;
		padding-right: 20px;
		padding-bottom: 10px;
		.select_item{
			margin-bottom: 17px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;
			&.disabled{
				cursor: default;
				opacity: .5;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.value_box{
		font-size: 16px;
		line-height: 24px;
	}
	.close_modal{
		width: auto;
		position: absolute;
		top: 40px;
		right: 30px;
		z-index: 30;
		&:hover{
			svg{
				fill: #191B20;
			}
		}
		svg{
			fill: #A2A8B7;
		}
	}
	.icon{
		img{
			border-radius: 50%;
		}
	}
`