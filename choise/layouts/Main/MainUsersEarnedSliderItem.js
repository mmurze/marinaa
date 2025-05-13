import styled from "styled-components";
import {useRef} from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import numberFormat from "helpers/numberFormat";

export default function MainUsersEarnedSliderItem({item}) {
	const SliderRef = useRef(null)
	
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	
	const renderDescriptions = (array) => {
		return (
			array.map((item, index) => {
				return (
					<div className="description_item" key={index}>
						<div className="user_block">
							<div className="image">
								<Image src={item.image} width={37} height={37} priority={true} alt={item.title}/>
							</div>
							<div className="user_content">
								<p>{item.title}</p>
								<p>{item.date}</p>
							</div>
						</div>
						<p className="description_content">{item.description}</p>
					</div>
				)
			})
		)
	}
	return (
		<Wrapper className="item">
			<div className="heading">
				<div className="apy_block">
					<p>{item.apy}% APY</p>
					<p><img src={item.coin_icon} alt={item.coin}/>{item.coin}</p>
				</div>
				<p className="value">${numberFormat(item.value)}</p>
				<p className="earned_date">users earned in {item.earned_date}</p>
			</div>
			<div className="earn_description_block">
				<Slider ref={SliderRef} {...settings}>
					{renderDescriptions(item.list)}
				</Slider>
				<div className="earn_description_buttons">
					<button onClick={() => SliderRef.current.slickPrev()}>
						<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071L0.585787 6L6.29289 0.292893C6.68342 -0.0976316 7.31658 -0.0976315 7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L3.41421 6L7.70711 10.2929C8.09763 10.6834 8.09763 11.3166 7.70711 11.7071Z"/>
						</svg>
					</button>
					<p className="count">{item.list.length} reviews</p>
					<button onClick={() => SliderRef.current.slickNext()}>
						<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.41421 6L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"/>
						</svg>
					</button>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: calc(100% / 4 - 10px);
	border: 2px solid #F7F7F7;
	border-radius: 15px;
	@media only screen and (max-width: 1024px) {
		width: calc(100% / 2 - 10px);
		margin-bottom: 20px;
	}
	@media only screen and (max-width: 600px) {
		width: 285px;
		margin-right: 20px;
		margin-bottom: 0;
	}
	&:last-child{
		margin-right: 0;
	}
	&:hover{
		.count{
			color: #191B20;
			transition: .3s ease-in-out;
		}
	}
	.heading{
		background: #F6F7F8;
		border-radius: 15px;
		padding: 20px 25px;
	}
	.apy_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #DDDFE4;
		padding-bottom: 20px;
		p{
			&:first-child{
				background: #191B20;
				border-radius: 15.5px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				padding: 5px 15px;
				height: 29px;
				font-weight: 700;
				font-size: 15px;
				line-height: 130%;
				color: #F9F9F9;
			}
			&:last-child{
				font-weight: 700;
				font-size: 15px;
				line-height: 130%;
				text-align: right;
				display: flex;
				align-items: center;
				img{
					margin-right: 5px;
				}
			}
		}
	}
	.value{
		margin-top: 20px;
		font-weight: 700;
		font-size: 24px;
		line-height: 130%;
	}
	.earned_date{
		margin-top: 1px;
		font-weight: 500;
		font-size: 14px;
		line-height: 150%;
		color: #A2A8B7;
	}
	.earn_description_block{
		padding: 25px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 280px;
	}
	.user_block{
		display: flex;
		align-items: center;
		.image{
			width: 37px;
			overflow: hidden;
			border-radius: 50%;
		}
		.user_content{
			width: calc(100% - 37px);
			padding-left: 10px;
			p{
				&:first-child{
					font-weight: 700;
					font-size: 14px;
					line-height: 130%;
				}
				&:last-child{
					font-weight: 500;
					font-size: 12px;
					line-height: 130%;
					color: #A2A8B7;
				}
			}
		}
	}
	.description_content{
		margin-top: 20px;
		font-style: italic;
		font-size: 13px;
		line-height: 150%;
		color: #80889C;
	}
	.earn_description_buttons{
		border-top: 1px solid #EEEEEE;
		padding-top: 20px;
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		button{
			width: auto;
			svg{
				fill: #C6CAD3;
			}
			&:hover svg{
				fill: #191B20;
			}
		}
	}
	.count{
		font-weight: 500;
		font-size: 12px;
		line-height: 130%;
		color: #A2A8B7;
		transition: .3s ease-in-out;
	}
`