import {useEffect, useState} from "react";
import styled from "styled-components";
import Title from "components/Title";
import BorderTextarea from "layouts/Support/SupportBorderTextarea";
import GradientButton from "components/Buttons/GradientButton";
import CenterBlock from "helpers/CenterBlock";

export default function SupportStep4({step2, value, onChange, onClick, uploadFiles, files, back = false, stepBack, t}){
	const [error, setError] = useState(false)

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [])

	const renderMessage = () => {
		switch (step2.index){
			case 2: return t.message.case2
			case 5: return t.message.case5
			case 4: return t.message.case4
		}
	}

	// const onHandleChange = (e) => {
	// 	if (e.target.files.length <= 5) {
	// 		uploadFiles(e.target.files)
	// 		setError(false)
	// 	} else {
	// 		setError(true)
	// 	}
	// }

	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="textarea_block">
					<BorderTextarea placeholder="Message" name="message" value={value.value} onChange={(e) => onChange({
						value: e,
						index: 4
					})}/>
					{/*<SupportFileAttach files={files} onChange={onHandleChange}/>*/}
					{/*<MaxFilesDescription errorFile={error} hasFiles={!!files.length && !error}>*/}
					{/*	{files.length && !error ? `${files.length} files uploaded` : '5 files max'}*/}
					{/*</MaxFilesDescription>*/}
				</div>
				{step2.index === 2 || step2.index === 5 || step2.index === 4 && (
					<p className="message">
						<img src="/pic/support/information.svg" alt="Information"/>
						{renderMessage()}
					</p>
				)}
				{back ? (
					<div className="back_buttons">
						<GradientButton onClick={() => stepBack(true)}>{t.back}</GradientButton>
						<GradientButton disabled={!value.index} onClick={() => onClick(5)}>{t.submit_button}</GradientButton>
					</div>
				) : <GradientButton className="submit_button" disabled={!value.index} onClick={() => onClick(5)}>{t.submit_button}</GradientButton>}
			</CenterBlock>
		</Wrapper>
	)
}

const MaxFilesDescription = styled.div`
	height: 25px;
	background: #F9F9F9;
	border: 1px solid #E0F0FF;
	box-sizing: border-box;
	box-shadow: 0 0 20px rgba(41, 146, 250, 0.08);
	border-radius: 5px;
	position: absolute;
	right: ${props => props.hasFiles ? '-105px' : '-75px'};
	bottom: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 5px 14px;
	font-size: 12px;
	line-height: 15px;
	color: ${props => props.errorFile ? '#D80027' : '#ABB1CC'};
	@media only screen and (max-width: 820px) {
		right: 0;
		bottom: -10px;
	}
`

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
	}
	.textarea_block{
		position: relative;
		max-width: 560px;
		width: 100%;
		margin: 0 auto;
		.file_upload{
			position: absolute;
			right: 20px;
			bottom: 20px;
			z-index: 10;
			cursor: pointer;
		}
	}
	.back_buttons{
		display: flex;
		justify-content: center;
		button{
			margin: 0 10px;
		}
	}
	.message{
		max-width: 560px;
		width: 100%;
		margin: 14px auto 0 auto;
		font-size: 14px;
		line-height: 20px;
		color: #7B8199;
		display: flex;
		align-items: center;
		position: relative;
		padding-left: 23px;
		box-sizing: border-box;
		img{
			position: absolute;
			left: 0;
			top: 3px;
			margin-right: 5px;
		}
	}
	.next_button{
		margin-top: 80px;
	}
`
