import styled from "styled-components";
import Responsive from "helpers/Responsive";
import Image from "next/image";
import numberFormat from "helpers/numberFormat";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useEffect, useState} from "react";
import AmbassadorRewardModal from "layouts/Ambassador/AmbassadorRewardModal";
import {checkSingleTaskReward} from "utils/ambassador";
import AvailableCountriesModal from "components/AvailableCountriesModal";
import Link from "next/link";
import {stateWeb3} from "state/web3";
import {useRouter} from "next/router";

export default function AmbassadorRewardItem({item, modal = false}) {
	const {locale} = useRouter()
	const {rewards_list} = require(`locale/page-ambassador/${locale}.json`)
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [visible, setVisible] = useState(false)
	const [disabledSingle, setDisabledSingle] = useState(true)
	
	useEffect(() => {
		if (wallet && item.single) makeRequest()
		if (!item.single) setDisabledSingle(false)
	}, [item.single, wallet])
	
	const makeRequest = () => {
		if (snap.verificatedUser) {
			checkSingleTaskReward({
				userWallet: wallet,
				id: item.id,
				table: "reward"
			}).then(r => {
				if (item.single) {
					setDisabledSingle(r)
				} else setDisabledSingle(false)
			})
		}
	}
	
	return (
		<Wrapper className={`item ${modal ? "modal" : ""}`}>
			<AmbassadorRewardModal
				visible={visible}
				onCallBack={() => {
					setVisible(false)
					makeRequest()
				}}
				item={item}
				t={rewards_list.item.reward_modal}
			/>
			{
				wallet ? (
					item.single && snap.verificatedUser && (
						<div className={`card_single ${disabledSingle ? "disabled" : ""}`}>
							{disabledSingle ? rewards_list.item.received : rewards_list.item.one_time }
						</div>
					)
				) : (
					disabledSingle ? <div className="card_single">{rewards_list.item.one_time}</div> : null
				)
			}
			<Responsive width={1024} mobile={
				<div className="cub_mobile">
					<Image src="/pic/ambassador/cub-mobile.png" width={90} height={145} priority={true} alt={item.title}/>
				</div>
			}/>
			<div className="cub">
				<span className="item_id">{rewards_list.item.ID} {item.id}</span>
				<Responsive width={1024}>
					<Image src="/pic/ambassador/cub.png" width={90} height={68} priority={true} alt={item.title}/>
				</Responsive>
			</div>
			<div className="card_right">
				<div className="content">
					<h3>{item.title}</h3>
					<p>{item.content}</p>
					{item.id === 14398 && !modal && (
						<AvailableCountriesModal/>
					)}
				</div>
				<div className="card_price">
					<span>{rewards_list.item.price}</span>
					<p>{numberFormat(item.points, ",", ",")} {rewards_list.item.points}</p>
				</div>
				{/*<button className="soon" disabled={true}>Soon</button>*/}
				{
					!modal && (
						wallet ? (
							snap.verificatedUser ? (
								<button
									disabled={disabledSingle}
									onClick={() => setVisible(true)}
									className="get_reward">{rewards_list.item.reward}</button>
							) : (
								<Link href="/profile" className="get_reward">
									{rewards_list.item.sign_up}
								</Link>
							)
						) : (
							<button className="get_reward" onClick={() => state.walletConnectModal = true}>{rewards_list.item.connect_wallet}</button>
						)
					)
				}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 25px 40px;
	background: #F6F7F8;
	border-radius: 20px;
	margin-bottom: 20px;
	display: flex;
	height: 132px;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	position: relative;
	&.modal{
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		height: auto;
		padding: 5px 0 0 0;
		border: none;
		border-radius: 0;
		.card_price{
			margin-top: 20px;
		}
		.cub{
			display: none;
		}
		.content{
			margin: 0;
		}
		.card_single{
			right: auto;
			left: 0;
			border-radius: 20px;
			position: relative;
			margin-bottom: 20px;
		}
		.card_price{
			max-width: 100%;
		}
		.card_right{
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			width: 100%;
		}
	}
	@media only screen and (max-width: 1024px) {
		height: auto;
		align-items: flex-start;
		flex-direction: column;
		justify-content: flex-start;
	}
	@media only screen and (max-width: 600px) {
		width: calc(100% - 20px);
		margin-right: 20px;
		flex: 0 0 auto;
		scroll-snap-align: start;
		&:last-child{
			margin-right: 0;
		}
	}
	&:last-child{
		margin-bottom: 0;
	}
	.item_id{
		text-align: center;
		font-size: 12px;
		line-height: 110%;
		color: #80889C;
		background: #DDDFE4;
		border-radius: 11.5px;
		width: 100%;
		padding: 5px 10px;
		display: flex;
		justify-content: center;
		margin-bottom: 16px;
	}
	.cub{
		width: 90px;
		margin-bottom: -25px;
		line-height: 0;
		@media only screen and (max-width: 1024px) {
			margin-bottom: 0;
		}
	}
	.get_reward{
		width: auto;
		min-width: 200px;
		padding: 16px 40px;
		border-radius: 40px;
		border: 1px solid #C6CAD3;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		height: 56px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 1024px) {
			width: 100%;
			margin-top: 40px;
		}
		&:disabled{
			opacity: .4;
			cursor: default;
			&:hover{
				border: 1px solid #C6CAD3;
				background: transparent;
			}
		}
		&:hover{
			border: 1px solid #FFFB1F;
			background: #FFFB1F;
		}
	}
	.content{
		max-width: 527px;
		width: 100%;
		margin: 0 20px;
		p{
			margin-top: 10px;
			font-size: 18px;
			line-height: 120%;
			color: #656D81;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow-y: hidden;
		}
	}
	h3{
		font-size: 22px;
		line-height: 120%;
	}
	.card_single{
		position: absolute;
		top: 0;
		right: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 0 20px;
		background: #FFFB20;
		height: 30px;
		padding: 0 15px;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		&.disabled{
			background: #DDDDDD;
		}
	}
	.card_price{
		max-width: 200px;
		width: 100%;
		@media only screen and (max-width: 1024px) {
			max-width: 100%;
			margin-top: 20px;
		}
		span{
			font-size: 16px;
			line-height: 110%;
			color: #80889C;
		}
		p{
			font-weight: 700;
			font-size: 22px;
			line-height: 120%;
			margin-top: 10px;
			@media only screen and (max-width: 1024px) {
				color: #0285FD;
			}
		}
	}
	.card_right{
		width: calc(100% - 80px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			width: 100%;
			flex-direction: column;
			margin-top: 30px;
		}
	}
	.cub_mobile{
		position: absolute;
		top: 20px;
		right: 0;
		line-height: 0;
	}
	.soon{
		width: auto;
		padding: 16px 65px;
		height: 56px;
		border-radius: 40px;
		border: 1px solid #C6CAD3;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		opacity: .4;
		cursor: default;
	}
	.card_single{
		p{
			font-size: 16px !important;
		}
	}
	.check_countries{
		padding: 0;
		margin: 10px 0 0 0;
		height: auto;
		background: transparent;
		border-bottom: 1px dashed #191B20;
		border-radius: 0;
	}
`
