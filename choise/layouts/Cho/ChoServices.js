import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import Title from "components/Title";

export default function ChoServices({t}) {
	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return (
					<div className="item" key={index}>
						<div className="icon">
							<Image src={item.icon} width={120} height={120} priority={true} alt={item.title}/>
						</div>
						<div className="content">
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					</div>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title center={true}><h2>{t.title}</h2></Title>
				<div className="list">
					<div className="item_block">
						{renderArray(t.leftArray)}
					</div>
					<div className="item_block image_block">
						<Image src="/pic/cho/cho-service-image.jpg" width={321} height={697} priority={true} alt="our current centralized services"/>
					</div>
					<div className="item_block">
						{renderArray(t.rightArray)}
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 90px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.title{
		max-width: 466px;
		width: 100%;
	}
	.item_block{
		width: calc(100% / 3 - 30px);
		@media only screen and (max-width: 820px) {
			width: calc(100% / 2 - 30px);
		}
	}
	.image_block{
		display: flex;
		justify-content: center;
		@media only screen and (max-width: 820px) {
			display: none;
		}
	}
	.item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-bottom: 50px;
		}
		&:last-child{
			margin-bottom: 0;
		}
		.icon{
			width: 120px;
			@media only screen and (max-width: 600px) {
				width: 80px;
			}
		}
		.content{
			width: calc(100% - 120px);
			padding-left: 30px;
			@media only screen and (max-width: 600px) {
				padding-left: 0;
				width: 100%;
				margin-top: 14px;
			}
			h3{
				font-size: 24px;
				line-height: 100%;
				@media only screen and (max-width: 600px) {
					font-size: 20px;
					line-height: 100%;
				}
			}
			p{
				font-size: 18px;
				line-height: 22px;
				color: #80889C;
				margin-top: 10px;
				@media only screen and (max-width: 600px) {
					font-size: 16px;
					line-height: 19px;
				}
			}
		}
	}
`