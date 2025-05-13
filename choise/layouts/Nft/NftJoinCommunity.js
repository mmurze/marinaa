import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function NftJoinCommunity({t}) {
	return (
		<Wrapper id="community">
			<CenterBlock>
				<h2>{t.title}</h2>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<a href={item.link} target="_blank">{item.title}</a>
									<span className="icon" dangerouslySetInnerHTML={{__html: item.icon}}/>
									<div className="content">
										<h3>{item.title}</h3>
										<p className="description">{item.description}</p>
									</div>
									<div className="arrow">
											<svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd"
											      d="M15.6744 0.463755L25.2203 10.0097C25.8061 10.5955 25.8061 11.5452 25.2203 12.131L15.6744 21.677C15.0886 22.2627 14.1389 22.2627 13.5531 21.677C12.9673 21.0912 12.9673 20.1414 13.5531 19.5556L20.5383 12.5704L2.15967 12.5704C1.33124 12.5704 0.659667 11.8988 0.659667 11.0704C0.659667 10.2419 1.33124 9.57036 2.15967 9.57036L20.5383 9.57036L13.5531 2.58508C12.9673 1.99929 12.9673 1.04954 13.5531 0.463755C14.1389 -0.122031 15.0886 -0.122031 15.6744 0.463755Z"
											      fill="#191B20"/>
										</svg>
										</div>
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	h2{
		font-size: 48px;
		line-height: 100%;
		text-align: center;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	.list{
		margin-top: 70px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
	}
	.item{
		background: #F9F9F9;
		border-radius: 500px;
		width: calc(100% / 4 - 20px);
		text-align: center;
		padding: 50px 60px;
		position: relative;
		border: 1px solid #EBEBEB;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 820px) {
			width: 100%;
			flex-direction: row;
			padding: 0 0 0 30px;
			margin-bottom: 10px;
			height: 70px;
			text-align: left;
			&:last-child{
				margin-bottom: 0;
			}
		}
		&:hover{
			background: #F7F7F7;
			border: 1px solid #F7F7F7;
			transition: all .3s ease-in-out;
			.arrow{
				background: #5CEE9C;
				transition: all .3s ease-in-out;
			}
			.icon svg{
				fill: #191B20;
				transition: all .3s ease-in-out;
			}
		}
	}
	.icon svg{
		fill: #7B8199;
		transition: all .3s ease-in-out;
	}
	.content{
		@media only screen and (max-width: 820px) {
			margin-left: 20px;
		}
	}
	h3{
		font-size: 22px;
		line-height: 150%;
		margin-top: 20px;
		@media only screen and (max-width: 820px) {
			margin-top: 0;
		}
		@media only screen and (max-width: 600px) {
			font-size: 18px;
			line-height: 100%;
		}
	}
	a{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		font-size: 0;
	}
	.description{
		font-size: 18px;
		line-height: 120%;
		margin-top: 7px;
		@media only screen and (max-width: 820px) {
			margin-top: 0;
		}
		@media only screen and (max-width: 600px) {
			font-size: 12px;
			line-height: 100%;
			margin-top: 5px;
		}
	}
	.arrow{
		background: #FFFB1F;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 820px) {
			margin-left: auto;
			margin-top: 0;
		}
	}
`