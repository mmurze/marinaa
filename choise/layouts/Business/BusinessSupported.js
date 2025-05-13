import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Responsive from "helpers/Responsive";

export default function BusinessSupported({t}) {
	const array = ["/pic/business/supported-icon-1.svg", "/pic/business/supported-icon-2.svg", "/pic/business/supported-icon-3.svg", "/pic/business/supported-icon-4.svg"]
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="heading">
						<div className="header_main">
							<h2>{t.title}</h2>
							<p className="label">{t.label}</p>
						</div>
						<Responsive width={600}>
							<p className="ages">+14</p>
						</Responsive>
					</div>
					<ul className="list">
						{
							array.map((item, index) => {
								return (
									<li key={index}>
										<img src={item} alt={`supported ${index + 1}`}/>
									</li>
								)
							})
						}
					</ul>
					<Responsive width={600} mobile={
						<p className="ages">+14</p>
					}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 10px;
	color: #fff;
	.banner{
		background: #272A32;
		border-radius: 30px;
		padding: 40px 50px;
		@media only screen and (max-width: 600px) {
			padding: 30px;
		}
	}
	.heading{
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.header_main{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	h2{
		font-weight: 700;
		font-size: 48px;
		line-height: 100%;
		@media only screen and (max-width: 600px) {
			font-size: 24px;
			line-height: 120%;
		}
	}
	.label{
		margin-left: 25px;
		background: #454A58;
		border-radius: 55px;
		padding: 10px 20px;
		font-size: 16px;
		line-height: 130%;
		color: #fff;
		@media only screen and (max-width: 600px) {
			margin-left: 0;
			margin-top: 16px;
		}
	}
	.ages{
		width: 59px;
		height: 59px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 700;
		font-size: 20px;
		line-height: 100%;
		border: 1px solid #80889C;
		border-radius: 50%;
		@media only screen and (max-width: 600px) {
			margin-left: auto;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 65px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			margin-top: 40px;
			li{
				margin-bottom: 25px;
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
	}
`
