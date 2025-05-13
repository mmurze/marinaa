import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function PredictionsHowToUse({t}) {
	return (
		<Wrapper>
			<CenterBlock width={1200}>
				<Title center={true}><h2><img width={70} height={70} src="/pic/decor/round-arrow-right.svg" alt="how to use"/>{t.title}</h2></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="image">
										<Image src={item.image} width={590} height={400} priority={true} alt={item.title}/>
									</div>
									<div className="content">
										<Title><h3>{item.title}</h3></Title>
										<p className="description">{item.description}</p>
										{item.sub_image && <div className="sub_image"><img src={item.sub_image} alt={`sub ${item.title}`}/></div>}
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
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		h2{
			font-size: 90px;
			line-height: 100%;
			@media only screen and (max-width: 820px) {
				font-size: 60px;
			}
			@media only screen and (max-width: 600px) {
				font-size: 45px;
				line-height: 100%;
			}
		}
		img{
			position: relative;
			top: 8px;
			margin-right: 25px;
			@media only screen and (max-width: 820px) {
				top: 15px;
			}
			@media only screen and (max-width: 600px) {
				top: 8px;
				width: 45px;
				height: 45px;
				margin-right: 10px;
			}
		}
	}
	.item{
		margin-top: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: center;
			text-align: center;
			margin-top: 70px;
		}
		.image{
			width: 590px;
			@media only screen and (max-width: 820px) {
				width: 100%;
				margin-top: 40px;
				display: flex;
				justify-content: center;
			}
		}
		&:nth-child(odd){
			.image{
				margin-right: 80px;
				@media only screen and (max-width: 820px) {
					margin-right: 0;
				}
			}
		}
		&:nth-child(even){
			flex-direction: row-reverse;
			@media only screen and (max-width: 820px) {
				flex-direction: column-reverse;
			}
			.image{
				margin-left: 80px;
				@media only screen and (max-width: 820px) {
					margin-left: 0;
				}
			}
		}
	}
	.content{
		width: 520px;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	.sub_image{
		margin-top: 40px;
	}
	.description{
		margin-top: 16px;
		font-size: 18px;
		line-height: 150%;
		color: #7B8199;
	}
`