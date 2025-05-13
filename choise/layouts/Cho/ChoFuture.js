import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function ChoFuture({t}) {
	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return (
					<li key={index}>
						<p>{item.value}</p>
						<p>{item.label}</p>
					</li>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<div className="paragraph_list">
						<p>{t.description_1}</p>
						<p>{t.description_2}</p>
					</div>
				</div>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="top">
										<div className="label">{item.label}</div>
										<div className="title">{item.title}</div>
										<div className="line"><span/></div>
									</div>
									<ul className="values_list">
										{renderArray(item.array)}
									</ul>
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
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.content{
		max-width: 300px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
		}
	}
	.paragraph_list{
		margin-top: 50px;
		p{
			font-size: 18px;
			line-height: 150%;
			color: #80889C;
			margin-bottom: 30px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.list{
		width: calc(100% - 300px);
		display: flex;
		padding-left: 100px;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			width: 100%;
			margin-top: 40px;
			padding-left: 0;
		}
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			width: calc(100% + 40px);
			margin: 40px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.item{
		width: calc(50% - 10px);
		border-radius: 24px;
		height: 440px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			width: 285px;
			margin-right: 20px;
			flex: 0 0 auto;
		}
		&:first-child{
			background: #FFFB1F;
			.line span{
				width: 50px;
			}
		}
		&:last-child{
			background: #5CEE9C;
			.line span{
				width: 94%;
			}
		}
	}
	.label{
		font-weight: 700;
		font-size: 26px;
		line-height: 100%;
	}
	.title{
		margin-top: 30px;
		font-size: 45px;
		line-height: 100%;
		@media only screen and (max-width: 600px) {
			font-size: 34px;
			line-height: 100%;
		}
	}
	.line{
		border-bottom: 1px solid #191B20;
		margin-top: 24px;
		position: relative;
		span{
			position: absolute;
			height: 8px;
			background: #191B20;
			bottom: 0;
			left: 0;
		}
	}
	.values_list{
		li{
			margin-bottom: 30px;
			&:last-child{
				margin-bottom: 0;
			}
			p{
				&:first-child{
					font-weight: 700;
					font-size: 26px;
					line-height: 100%;
				}
				&:last-child{
					font-weight: 500;
					font-size: 20px;
					line-height: 140%;
					padding: 2px 22px 5px;
					background: #191B20;
					border-radius: 58px;
					color: #F9F9F9;
					display: inline-flex;
					margin-top: 10px;
				}
			}
		}
	}
`