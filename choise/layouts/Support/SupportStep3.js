import {useEffect} from "react";
import styled from "styled-components";
import ButtonsBlock from "./ButtonsBlock";
import Title from "components/Title";
import GradientButton from "components/Buttons/GradientButton";
import CenterBlock from "helpers/CenterBlock";
import BorderButton from "layouts/Support/BorderButton";

export default function SupportStep3({step2, value, onChange, onClick, back = false, stepBack, t}){
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [])

	const renderButtons = () => {
		switch (step2.index){
			case 1: return t.buttons.case1
			case 3: return t.buttons.case3
			case 6: return t.buttons.case6
			case 7: return t.buttons.case7
			case 8: return t.buttons.case8
			case 10: return t.buttons.case10
		}
	}

	const renderSubtitle = () => {
		switch (step2.index){
			case 1: return t.subtitle.case1
			case 3: return t.subtitle.case3
			case 6: return t.subtitle.case6
			case 7: return t.subtitle.case7
			case 8: return t.subtitle.case8
			case 10: return t.subtitle.case10
		}
	}

	const renderCount = () => {
		if (step2.index === 1 || step2.index === 7 || step2.index === 10) {
			return 3
		} else if (step2.index === 3 || step2.index === 7) {
			return 2
		} else return 1
	}

	const renderWidth = () => {
		if (step2.index === 1 || step2.index === 7 || step2.index === 10) {
			return 846
		} else if (step2.index === 3 || step2.index === 7) {
			return 558
		} else return 270
	}

	const skipStep = () => {
		onChange({value: '', index: null})
		onClick(4);
	}

	return (
		<Wrapper count={renderCount()}>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="sub_title">{renderSubtitle()}</p>
				<ButtonsBlock width={renderWidth()} count={renderCount()}>
					{
						renderButtons().map((item, index) => {
							return (
								<BorderButton
									key={index}
									value={value.value}
									active={value.index === index + 1}
									onClick={() => onChange({
										value: item,
										index: index + 1
									})}
								>{item}</BorderButton>
							)
						})
					}
				</ButtonsBlock>
				<button onClick={skipStep} className="skip_button">{t.skip}</button>
				{back ? (
					<div className="back_buttons">
						<GradientButton onClick={() => stepBack(true)}>{t.back}</GradientButton>
						<GradientButton disabled={!value.value.length} onClick={() => onClick(4)}>{t.submit_button}</GradientButton>
					</div>
				) : <GradientButton disabled={!value.value.length} onClick={() => onClick(4)}>{t.submit_button}</GradientButton>}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 70px;
	.title{
		text-align: center;
	}
	.buttons_block_position{
		margin-bottom: -18px;
		button{
			margin-bottom: 18px;
			margin-right: ${props => props.count === 1 ? 0 : '18px'};
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-right: 0;
			}
		}
	}
	.gradient_button{
		width: auto;
		margin: 0 auto;
		min-width: 250px;
	}
	.skip_button{
		width: auto;
		margin: 80px auto 25px auto;
		font-size: 18px;
		line-height: 23px;
		text-align: center;
		color: #2992FA;
	}
	.back_buttons{
		display: flex;
		justify-content: center;
		button{
			margin: 0 10px;
		}
	}
	.sub_title{
		text-align: center;
		margin-top: 20px;
	}
`
