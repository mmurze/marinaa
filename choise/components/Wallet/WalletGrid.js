import styled from "styled-components";
import Image from "next/image";
import YoutubeModal from "components/YoutubeModal";
import Link from "next/link";
import CenterBlock from "helpers/CenterBlock";

export default function WalletGrid({array}) {
	const renderArray = (array) => {
		return (
			<div className="description_list">
				{
					array.map((item, index) => {
						return (
							<p key={index}>{item}</p>
						)
					})
				}
			</div>
		)
	}
	return (
		<Wrapper className="wallet_grid">
			<CenterBlock>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									{item.title && <h2>{item.title}</h2>}
									{item.description && (
										typeof item.description === "string" ? <p>{item.description}</p> : renderArray(item.description)
									)}
									{item.link && (
										<div className="link">
											<a href={item.link} target="_blank" rel="noreferrer nofollow">{item.linkTitle}</a>
										</div>
									)}
									{item.image && (
										<Image
											src={item.image}
											width={590}
											height={400}
											priority={true}
											alt={item.alt}
										/>
									)}
									{item.youtube && (
										<YoutubeModal
											link={item.youtube}
											image={item.youtubeImage}
											imageWidth={590}
											imageHeight={400}
										/>
									)}
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: -50px;
		@media only screen and (max-width: 600px) {
			margin-bottom: 0;
		}
	}
	.item{
		width: calc(100% / 2 - 40px);
		margin-bottom: 100px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-bottom: 40px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	h2{
		font-size: 48px;
		line-height: 100%;
		margin-bottom: 15px;
		@media only screen and (max-width: 820px) {
			font-size: 35px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	p{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-bottom: 15px;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 150%;
		}
		&:last-child{
			margin-bottom: 0;
		}
	}
	.link{
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			display: flex;
			justify-content: center;
		}
		a{
			background: #FFFB1F;
			border-radius: 40px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 56px;
			font-size: 16px;
			line-height: 24px;
			padding: 16px 40px;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
`