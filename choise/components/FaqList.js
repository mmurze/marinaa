import styled from "styled-components";
import htmlContent from "helpers/htmlContent";
import {useState} from "react";

export default function FaqList({array, blackTheme = false}) {
	const [active, setActive] = useState(null)
	const onHandleClick = (e) => {
		if (active === e) {
			setActive(null)
		} else setActive(e)
	}
	return (
		<Wrapper className={`faq_list ${blackTheme ? "black" : ""}`}>
			{
				array.map((item, index) => {
					return (
						<div className={`item ${active === index ? "active" : ""}`} key={index}>
							<button onClick={() => onHandleClick(index)}>
								<p className="title_button">{item.title}</p>
								<span>
											{
												active === index ? (
													blackTheme ? <img src="/pic/nft/faq-minus-white.svg" alt="close"/> : <img src="/pic/nft/faq-minus.svg" alt="close"/>
												) : (
													blackTheme ? <img src="/pic/nft/faq-plus-white.svg" alt="open"/> : <img src="/pic/nft/faq-plus.svg" alt="open"/>
												)
											}
										</span>
							</button>
							<div className="content">
								{htmlContent(item.description)}
							</div>
						</div>
					)
				})
			}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	&.black{
		button{
			color: #fff;
		}
		.content{
			color: #A2A8B7;
		}
		.item{
			border-bottom: 1px solid #454A58;
			button span{
				border: 1px solid #393D49;
			}
			&.active{
				button span{
					background: #393D49;
					border: 1px solid #393D49;
				}
			}
		}
	}
	.content{
		display: none;
		font-size: 16px;
		line-height: 150%;
		color: #7B8199;
	}
	a{
		color: #0285FD;
		text-decoration: underline;
	}
	ul, ol{
		margin-left: 30px;
		li{
			margin-bottom: 7px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.title_button{
		width: calc(100% - 70px);
	}
	button{
		justify-content: space-between;
		text-align: left;
		align-items: center;
		font-size: 28px;
		line-height: 1.4;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 1.5;
		}
		span{
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 0;
			width: 35px;
			height: 35px;
			border: 1px solid #EBEBEB;
			border-radius: 50%;
			transition: all .3s ease-in-out;
		}
	}
	.item{
		margin-bottom: 40px;
		border-bottom: 1px solid #D4D4D4;
		padding: 0 20px 37px 20px;
		@media only screen and (max-width: 600px) {
			margin-bottom: 16px;
			padding: 0 20px 16px 20px;
		}
		&.active{
			button{
				margin-bottom: 30px;
				@media only screen and (max-width: 600px) {
					margin-bottom: 16px;
				}
				span{
					background: #FFFC62;
					border: 1px solid #FFFC62;
					transition: all .3s ease-in-out;
				}
			}
			.content{
				display: block;
			}
		}
		&:last-child{
			margin-bottom: 0;
			border-bottom: none;
			padding-bottom: 0;
		}
	}
`