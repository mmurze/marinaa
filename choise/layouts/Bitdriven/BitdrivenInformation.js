import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import htmlContent from "helpers/htmlContent";

export default function BitdrivenInformation({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<h2>{t.title}</h2>
				<div className="list">
					{
						t.descriptions.map((item, index) =>{
							return(
							 <div className="item" key={index}>
								 <p>{htmlContent(item)}</p>
							 </div>
							)
						})
					}
					<div className="item">
						{
							t.last_item_desc.map((item, index) =>{
								return(
									<p key={index}>{htmlContent(item)}</p>
								)
							})
						}
						<ul className="benefits_list">
							{
								t.array.map((item, index) => {
									return <li key={index}>{item}</li>
								})
							}
						</ul>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	color: #fff;
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	h2{
		text-align: center;
		max-width: 850px;
		width: 100%;
		margin: 0 auto;
		font-size: 48px;
		line-height: 100%;
		@media only screen and (max-width: 820px) {
			font-size: 46px;
			line-height: 100%;
		}
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	.list{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 10px 20px;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			display: flex;
			flex-direction: column;
		}
	}
	.item{
		padding: 20px 30px;
		background: #272A32;
		border-radius: 30px;
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-bottom: 20px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		p{
			font-size: 18px;
			line-height: 150%;
			margin-bottom: 30px;
			color: #C6CAD3;
			strong{
				color: #fff;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
		&:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
		&:nth-child(2) { grid-area: 2 / 1 / 3 / 2; }
		&:nth-child(3) { grid-area: 1 / 2 / 3 / 3; }
	}
	.benefits_list{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -5px;
		li{
			margin-right: 5px;
			margin-bottom: 5px;
			background: #53DA99;
			border-radius: 500px;
			padding: 2px 15px;
			font-size: 18px;
			line-height: 150%;
			color: #191B20;
		}
	}
`