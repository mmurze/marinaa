import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function AmbassadorBanner({t}) {
	const array = [
		{
			"title": "Discord - EN",
			"icon": "<svg width=\"19\" height=\"16\" viewBox=\"0 0 19 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.8789 1.62516C14.6893 1.02596 13.4173 0.59049 12.0874 0.342529C11.9241 0.660406 11.7333 1.08796 11.6017 1.42807C10.1881 1.1992 8.78738 1.1992 7.3997 1.42807C7.26817 1.08796 7.07303 0.660406 6.90825 0.342529C5.57695 0.59049 4.30347 1.02756 3.11383 1.62833C0.714312 5.53178 0.0638426 9.33827 0.389078 13.0907C1.98056 14.3701 3.5229 15.1474 5.03921 15.6559C5.4136 15.1013 5.7475 14.5116 6.03515 13.8902C5.48731 13.6661 4.9626 13.3895 4.46681 13.0685C4.59834 12.9636 4.727 12.8539 4.8513 12.7411C7.87526 14.2637 11.1609 14.2637 14.1487 12.7411C14.2745 12.8539 14.4031 12.9636 14.5332 13.0685C14.0359 13.3911 13.5098 13.6676 12.962 13.8918C13.2496 14.5116 13.5821 15.1029 13.9579 15.6575C15.4757 15.1489 17.0194 14.3717 18.6109 13.0907C18.9925 8.74068 17.959 4.96914 15.8789 1.62516ZM6.44712 10.783C5.53936 10.783 4.79492 9.8707 4.79492 8.75975C4.79492 7.64879 5.52346 6.73492 6.44712 6.73492C7.3708 6.73492 8.11522 7.64719 8.09932 8.75975C8.10076 9.8707 7.3708 10.783 6.44712 10.783ZM12.5529 10.783C11.6451 10.783 10.9007 9.8707 10.9007 8.75975C10.9007 7.64879 11.6292 6.73492 12.5529 6.73492C13.4765 6.73492 14.221 7.64719 14.2051 8.75975C14.2051 9.8707 13.4765 10.783 12.5529 10.783Z\"/></svg>",
			"slug": "https://clck.ru/zsYDB"
		}
	]
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="description_block">
					<Responsive width={600}>
						<div className="left">
							<Image src="/pic/ambassador/banner-left.png" width={266} height={45} priority={true} alt="Get CHO tokens and other rewards for completing task"/>
						</div>
					</Responsive>
					<p className="description">{t.description}</p>
					<Responsive width={600}>
						<div className="right">
							<Image src="/pic/ambassador/banner-right.png" width={266} height={65} priority={true} alt="and scoring Points"/>
						</div>
					</Responsive>
				</div>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<a className="social_link" href={item.slug} key={index} target="_blank" rel="noreferrer">
									<span dangerouslySetInnerHTML = {{ __html: `${item.icon}` }}/>
									{item.title}
								</a>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #0285FD url("/pic/ambassador/banner-background.svg") repeat-x bottom center;
	background-size: contain;
	padding: 100px 0;
	@media only screen and (max-width: 600px) {
		background: #0285FD;
		padding: 50px 0;
	}
	.title{
		text-align: center;
		color: #F9F9F9;
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		text-align: center;
		max-width: 455px;
		width: 100%;
		margin: 15px auto 0 auto;
		color: #F9F9F9;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
	.list{
		display: flex;
		justify-content: center;
		margin-top: 50px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		a{
			margin: 0 10px;
			padding: 16px 40px;
			border: 1px solid #F9F9F9;
			border-radius: 40px;
			height: 56px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 18px;
			line-height: 24px;
			color: #F9F9F9;
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-bottom: 10px;
				&:last-child{
					margin-bottom: 0;
				}
			}
			&:hover{
				background: #191B20;
				border: 1px solid #191B20;
			}
			svg{
				fill: #F9F9F9;
				line-height: 0;
				margin-right: 10px;
				transition: .3s ease-in-out;
			}
		}
	}
	.description_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.left{
		margin-right: 40px;
	}
	.right{
		margin-left: 40px;
	}
`