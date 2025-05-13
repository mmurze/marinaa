import {useEffect} from "react";
import styled from "styled-components";
import Title from "components/Title";
import GradientButton from "components/Buttons/GradientButton";
import validator from "email-validator";
import CenterBlock from "helpers/CenterBlock";
import BorderInput from "layouts/Support/BorderInput";

export default function SupportStep5({email, onChange, onClick, onChangePhone, phone, back = false, stepBack, hideEmail = false}){
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [])

	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				{
					!hideEmail ? <BorderInput required={true} placeholder={t.placeholder_email} value={email} onChange={(e) => onChange({
						value: e,
						index: 5
					})}/> : null
				}
				<BorderInput placeholder={t.placeholder_phone} value={phone} onChange={(e) => onChangePhone(e)}/>
				{back ? (
					<div className="back_buttons">
						<GradientButton onClick={() => stepBack(true)}>{t.back}</GradientButton>
						<GradientButton disabled={!email.index && !validator.validate(email)} onClick={() => onClick(6)}>{t.submit_button}</GradientButton>
					</div>
				) : <GradientButton className="submit_button" disabled={!email.index && !validator.validate(email)} onClick={() => onClick(6)}>{t.submit_button}</GradientButton>}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 70px;
	.title{
		text-align: center;
	}
	.submit_button{
		width: auto;
		margin: 50px auto 0 auto;
		padding: 0 60px;
	}
	.description{
		text-align: center;
		margin-top: 20px;
		margin-bottom: 40px;
	}
	.step_title_support{
		margin-bottom: 45px;
	}
	.next_button{
		margin-top: 80px;
	}
	.border_button_block{
		margin-bottom: 18px;
		padding-top: 0;
	}
	.back_buttons{
		display: flex;
		justify-content: center;
		button{
			margin: 0 10px;
		}
	}
`
