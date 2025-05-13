import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function BitdrivenGettingStarted({t}) {
	const renderHeading = (index) => {
		switch (index) {
			case 0: return (
				<a href="https://crypterium.onelink.me/jtmZ/bitdriven?utm_source=landing_page&utm_medium=bitdriven" target="_blank" rel="noreferrer">
					<img src="/pic/bitdriven/stores-icon.svg" alt="Stores"/>
				</a>)
			case 2: return null
			default: return null
		}
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="top">
										<div className="heading">
											<span className="step">{t.step} {index + 1}</span>
											{renderHeading(index)}
										</div>
										<div className="main_heading">
											<h3>{item.title}</h3>
											<Responsive width={600} mobile={index === 0 && (
												<a href="https://crypterium.onelink.me/jtmZ/bitdriven?utm_source=landing_page&utm_medium=bitdriven" className="link_button" target="_blank" rel="noreferrer">{t.download}</a>
											)}/>
										</div>
									</div>
									<div className="image">
										<Image src={item.image} width={298} height={274} priority={true} alt={item.title}/>
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
	color: #fff;
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.title{
		text-align: center;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
		@media only screen and (max-width: 1024px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 30px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
		}
	}
	.item{
		background: #272A32;
		border-radius: 30px;
		overflow: hidden;
		width: calc(100% / 3 - 10px);
		padding: 35px 40px 0 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			width: 400px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
			&:last-child {
				margin-right: 0;
			}
		}
		@media only screen and (max-width: 600px) {
			width: 300px;
		}
	}
	.image{
		display: flex;
		justify-content: center;
		line-height: 0;
		margin-top: 65px;
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.step{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFFFF;
		border-radius: 500px;
		font-size: 18px;
		line-height: 140%;
		color: #393D49;
		padding: 5px 15px;
	}
	h3{
		font-size: 20px;
		line-height: 120%;
		padding-right: 10px;
	}
	.main_heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.coins{
		@media only screen and (max-width: 600px) {
			margin-top: 10px;
		}
	}
	.link_button{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;
		margin-top: 20px;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 8px 24px;
		height: 56px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #191B20;
	}
`