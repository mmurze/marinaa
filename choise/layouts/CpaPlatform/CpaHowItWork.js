import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function CpaHowItWork({t}) {
	const renderBackground = (mainIndex, index) => {
		return `/pic/cpa/works/${mainIndex}-${index}.svg`
	}
	const renderArray = (array, mainIndex) => {
		return (
			array.map((item, index) => {
				return (
					<Item className="item" background={renderBackground(mainIndex, index + 1)} key={index}>{item}</Item>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<h2>{t.title}</h2>
				<div className="list">
					{
						t.list.map((item, index) => {
							return (
								<div className="box_item" key={index}>
									<div className="heading">
										<h3>{item.title}</h3>
										<div className="arrow">
											<img src="/pic/cpa/arrow.svg" alt={item.title}/>
										</div>
									</div>
									<div className="list_box">
										{renderArray(item.array, index + 1)}
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

const Item = styled.div`
	background-image: url("${p => p.background}") !important;
	background-repeat: no-repeat;
	background-size: cover;
`

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	h2{
		font-size: 36px;
		line-height: 130%;
		letter-spacing: -0.03em;
		@media only screen and (max-width: 600px) {
			text-align: center;
			font-size: 30px;
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.list{
		margin-top: 30px;
		background: #F8F8FA;
		border-radius: 24px;
		padding: 30px;
		display: flex;
		justify-content: space-between;
		align-content: space-between;
		@media only screen and (max-width: 768px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin-left: -20px;
			margin-right: -20px;
			border-radius: 0;
			width: calc(100% + 40px);
		}
	}
	.box_item{
		width: calc(100% / 4 - 25px);
		@media only screen and (max-width: 768px) {
			width: 200px;
			margin-right: 34px;
			flex: 0 0 auto;
		}
		&:nth-child(1) .item{
			background: #38B4F5;
			height: 379px;
			&:after{
				content: '';
				position: absolute;
				right: -34px;
				top: 50%;
				width: 34px;
				height: 1px;
				background: linear-gradient(82.05deg, rgba(45, 221, 226, 0.8) 36.46%, rgba(92, 238, 156, 0.8) 87.82%);
			}
		}
		&:nth-child(2) .item{
			background: #00EE8F;
			height: 379px;
			&:after{
				content: '';
				position: absolute;
				right: -17px;
				top: 50%;
				width: 17px;
				height: 1px;
				background: linear-gradient(82.36deg, rgba(92, 238, 156, 0.8) 36.94%, rgba(165, 92, 238, 0.8) 86.49%);
			}
		}
		&:nth-child(3) {
			position: relative;
			&:before {
				content: '';
				position: absolute;
				left: -17px;
				height: calc(381px - 87px);
				background: linear-gradient(81.76deg, rgba(182, 123, 240, 0.8) 36.03%, rgba(182, 123, 240, 0.8) 89.03%);
				width: 1px;
				bottom: calc(87px / 2);
			}
			.item{
				background: #B057F6;
				height: 87px;
				&:before{
					content: '';
					position: absolute;
					left: -17px;
					top: 50%;
					width: 17px;
					height: 1px;
					background: linear-gradient(82.36deg, rgba(196, 148, 242, 0.8) 36.94%, rgba(165, 92, 238, 0.8) 86.49%);
				}
				&:after{
					content: '';
					position: absolute;
					right: -17px;
					top: 50%;
					width: 17px;
					height: 1px;
					background: linear-gradient(82.32deg, rgba(182, 123, 240, 0.8) 36.87%, rgba(165, 92, 238, 0.8) 86.68%);
				}
			}
		}
		&:nth-child(4){
			position: relative;
			@media only screen and (max-width: 768px) {
				margin-right: 0;
				padding-right: 20px;
			}
			.arrow{
				display: none;
			}
			&:before {
				content: '';
				position: absolute;
				left: -17px;
				height: calc(381px - 54px);
				background: linear-gradient(81.76deg, rgba(182, 123, 240, 0.8) 36.03%, rgba(182, 123, 240, 0.8) 89.03%);
				width: 1px;
				bottom: calc(54px / 2);
			}
			.item{
				background: #EC51F5;
				height: 54px;
				&:before{
					content: '';
					position: absolute;
					left: -17px;
					top: 50%;
					width: 17px;
					height: 1px;
					background: linear-gradient(82.41deg, rgba(165, 92, 238, 0.8) 37.02%, rgba(218, 92, 238, 0.8) 86.27%);
				}
			}
		}
	}
	h3{
		font-size: 20px;
		line-height: 130%;
		@media only screen and (max-width: 820px) {
			font-size: 16px;
		}
		@media only screen and (max-width: 768px) {
			font-size: 20px;
		}
	}
	.list_box{
		margin-top: 33px;
		position: relative;
	}
	.item{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 700;
		font-size: 18px;
		line-height: 130%;
		color: #F9F9F9;
		padding: 0 30px;
		margin-bottom: 11px;
		border-radius: 14px;
		position: relative;
		&:last-child{
			margin-bottom: 0;
		}
	}
`