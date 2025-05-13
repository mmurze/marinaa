import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function PriceInsuranceWork({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="image_list">
					<div className="image">
						<Image src="/pic/price-insurance/work-1.jpg" width={590} height={584} priority={true} alt=""/>
					</div>
					<div className="image">
						<Image src="/pic/price-insurance/work-2.jpg" width={590} height={584} priority={true} alt=""/>
					</div>
				</div>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="heading">
										{item.label && <p className="label">{item.label}</p>}
										{item.count && <p className="count">{item.count}</p>}
										{item.icon && <p className="icon"><img src={item.icon} alt={item.description}/></p>}
									</div>
									<p className="description">{item.description}</p>
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
		margin-top: 60px;
	}
	.title{
		text-align: center;
	}
	.image_list{
		display: flex;
		justify-content: space-between;
		margin-top: 60px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		.image{
			width: calc(50% - 10px);
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
		@media only screen and (max-width: 1024px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -40px -20px -40px;
			padding: 0 40px 20px 40px;
		}
		@media only screen and (max-width: 600px) {
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.item{
		padding: 30px;
		border: 1px solid #DDDFE4;
		border-radius: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			flex: 0 0 auto;
			margin-right: 20px;
		}
		&:nth-child(1){
			width: 306px;
			background: #FF6464;
			color: #F9F9F9;
			@media only screen and (max-width: 1024px) {
				width: 400px;
			}
			@media only screen and (max-width: 600px) {
				width: 310px;
			}
		}
		&:nth-child(2){
			width: 306px;
			background: #0285FD;
			color: #F9F9F9;
			@media only screen and (max-width: 1024px) {
				width: 400px;
			}
			@media only screen and (max-width: 600px) {
				width: 310px;
			}
		}
		&:nth-child(3){
			background: #F6F7F8;
			width: calc(100% - 306px - 306px - 20px);
			@media only screen and (max-width: 1024px) {
				width: 400px;
			}
			@media only screen and (max-width: 600px) {
				width: 310px;
			}
		}
	}
	.description{
		margin-top: 50px;
		font-size: 16px;
		line-height: 150%;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
	}
	.label{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid #F9F9F9;
		border-radius: 6px;
		padding: 8px 12px;
		font-weight: 500;
		font-size: 16px;
		line-height: 120%;
	}
	.count{
		width: 40px;
		height: 40px;
		background: #F9F9F9;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		line-height: 0;
		font-size: 16px;
		color: #191B20;
		border-radius: 50%;
	}
`