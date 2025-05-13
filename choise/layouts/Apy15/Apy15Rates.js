import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function Apy15Rates({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return(
								<div className="item" key={index}>
									<h3>{item.title}</h3>
									<div className="image">
										<Image src={item.image} width={item.width} height={item.height} priority={true} alt={item.title}/>
									</div>
								</div>
							)
						})
					}
				</div>
				<div className="link">
					<a href="https://app.crypterium.com" target="_blank" rel="noreferrer">{t.link}</a>
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
		max-width: 548px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}
	.list{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.item{
		width: calc(100% / 3 - 15px);
		border-radius: 24px;
		padding: 40px;
		height: 296px;
		position: relative;
		@media only screen and (max-width: 820px) {
			width: 320px;
			margin-right: 20px;
			flex: 0 0 auto;
		}
		&:nth-child(1){
			background: #CFF3E0;
		}
		&:nth-child(2){
			background: #E1FFAF;
		}
		&:nth-child(3){
			background: #FFFEA1;
		}
		h3{
			font-size: 30px;
			line-height: 110%;
		}
	}
	.image{
		position: absolute;
		bottom: 0;
		right: 0;
		line-height: 0;
	}
	.link{
		text-align: center;
		margin-top: 80px;
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 16px 40px;
			background: #FFFB1F;
			border-radius: 40px;
			height: 56px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
	}
`