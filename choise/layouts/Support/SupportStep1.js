import {useEffect} from "react";
import styled from "styled-components";
import ButtonsBlock from "./ButtonsBlock";
import Title from "components/Title";
import GradientButton from "components/Buttons/GradientButton";
import CenterBlock from "helpers/CenterBlock";
import BorderButton from "layouts/Support/BorderButton";

export default function SupportStep1({onClick, value, onChange, t}){
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
				<ButtonsBlock count={4}>
					{
						t.buttons.map((item, index) => {
							return (
								<BorderButton
									key={index}
									value={value}
									active={value.index === index + 1}
									onClick={() => onChange({
										value: item.label,
										index: index + 1
									})}
								>{item.icon && <img src={item.icon} alt={item.label}/>}{item.label}</BorderButton>
							)
						})
					}
				</ButtonsBlock>
				<GradientButton className="submit_button" disabled={!value.value.length} onClick={() => onClick(2)}>{t.submit_button}</GradientButton>
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
	.buttons_block_position{
		button{
			margin-right: 18px;
		}
	}
	@media only screen and (max-width: 820px) {
		.buttons_block_position{
			margin-bottom: -18px;
			button{
				width: calc(100% / 2 - 18px);
				margin-bottom: 18px;
			}
		}
	}
`
