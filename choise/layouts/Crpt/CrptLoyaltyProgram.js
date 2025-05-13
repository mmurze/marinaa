import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import htmlContent from "helpers/htmlContent";

export default function CrptLoyaltyProgram({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					<div className="card">
						<div className="heading">
							<div className="image">
								<Image src="/pic/crpt/diego.jpg" width={106} height={106} priority={true} alt="Diego Tores"/>
							</div>
							<ul>
								{
									t.list_level.map((item, index) =>{
										return(
											<li key={index}>{htmlContent(item)}</li>
										)
									})
								}
							</ul>
						</div>
						<div className="card_list">
							{
								t.array.map((item, index) => {
									return (
										<div className="item" key={index}>
											<h4>{item.title}</h4>
											<p>{item.value}</p>
										</div>
									)
								})
							}
						</div>
					</div>
					<div className="content">
						<div className="round_image">
							<Image src="/pic/crpt/program-round.png" width={178} height={74} priority={true} alt="your loyalty pays off"/>
						</div>
						<Title><h3>{t.title_content}</h3></Title>
						<div className="list_content">
							{
								t.list_content.map((item, index) =>{
									return(
										<p key={index}>{item}</p>
									)
								})
							}
						</div>
					</div>
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
	h2{
		text-align: center;
	}
	.card, .content{
		background: #F6F7F8;
		border-radius: 24px;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.card{
		padding: 30px 30px 60px 30px;
		width: 390px;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	.content{
		padding: 30px 40px;
		width: calc(100% - 390px - 20px);
		position: relative;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-top: 40px;
		}
	}
	.list_content{
		margin-top: 30px;
		p{
			font-size: 18px;
			line-height: 150%;
			color: #80889C;
			margin-bottom: 30px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		ul{
			width: calc(100% - 106px);
			padding-left: 30px;
			li{
				&:first-child{
					font-weight: 700;
					font-size: 32px;
					line-height: 110%;
				}
				&:last-child{
					font-size: 18px;
					line-height: 150%;
					color: #80889C;
					margin-top: 10px;
				}
				span{
					background: #0285FD;
					border-radius: 500px;
					padding: 3px 16px;
					color: #F9F9F9;
					font-size: 18px;
					line-height: 120%;
					margin-left: 12px;
				}
			}
		}
	}
	.image {
		width: 106px;
		img{
			border-radius: 50%;
		}
	}
	.card_list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 50px;
		margin-bottom: -35px;
		.item{
			width: calc(50% - 10px);
			margin-bottom: 35px;
		}
		h4{
			font-size: 18px;
			line-height: 150%;
			color: #80889C;
			font-weight: normal;
		}
		p{
			font-weight: 700;
			font-size: 36px;
			line-height: 100%;
			margin-top: 7px;
		}
	}
	.round_image{
		position: absolute;
		top: 0;
		right: 65px;
		line-height: 0;
	}
`