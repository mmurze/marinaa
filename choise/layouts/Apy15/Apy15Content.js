import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function Apy15Content({t}) {
	const renderDescription = (array) => {
		return (
			array.map((item, index) => {
				return <p key={index}>{item}</p>
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				{
					t.array.map((item, index) => {
						return (
							<div className="item" key={index}>
								<div className="content">
									<Title><h2>{item.title}</h2></Title>
									<div className="description">
										{renderDescription(item.description)}
									</div>
									<div className="more">
										<a href={item.slug} target="_blank" rel="nofollow">{t.link_more}</a>
									</div>
								</div>
								<div className="image">
									<Image src={item.image} width={820} height={555.93} priority={true} alt={item.title}/>
								</div>
							</div>
						)
					})
				}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		margin-top: 16px;
	}
	.item{
		margin-bottom: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			justify-content: flex-start;
			align-items: flex-start;
		}
		@media only screen and (max-width: 600px) {
			margin-bottom: 70px;
		}
		&:nth-child(even){
			flex-direction: row-reverse;
			@media only screen and (max-width: 820px) {
				flex-direction: column;
			}
			.image{
				padding-right: 90px;
				@media only screen and (max-width: 1024px) {
					padding-right: 40px;
				}
				@media only screen and (max-width: 820px) {
					padding-right: 0;
				}
			}
		}
		&:nth-child(odd){
			flex-direction: row;
			@media only screen and (max-width: 820px) {
				flex-direction: column;
			}
			.image{
				padding-left: 90px;
				@media only screen and (max-width: 1024px) {
					padding-left: 40px;
				}
				@media only screen and (max-width: 820px) {
					padding-left: 0;
				}
			}
		}
	}
	.content{
		width: 524px;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	.image{
		width: calc(100% - 524px);
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-top: 25px;
		}
	}
	.more{
		margin-top: 20px;
		a{
			background: #FFFB1F;
			border-radius: 40px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 56px;
			padding: 16px 40px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			&:hover{
				background: #0285FD;
				color: #F9F9F9;
			}
		}
	}
`