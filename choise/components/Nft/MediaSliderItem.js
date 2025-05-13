import styled from "styled-components";
import {useRouter} from "next/router";

export default function MediaSliderItem({item, onCallBack, total, count}) {
	const {locale} = useRouter()
	const {media_slider} = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper>
			<div className="box">
				<div className="logo">
					<img src={item.icon} alt={item.title}/>
				</div>
				<p className="description">{item.description}</p>
				<div className="navigation">
					<div className="learn">
						<a rel="noreferrer nofollow" href={item.slug} target="_blank">
							{media_slider.learn} <span><img src="/pic/nft/learn-arrow.svg" alt="learn more"/></span>
						</a>
					</div>
					<div className="buttons">
						<button onClick={() => onCallBack("prev")}>
							<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M5.95686 11.3033L1.18389 6.5303C0.890994 6.23741 0.890994 5.76254 1.18389 5.46965L5.95686 0.696675C6.24975 0.403782 6.72463 0.403782 7.01752 0.696675C7.31041 0.989569 7.31041 1.46444 7.01752 1.75734L3.52488 5.24998L14.2856 5.24998C14.6999 5.24998 15.0356 5.58576 15.0356 5.99998C15.0356 6.41419 14.6999 6.74998 14.2856 6.74998L3.52488 6.74998L7.01752 10.2426C7.31041 10.5355 7.31041 11.0104 7.01752 11.3033C6.72462 11.5962 6.24975 11.5962 5.95686 11.3033Z"/>
							</svg>
						</button>
						<ul className="total">
							<li>{count}</li>
							<li>/</li>
							<li>{total}</li>
						</ul>
						<button onClick={() => onCallBack("next")}>
							<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M10.0431 0.696721L14.8161 5.46969C15.109 5.76258 15.109 6.23746 14.8161 6.53035L10.0431 11.3033C9.75025 11.5962 9.27538 11.5962 8.98248 11.3033C8.68959 11.0104 8.68959 10.5356 8.98248 10.2427L12.4751 6.75002L1.71436 6.75002C1.30014 6.75002 0.964356 6.41424 0.964356 6.00002C0.964356 5.58581 1.30014 5.25002 1.71436 5.25002L12.4751 5.25002L8.98248 1.75738C8.68959 1.46449 8.68959 0.989614 8.98248 0.696721C9.27538 0.403827 9.75025 0.403827 10.0431 0.696721Z"/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 946px;
	width: 100%;
	padding: 0 10px;
	@media only screen and (max-width: 600px) {
		padding: 0 5px;
	}
	.box{
		background: #F9F9F9;
		border: 1px solid #EBEBEB;
		border-radius: 30px;
		padding: 70px 70px 50px 70px;
		@media only screen and (max-width: 600px) {
			padding: 30px;
		}
	}
	.navigation{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 40px;
	}
	.total{
		display: flex;
		align-items: center;
		margin: 0 20px;
		font-weight: 700;
		font-size: 14px;
		line-height: 26px;
		color: #A8A8A8;
		@media only screen and (max-width: 600px) {
			margin: 0;
		}
		li:nth-child(2){
			margin: 0 5px;
		}
	}
	.description{
		margin-top: 20px;
		font-size: 18px;
		line-height: 150%;
		color: #7B8199;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 150%;
		}
	}
	.learn{
		a{
			display: flex;
			align-items: center;
			font-size: 18px;
			line-height: 100%;
			letter-spacing: -0.03em;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
			}
		}
		span{
			background: #FFFB1F;
			border-radius: 50%;
			width: 40px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 0;
			margin-left: 10px;
		}
	}
	.buttons{
		display: flex;
		align-items: center;
		button{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			border: 1px solid #EBEBEB;
			@media only screen and (max-width: 600px) {
				display: none;
			}
			svg{
				fill: #A8A8A8;
				transition: all .3s ease-in-out;
			}
			&:hover{
				border: 1px solid #191B20;
				svg {
					fill: #191B20;
					transition: all .3s ease-in-out;
				}
			}
		}
	}
`