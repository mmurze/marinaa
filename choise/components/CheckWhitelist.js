import styled from "styled-components";
import {useEffect, useState} from "react";
import Image from "next/image";
import GradientButton from "components/Buttons/GradientButton";
import Modal from "components/Modal";
import {useRouter} from "next/router";
import axios from "axios";

export default function CheckWhitelist() {
	const router = useRouter()
	const [stage, setStage] = useState('info')
	const [name, setName] = useState('')
	const [active, setActive] = useState(false)
	
	useEffect(async () => {
		const id = router.asPath.split("id=")[1];
		if (id) {
			const data = (await axios.get("/api/check-id", {params: {id}})).data
			if (data.status) {
				setName(data.name)
				setActive(true)
			}
		}
	}, [])
	
	const onHandleClick = () => {
		setActive(false)
		router.push("/")
	}
	
	const renderStages = () => {
		switch (stage) {
			case "info": return (
				<div className="information_modal">
					<div className="image">
						<Image src="/pic/modal-info.png" width={174} height={150} alt="confirm your email" priority={true}/>
					</div>
					<h3>thank you, {name}</h3>
					<p>You have now joined our waitlist! <span>You will be notified by email</span> as soon as the sale starts. We are looking forward to selling CHO Tokens but now why don't you go and get some CHOcolate while having a break? 😉</p>
					<GradientButton onClick={() => setStage('success')}>Got it</GradientButton>
				</div>
			)
			case "success": return (
				<div className="information_modal">
					<div className="image">
						<Image src="/pic/modal-success.png" width={159} height={158} alt="confirm your email" priority={true}/>
					</div>
					<h3>you are on the waitlist</h3>
					<p>Increase chances to get on the Whitelist by participating in our <a rel="noreferrer nofollow" href="https://gleam.io/" target="_blank">Gleam.io contest</a>. Complete all the tasks, join our community and be the luckiest winner</p>
					<GradientButton onClick={onHandleClick}>Raise my chance with Gleam</GradientButton>
				</div>
			)
		}
	}
	
	return (
		<Modal
			close={false}
			active={active}
			onCallBack={setActive}
		>
			<Wrapper>
				{renderStages()}
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	.information_modal{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #F9F9F9;
		text-align: center;
		h3{
			margin-top: 40px;
			font-size: 36px;
			line-height: 120%;
		}
		p{
			font-size: 17px;
			line-height: 130%;
			letter-spacing: -0.03em;
			margin-top: 20px;
			span, a{
				color: #FFFB1F;
			}
		}
	}
	.gradient_button{
		margin-top: 20px;
	}
`
