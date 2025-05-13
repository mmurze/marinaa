import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import htmlContent from "helpers/htmlContent";
import Link from "next/link";

export default function HelpSearchArray({array}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<Link href={`/help/${item.section_id}/${item.id}`}>{item.title}</Link>
									<div className="heading">
										<h3>{item.title}</h3>
										<div className="icon">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M15.2071 6.95994C15.5976 7.35046 15.5976 7.98363 15.2071 8.37415L8.84315 14.7381C8.45262 15.1286 7.81946 15.1286 7.42893 14.7381C7.03841 14.3476 7.03841 13.7144 7.42893 13.3239L12.0858 8.66704H1.5C0.947714 8.66704 0.499999 8.21933 0.499999 7.66704C0.499999 7.11476 0.947714 6.66704 1.5 6.66704H12.0858L7.42893 2.01019C7.03841 1.61967 7.03841 0.986501 7.42893 0.595977C7.81946 0.205452 8.45262 0.205452 8.84315 0.595977L15.2071 6.95994Z"/>
											</svg>
										</div>
									</div>
									<p className="description">{htmlContent(item.snippet)}</p>
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 70px;
	.title{
		text-align: center;
	}
	.list{
		margin-top: 40px;
	}
	.item{
		border-bottom: 1px solid #EBEBEB;
		padding: 40px 30px;
		position: relative;
		&:last-child{
			padding: 40px 30px 0 30px;
			border-bottom: none;
		}
		&:hover{
			.icon {
				background: #191B20;
				transition: all .3s ease-in-out;
				svg{
					fill: #F9F9F9;
					transition: all .3s ease-in-out;
				}
			}
		}
		.icon{
			width: 32px;
			height: 32px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			line-height: 0;
			border-radius: 50%;
			background: #FFFB1F;
			transition: all .3s ease-in-out;
			svg{
				fill: #191B20;
				transition: all .3s ease-in-out;
			}
		}
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
			font-size: 0;
		}
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		h3{
			font-size: 28px;
			line-height: 120%;
			width: calc(100% - 35px);
			padding-right: 20px;
		}
	}
	.description{
		font-size: 18px;
		line-height: 150%;
		color: #7B8199;
		margin-top: 16px;
	}
`