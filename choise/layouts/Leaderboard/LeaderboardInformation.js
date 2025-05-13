import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import {Link} from "react-scroll";

export default function LeaderboardInformation({t}) {
	const renderList = (array) => {
		return (
			array.map((item, index) => {
				return <li key={index}>{item}</li>
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title_1}</h2></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className={`item ${item.center ? "center" : ""}`} key={index}>
									{
										item.center ? (
											<>
												<div className="image">
													<Image src="/pic/leaderboard/information-image.png" width={210} height={169} priority={true} alt="what is choise.com?"/>
												</div>
												<p className="description">{item.description}</p>
											</>
										) : (
											<>
												<h3>{item.title}</h3>
												<p className="label">{item.description}</p>
												<ul>{renderList(item.list)}</ul>
											</>
										)
									}
								</div>
							)
						})
					}
				</div>
				<Title className="sub_title">
					<h2>{t.title_2}</h2>
				</Title>
				<div className="link">
					<Link smooth={true} offset={-150} to="form">{t.link}</Link>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.link{
		display: flex;
		justify-content: center;
		margin-top: 30px;
		a{
			padding: 16px 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 56px;
			background: #FFFB1F;
			color: #191B20;
			border-radius: 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			cursor: pointer;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
	.sub_title{
		max-width: 783px;
		width: 100%;
		margin: 40px auto 0 auto;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 60px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			margin-left: -20px;
			margin-right: -20px;
		}
	}
	h3{
		font-size: 32px;
		line-height: 100%;
	}
	.item{
		width: calc(100% / 3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #F6F7F8;
		border-radius: 500px;
		padding: 100px 40px 130px 40px;
		@media only screen and (max-width: 820px) {
			border-radius: 0;
			padding: 40px 20px;
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		&:nth-child(1) {
			@media only screen and (max-width: 820px) {
				border-radius: 40px 0 0 40px;
			}
			@media only screen and (max-width: 600px) {
				border-radius: 20px 20px 0 0;
			}
			.label{
				background: #FFFB1F;
			}
		}
		&:nth-child(3) {
			@media only screen and (max-width: 820px) {
				border-radius: 0 40px 40px 0;
			}
			@media only screen and (max-width: 600px) {
				border-radius: 0;
			}
			.label{
				background: #5CEE9C;
			}
		}
		&.center{
			background: linear-gradient(122.89deg, #FFFB1F 21.39%, #5CEE9C 111.59%);
		}
		.description{
			font-size: 18px;
			line-height: 150%;
			text-align: center;
			margin-top: 50px;
			@media only screen and (max-width: 820px) {
				font-size: 14px;
			}
			@media only screen and (max-width: 600px) {
				font-size: 18px;
			}
		}
		.label{
			font-size: 17px;
			line-height: 150%;
			margin-top: 30px;
			height: 31px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			padding: 10px 16px;
			border-radius: 500px;
			text-align: center;
			@media only screen and (max-width: 820px) {
				font-size: 13px;
				margin-top: 10px;
				height: auto;
			}
			@media only screen and (max-width: 600px) {
				font-size: 17px;
				line-height: 150%;
				margin-top: 30px;
			}
		}
		ul{
			margin-top: 30px;
			list-style: disc;
			@media only screen and (max-width: 820px) {
				width: 100%;
				list-style: none;
			}
			li{
				font-size: 16px;
				line-height: 150%;
				@media only screen and (max-width: 820px) {
					font-size: 14px;
					text-align: center;
				}
				@media only screen and (max-width: 600px) {
					font-size: 16px;
					line-height: 150%;
				}
			}
		}
	}
`