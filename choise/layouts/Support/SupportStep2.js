import {useEffect} from "react";
import styled from "styled-components";
import ButtonsBlock from "./ButtonsBlock";
import Title from "components/Title";
import GradientButton from "components/Buttons/GradientButton";
import CenterBlock from "helpers/CenterBlock";
import BorderButton from "layouts/Support/BorderButton";

export default function SupportStep2({value, onChange, onClick, initValue, t}){

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [])

	const onHandleClick = () => {
		if (value.index === 2 || value.index === 4 || value.index === 5 || value.index === 9) {
			onClick(4)
			initValue({
				value: '',
				index: null
			})
		} else {
			onClick(3)
		}
	}

	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<ButtonsBlock count={3}>
					{
						t.buttons.map((item, index) => {
							return (
								<BorderButton
									key={index}
									value={value}
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
				<GradientButton className="submit_button" disabled={!value.value.length} onClick={onHandleClick}>{t.submit_button}</GradientButton>
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
			margin-right: 18px;
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-right: 0;
			}
		}
	}
	.submit_button{
		width: auto;
		margin: 50px auto 0 auto;
		padding: 0 60px;
	}
`
