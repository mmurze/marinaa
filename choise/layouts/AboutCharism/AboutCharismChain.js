import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function AboutCharismChain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
					<ul className="list">
						{
							t.list.map((item, index) => {
								return (
									<li key={index}>
										<Image src={item.icon} width={45} height={45} priority={true} alt={item.title}/>
										<p>{item.title}</p>
									</li>
								)
							})
						}
					</ul>
					<a className="link_button" href="https://defi.choise.com/bridge" target="_blank" rel="noreferrer">{t.link}</a>
				</div>
				<div className="image">
					<Image src="/pic/charism/about-chains-pic.png" width={590} height={400} priority={true} alt="bridge to any chain"/>
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
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.image{
		margin-left: 88px;
		@media only screen and (max-width: 820px) {
			max-width: calc(50% - 20px);
			margin-left: 0;
		}
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			margin-top: 40px;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 40px;
		margin-bottom: -15px;
		li{
			width: calc(100% / 7);
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 15px;
			p{
				font-weight: 700;
				font-size: 12px;
				line-height: 100%;
				margin-top: 10px;
			}
		}
	}
	.content{
		width: 524px;
		@media only screen and (max-width: 820px) {
			width: calc(50% - 20px);
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.description{
		font-size: 16px;
		line-height: 150%;
		color: #80889C;
		margin-top: 16px;
		max-width: 360px;
		width: 100%;
	}
	.link_button{
		height: 56px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		border-radius: 40px;
		padding: 16px 40px;
		margin-top: 40px;
		min-width: 200px;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`