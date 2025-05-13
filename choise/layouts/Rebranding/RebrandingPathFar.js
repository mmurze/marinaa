import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
export default function RebrandingPathFar({t}) {
	const renderList = (array, className) => {
		return (
			array.map((item, index) => {
				return (
					<li className={className} key={index}>
						<span>{item.month}</span>
						<p>{item.description}</p>
					</li>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
			</CenterBlock>
			<div className="list">
				{
					t.array.map((item, index) => {
						return (
							<Item background={item.background} className="item" key={index}>
								{item.logo && <div className="logo"><img src={item.logo} alt={item.year}/></div>}
								<CenterBlock>
									<div className="year"><span>{item.year}</span></div>
									{
										item.choise ? (
											<div className="choise_list">
												<ul>{renderList(item.array, "crypterium")}</ul>
												<span className="choise_label">choise.com</span>
												<ul>{renderList(item.choise, "choise")}</ul>
											</div>
										) : (
											<ul>{renderList(item.array, "crypterium")}</ul>
										)
									}
								</CenterBlock>
								{item.choise && (
									<div className="slogan">
										{
											t.slogans.map((item, index) =>{
												return(
													<span key={index}>{item}</span>
												)
											})
										}
									</div>
								)}
							</Item>
						)
					})
				}
			</div>
		</Wrapper>
	)
}

const Item = styled.div`
	background: ${p => p.background};
	padding: 70px 0;
	position: relative;
	min-height: 200px;
	&:before{
		content: url("/pic/decor/round-arrow-white-bottom.svg");
		position: absolute;
		top: -20.5px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}
	.logo{
		width: 100%;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		height: 100%;
		left: 0;
		padding: 0 40px;
		img{
			line-height: 0;
		}
	}
	.slogan{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
		position: relative;
		z-index: 20;
		span{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 700;
			font-size: 48px;
			line-height: 110%;
			color: #F9F9F9;
			border-radius: 50px;
			padding: 5px 10px;
			height: 53px;
			@media only screen and (max-width: 600px) {
				font-size: 32px;
				line-height: 110%;
				height: 33px;
			}
			&:first-child{
				transform: rotate(-5.54deg);
				background: #0285FD;
				margin-left: -100px;
				@media only screen and (max-width: 600px) {
					margin-left: -50px;
				}
			}
			&:last-child{
				transform: rotate(0.73deg);
				background: #191B20;
				margin-left: 100px;
				margin-top: -10px;
				@media only screen and (max-width: 600px) {
					margin-left: 50px;
					margin-top: 0;
				}
			}
		}
	}
`

const Wrapper = styled.section`
	margin-top: 120px;
	overflow: hidden;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.title{
		text-align: center;
	}
	.list{
		margin-top: 80px;
		position: relative;
		&:before{
			content: "";
			position: absolute;
			top: 0;
			height: 100%;
			left: 50%;
			transform: translateX(-50%);
			border-left: 1px dashed #7B8199;
			z-index: 10;
			@media only screen and (max-width: 600px) {
				display: none;
			}
		}
	}
	ul{
		width: calc(50% - 50px);
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.item{
		&:nth-child(odd) {
			.center_block{
				justify-content: flex-start;
			}
			.year{
				left: 0;
				right: auto;
			}
		}
		&:nth-child(even) {
			.center_block {
				display: flex;
				justify-content: flex-end;
				@media only screen and (max-width: 600px) {
					justify-content: flex-start;
				}
			}
			.year{
				left: auto;
				right: -50px;
				@media only screen and (max-width: 600px) {
					right: auto;
					left: 0;
				}
			}
		}
	}
	.year{
		position: absolute;
		top: -90px;
		right: 0;
		width: 50%;
		span{
			background: #191B20;
			border-radius: 500px;
			font-weight: 700;
			font-size: 30px;
			line-height: 110%;
			color: #F9F9F9;
			padding: 4px 10px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 40px;
		}
	}
	li{
		display: flex;
		margin-bottom: 10px;
		&:last-child{
			margin-bottom: 0;
		}
		span{
			width: 50px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			border-radius: 80px;
			height: 22px;
			padding: 2px 7px;
			font-weight: 700;
			font-size: 16px;
			line-height: 100%;
		}
		p{
			width: calc(100% - 50px);
			padding-left: 10px;
			font-size: 16px;
			line-height: 150%;
		}
		&.crypterium{
			span{
				background: #FFFB1F;
			}
		}
		&.choise{
			margin-top: 10px;
			span{
				background: #0285FD;
				color: #F9F9F9;
			}
		}
	}
	.choise_list{
		width: calc(50% - 50px);
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		ul{
			width: 100%;
		}
	}
	.choise_label{
		margin: 10px 0;
		background: #0285FD;
		border-radius: 80px;
		height: 22px;
		padding: 2px 7px 4px;
		font-weight: 700;
		font-size: 16px;
		line-height: 100%;
		color: #F9F9F9;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`