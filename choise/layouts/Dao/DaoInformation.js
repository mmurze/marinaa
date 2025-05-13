import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function DaoInformation({t}) {
	const renderArray = (array) => {
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
								<div className="heading">
									<Title><h4>{item.title}</h4></Title>
									<div className="count">0{index + 1}</div>
								</div>
								<div className="content">
									<div className="list">{renderArray(item.description)}</div>
									<div className="image">
										<Image src={item.image} width={item.width} height={item.height} alt={item.title}/>
									</div>
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
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.item{
		background: #F6F7F8;
		border-radius: 24px;
		padding: 50px;
		width: calc(50% - 10px);
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-bottom: 20px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		@media only screen and (max-width: 600px) {
			padding: 30px 30px 0 30px;
		}
	}
	.heading{
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			position: initial;
		}
	}
	.content, .heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.list{
		margin-top: 30px;
		max-width: 306px;
		width: 100%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 1024px) {
			max-width: 220px;
		}
		@media only screen and (max-width: 820px) {
			max-width: calc(100% - 300px);
		}
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
		p{
			font-size: 16px;
			line-height: 150%;
			color: #80889C;
			margin-bottom: 30px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.count{
		background: #FFFB1F;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 700;
		font-size: 20px;
		line-height: 110%;
		width: 70px;
		height: 70px;
		@media only screen and (max-width: 600px) {
			position: absolute;
			bottom: 30px;
			left: 30px;
			width: 50px;
			height: 50px;
		}
	}
	.image{
		position: absolute;
		bottom: 0;
		right: 20px;
		line-height: 0;
		@media only screen and (max-width: 1024px) {
			right: -20px;
		}
		@media only screen and (max-width: 820px) {
			right: 20px;
		}
		@media only screen and (max-width: 600px) {
			position: relative;
			right: -20px;
			display: flex;
			justify-content: flex-end;
			width: 100%;
			margin-top: 40px;
		}
	}
`