import Title from "helpers/Title";
import styled from "styled-components";
import Image from "next/image";
import CenterBlock from "helpers/CenterBlock";
import AssessComponent from "layouts/About/AssessComponent";
import AssetsComponent from "layouts/About/AssetsComponent";
import RecordShowComponent from "layouts/About/RecordShowComponent";
import PictureComponent from "layouts/About/PictureComponent";
import Responsive from "helpers/Responsive";

export default function About({t}){
	
	const renderComponent = (component, t) =>{
		switch (component) {
			case "coins": return <AssetsComponent t={t}/>
			case "graph": return <AssessComponent t={t}/>
			case "buttons": return <RecordShowComponent t={t}/>
			case "table": return <PictureComponent t={t}/>
			default: return null
		}
	}
	
	return (
		<Wrapper>
			<div className="title_arrow">
				<div className="circle"><img src="/pic/arrow.svg" alt="arrow"/></div>
				<Title><h2>{t.title}</h2></Title>
			</div>
			<div className="list">
				{
					t.list.map((item, index) =>{
						return(
							<CenterBlock width={1200} key={index}>
								<div className="phone_image">
									<Image height={400} width={590} src={item.image} alt="phone" priority={true}/>
								</div>
								<div className="text">
									<Title><h3>{item.title}</h3></Title>
									<p className="description">{item.description}</p>
									
									<Responsive width={450}>
										{renderComponent(item.component, item.text_component)}
									</Responsive>
									
								</div>
							</CenterBlock>
						)
					})
				}
			</div>
		</Wrapper>
	)
}
const Wrapper = styled.section`
	.center_block{
		display: flex;
		justify-content: space-between;
		gap: 90px;
		margin-top: 100px;
		align-items: center;
		@media only screen and (max-width: 1000px){
			flex-direction: column;
			//align-items: center;
		}
		@media only screen and (max-width: 600px){
			gap: 30px;
			margin-top: 60px;
		}
		&:nth-child(even) {
			flex-direction: row-reverse;
			@media only screen and (max-width: 1000px){
				flex-direction: column;
			}
		}
		&:nth-child(4) h3 {
			max-width: 355px;
			width: 100%;
		}
	}
	.title_arrow{
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 150px;
		h2{
			@media only screen and (max-width: 450px){
				font-size: 48px;
			}
		}
		.circle{
			border-radius: 60px;
			position: relative;
			background: #FFFB1F;
			width: 70px;
			height: 70px;
			margin-right: 20px;
			img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%)
			}
		}
	}

	.text {
		max-width: 525px;
		margin: auto 0;
		.description {
			margin-top: 15px;
			color: #7B8199;
			font-weight: 400;
			font-size: 18px;
			line-height: 150%;
		}
		.component{
			margin-top: 40px;
			@media only screen and (max-width: 600px) {
				margin: 40px auto 0;
			}
		}
	}
`

