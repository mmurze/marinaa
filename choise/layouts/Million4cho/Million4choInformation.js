import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import htmlContent from "helpers/htmlContent";
import Image from "next/image";
import Link from "next/link";

export default function Million4choInformation({t}) {
	return (
		<Wrapper id="about">
			<CenterBlock>
				{
					t.array.map((item, index) => {
						return (
							<div className="item" key={index}>
								<div className="content">
									{item.linkDescription ? (
										<p className="description"><Link href='/?utm_source=landing&utm_medium=choisecomisatrusted&utm_campaign=choprediction&utm_content=link'>{t.item_link}</Link>{t.item_description}</p>
									) : (
										<p className="description">{htmlContent(item.description)}</p>
									)}
									{item.sub_description && <p className="sub_description">{item.sub_description}</p>}
								</div>
								<div className="image_block">
									<Image src={item.image} width={item.width} height={item.height} alt={`Item ${index + 1}`} priority={true}/>
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
	padding-top: 80px;
	background: #111111;
	overflow: hidden;
	.item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		&:nth-child(1){
			padding-bottom: 300px;
			@media only screen and (max-width: 600px) {
				padding-bottom: 20px;
			}
			.image_block{
				position: absolute;
				top: 0;
				right: -100px;
				@media only screen and (max-width: 600px) {
					position: relative;
					right: 0;
					margin-top: 40px;
					width: 1000px;
					display: flex;
					justify-content: center;
					margin-left: -230px;
				}
			}
		}
		&:nth-child(2){
			max-width: 1085px;
			width: 100%;
			flex-direction: row-reverse;
			@media only screen and (max-width: 600px) {
				flex-direction: column;
				.image_block{
					margin-top: -60px;
				}
			}
		}
	}
	.content{
		max-width: 400px;
		width: 100%;
		position: relative;
		z-index: 10;
	}
	.description{
		font-weight: 700;
		font-size: 32px;
		line-height: 150%;
		color: #F9F9F9;
		a{
			color: #F9F9F9;
			text-decoration: underline;
			&:hover{
				color: #03FF67;
			}
		}
		@media only screen and (max-width: 600px) {
			font-size: 28px;
			line-height: 140%;
		}
	}
	.sub_description{
		max-width: 306px;
		width: 100%;
		margin-top: 90px;
		font-size: 16px;
		line-height: 140%;
		color: #00FF66;
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
	}
`