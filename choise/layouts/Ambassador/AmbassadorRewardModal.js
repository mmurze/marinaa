import styled from "styled-components";
import Modal from "components/Modal";
import Title from "components/Title";
import numberFormat from "helpers/numberFormat";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useState} from "react";
import LoadingAnimation from "components/LoadingAnimation";
import Link from "next/link";
import Image from "next/image";
import {getUserPoints, writeRewardUser} from "utils/ambassador";
import {stateWeb3} from "state/web3";
export default function AmbassadorRewardModal({visible, onCallBack, item, t}) {
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const onHandleClick = async () => {
		setLoading(true)
		try {
			writeRewardUser({
				rewardId: item.id,
				profileUserWallet: wallet,
			}).then(r => {
				if (r.status) {
					setLoading(false)
					setSuccess(true)
					getUserPoints(snap.profileUserId)
				} else {
					setLoading(false)
				}
			})
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}
	const ContentInformationBlock = () => {
		return (
			<>
				<div className="modal_id"><span>{t.ID} {item.id}</span></div>
				<Title><h4>{item.title}</h4></Title>
				<div className="modal_content">
					item.content
				</div>
				<p className="modal_subtitle">{t.price}</p>
				<p className="modal_price_value">{numberFormat(item.points)} {t.points}</p>
				<p className="balance_points">{t.balance_points1} {snap.ambassadorUserPoints} {t.points}</p>
				{
					snap.ambassadorUserPoints >= item.points ? (
						<button className="submit_button" onClick={onHandleClick}>{t.submit_button}</button>
					) : (
						<div className="error">{t.error}</div>
					)
				}
			</>
		)
	}
	const SuccessInformationBlock = () => {
		return (
			<>
				<div className="modal_image">
					<Image src="/pic/ambassador/success-reward-modal.png" width={77} height={82} priority={true} alt="Your request has been sent"/>
				</div>
				<Title className="modal_success"><h4>{t.title}</h4></Title>
				<p className="modal_content">{t.modal_content}</p>
				<p className="modal_rewards_profile">{t.modal_rewards_profile} <Link href="/profile?tab=ambassadors">{t.profile}</Link></p>
				<button className="submit_button" onClick={() => {
					onCallBack(false)
					setTimeout(() => {
						setSuccess(false)
					}, 300)
				}}>{t.done}</button>
			</>
		)
	}
	return (
		<Modal background="#ffffff" close={!loading} width={450} active={visible} onCallBack={() => {
			setSuccess(false)
			setLoading(false)
			onCallBack(false)
		}}>
			<Wrapper>
				{
					loading ? <LoadingAnimation/> : (
						success ? <SuccessInformationBlock/> : <ContentInformationBlock/>
					)
				}
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	text-align: center;
	.modal_id{
		display: flex;
		justify-content: center;
		span{
			background: #DDDFE4;
			border-radius: 11.5px;
			height: 23px;
			padding: 5px 10px;
			font-size: 12px;
			line-height: 110%;
			color: #80889C;
		}
	}
	.title{
		margin-top: 40px;
		&.modal_success{
			margin-top: 20px;
		}
	}
	.modal_content{
		margin-top: 14px;
		font-size: 14px;
		line-height: 140%;
		color: #80889C;
	}
	.modal_subtitle, .balance_points{
		margin-top: 30px;
		font-size: 14px;
		line-height: 140%;
		color: #80889C;
	}
	.modal_price_value{
		font-weight: 700;
		font-size: 18px;
		line-height: 140%;
	}
	.submit_button{
		margin-top: 20px;
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
		border-radius: 40px;
		height: 52px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}
	.error{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		height: 52px;
		border-radius: 40px;
		background: #FFEEEF;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #FF6464;
		margin-top: 20px;
		cursor: default;
	}
	.loading_animation{
		margin: 120px 0;
	}
	.modal_rewards_profile{
		font-size: 18px;
		line-height: 130%;
		color: #80889C;
		margin-top: 80px;
		a{
			color: #0285FD;
		}
	}
	h4{
		margin-top: 0;
		min-height: auto;
		font-size: 21px;
		line-height: 120%;
	}
`