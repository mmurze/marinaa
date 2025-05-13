import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useState} from "react";

export default function Million4choForm() {
	const [active, setActive] = useState(false)
	const [price, setPrice] = useState("")
	const [description, setDescription] = useState("")
	
	const onHandleSubmit = (e) => {
		e.preventDefault()
		setActive(false)
	}
	return (
		<Wrapper>
			<div className={`box ${active ? "active" : ""}`}>
				<CenterBlock>
					<div className="live">
						<p>CHO live price</p>
						<span>$1.045</span>
					</div>
					<form onSubmit={onHandleSubmit}>
						<div className="list">
							<div className="form_item">
								<p>Enter your price prediction</p>
								<input
									type="number"
									onWheel={e => e.currentTarget.blur()}
									required={true}
									placeholder="0.000"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
								/>
								<span className="input_placeholder">$</span>
							</div>
							<div className="form_item">
								<p>Tell us why you are thinking so</p>
								<input
									type="text"
									onWheel={e => e.currentTarget.blur()}
									required={true}
									placeholder="Enter why"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>
						</div>
						<div className="buttons">
							<button className="rules" type="button">Rules</button>
							<button className="submit">Make a tweet</button>
						</div>
					</form>
				</CenterBlock>
			</div>
			{
				!active && (
					<div className="box_button">
						<CenterBlock>
							<button onClick={() => setActive(true)} className="make_tweet_button">Make a tweet</button>
						</CenterBlock>
					</div>
				)
			}
			<div className={`overlay ${active ? "active" : ""}`} onClick={() => setActive(false)}/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
	.box{
		background: #8C5FEC;
		box-shadow: 0px -2px 44px rgba(0, 0, 0, 0.06);
		position: relative;
		z-index: 100;
		@media only screen and (max-width: 1060px) {
			display: none;
			border-radius: 10px 10px 0 0;
			&.active{
				display: block;
			}
		}
	}
	.box_button{
		display: none;
		justify-content: center;
		background: #8C5FEC;
		box-shadow: 0px -2px 44px rgba(0, 0, 0, 0.06);
		position: relative;
		z-index: 100;
		width: 100%;
		border-radius: 10px 10px 0 0;
		.center_block{
			display: flex;
			justify-content: center;
		}
		@media only screen and (max-width: 1060px) {
			display: block;
		}
	}
	.make_tweet_button{
		background: #FFFB1F;
		border-radius: 40px;
		height: 60px;
		padding: 8px 20px;
		font-weight: 700;
		font-size: 14px;
		line-height: 24px;
		text-transform: uppercase;
	}
	.overlay{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
		opacity: 0;
		visibility: hidden;
		transition: .3s ease-in-out;
		&.active{
			opacity: 1;
			visibility: visible;
			transition: .3s ease-in-out;
		}
	}
	.center_block{
		height: 80px;
		padding: 12px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media only screen and (max-width: 1060px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			height: auto;
			padding: 30px 0;
		}
	}
	.live{
		background: #7D4EE1;
		border-radius: 8px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 3px 3px 3px 12px;
		font-size: 12px;
		line-height: 130%;
		width: 210px;
		@media only screen and (max-width: 1060px) {
			width: 100%;
		}
		p{
			color: #CDB5F6;
			margin-right: 15px;
		}
		span{
			width: 98px;
			background: #F9F9F9;
			border-radius: 6px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 700;
			color: #A46AFF;
			height: 34px;
			padding: 9px 17px;
		}
	}
	form{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: calc(100% - 210px);
		padding-left: 18px;
		@media only screen and (max-width: 1060px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			width: 100%;
			padding-left: 0;
			margin-top: 30px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 35px;
		}
	}
	.list, .buttons{
		display: flex;
		align-items: center;
	}
	.list{
		width: calc(100% - 233px);
		padding-right: 80px;
		@media only screen and (max-width: 1060px) {
			width: 100%;
			padding-right: 0;
			display: flex;
			justify-content: space-between;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.buttons{
		width: 233px;
		justify-content: space-between;
		@media only screen and (max-width: 1060px) {
			width: 100%;
			justify-content: space-between;
			margin-top: 20px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.rules{
		width: 82px;
		background: #966CEF;
		border-radius: 40px;
		padding: 8px 20px;
		font-weight: 700;
		font-size: 14px;
		line-height: 24px;
		text-transform: uppercase;
		color: #F9F9F9;
		height: 40px;
		@media only screen and (max-width: 1060px) {
			width: calc(50% - 10px);
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			height: 60px;
		}
	}
	.submit{
		width: 141px;
		background: #FFFB1F;
		border-radius: 40px;
		font-weight: 700;
		font-size: 14px;
		line-height: 24px;
		height: 40px;
		color: #3F3F3F;
		padding: 8px 20px;
		text-transform: uppercase;
		@media only screen and (max-width: 1060px) {
			width: calc(50% - 10px);
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-top: 20px;
			height: 60px;
		}
	}
	.form_item{
		position: relative;
		width: 100%;
		&:nth-child(1){
			width: 206px;
			@media only screen and (max-width: 1060px) {
				width: calc(50% - 10px);
			}
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
			input{
				padding: 0 14px 0 25px;
			}
		}
		&:nth-child(2){
			width: calc(100% - 206px);
			margin-left: 18px;
			@media only screen and (max-width: 1060px) {
				width: calc(50% - 10px);
				margin-left: 0;
			}
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-top: 25px;
			}
		}
		p{
			font-weight: 500;
			font-size: 12px;
			line-height: 130%;
			color: #C2A6FF;
			position: absolute;
			top: -8px;
			left: 9px;
			background: #8C5FEC;
			padding: 0 5px;
		}
		input{
			border: 1px solid #A374F3;
			border-radius: 8px;
			height: 40px;
			background: transparent;
			padding: 0 14px;
			font-size: 14px;
			line-height: 130%;
			color: #F9F9F9;
			::-webkit-input-placeholder {color:#F9F9F9;}
			::-moz-placeholder          {color:#F9F9F9;}/* Firefox 19+ */
			:-moz-placeholder           {color:#F9F9F9;}/* Firefox 18- */
			:-ms-input-placeholder      {color:#F9F9F9;}
		}
	}
	.input_placeholder{
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
		height: 100%;
		left: 14px;
		font-size: 14px;
		line-height: 130%;
		color: #F9F9F9;
	}
`