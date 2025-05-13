import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function SecurityMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<p className="label">{t.label}</p>
					<Title><h1>{t.title}</h1></Title>
					<p className="description">{t.description}</p>
				</div>
				<div className="image">
					<ul>
						{
							t.array.map((item, index) =>{
								return(
									<li key={index}>{item}</li>
								)
							})
						}
					</ul>
					<Image src="/pic/security/main-safe.jpg" alt="Choise.com regulated, certified and licensed" width={325} height={337} priority={true}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 110px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 900px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
	.content{
		width: calc(100% - 470px);
		@media only screen and (max-width: 900px) {
			width: 100%;
		}
	}
	.image{
		position: relative;
		width: 350px;
		@media only screen and (max-width: 900px) {
			margin-top: 70px;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		ul{
			position: absolute;
			width: 100%;
			height: 100%;
		}
		li{
			position: absolute;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 39px;
			border-radius: 55px;
			padding: 9px 20px;
			color: #191B20;
			font-weight: 500;
			font-size: 16px;
			line-height: 130%;
			&:nth-child(1){
				background: #5CEE9C;
				top: 30px;
				left: -30px;
				@media only screen and (max-width: 600px) {
					left: 30px;
				}
			}
			&:nth-child(2){
				background: #FFFD72;
				top: 35px;
				right: 40px;
			}
			&:nth-child(3){
				background: #FFFB1F;
				top: 110px;
				left: -100px;
				@media only screen and (max-width: 600px) {
					left: 10px;
				}
			}
			&:nth-child(4){
				background: #5CEE9C;
				right: -20px;
				top: 120px;
				@media only screen and (max-width: 600px) {
					right: 20px;
				}
			}
			&:nth-child(5){
				background: #0285FD;
				color: #FFFFFF;
				top: 170px;
				left: -40px;
				@media only screen and (max-width: 600px) {
					left: 0;
					top: 200px;
				}
			}
			&:nth-child(6){
				background: #0285FD;
				color: #FFFFFF;
				bottom: 40px;
				right: 0;
			}
		}
	}
	.label{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #EEEFF2;
		border-radius: 15.5px;
		font-weight: 500;
		font-size: 18px;
		line-height: 100%;
		color: #A2A8B7;
		padding: 6px 15px;
	}
	.title{
		max-width: 564px;
		width: 100%;
		margin-top: 23px;
		@media only screen and (max-width: 900px) {
			max-width: 100%;
		}
		h1{
			font-weight: 700;
			font-size: 66px;
			line-height: 110%;
			@media only screen and (max-width: 600px) {
				font-size: 32px;
				line-height: 110%;
			}
		}
	}
	.description{
		max-width: 407px;
		width: 100%;
		font-size: 18px;
		line-height: 140%;
		color: #80889C;
		margin-top: 15px;
		@media only screen and (max-width: 900px) {
			max-width: 100%;
		}
	}
`