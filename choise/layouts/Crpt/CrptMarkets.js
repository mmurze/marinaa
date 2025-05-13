import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import array from "public/data/crypterium-markets.json"
import Title from "components/Title";
import htmlContent from "helpers/htmlContent";
export default function CrptMarkets({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title>
					<h2>{htmlContent(t.title)}</h2>
				</Title>
				<div className="list">
					{
						array.crpt.map((item, index) => {
							return (
								<div className="item" key={index}>
									{item.slug !== "#" ? (
										<a target="_blank" href={item.slug} dangerouslySetInnerHTML={{__html: item.icon}}/>
									) : (
										<span dangerouslySetInnerHTML={{__html: item.icon}}/>
									)}
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
	.title{
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		img{
			position: relative;
			top: 10px;
			@media only screen and (max-width: 600px) {
				width: 25px;
				height: 25px;
				top: 3px;
			}
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 90px;
		@media only screen and (max-width: 1024px) {
			margin-top: 60px;
		}
	}
	.item{
		width: calc(100% / 5 - 10px);
		margin-bottom: 60px;
		@media only screen and (max-width: 600px) {
			width: calc(50% - 10px);
			margin-bottom: 40px;
		}
		&:last-child{
			margin-bottom: 0;
		}
		span{
			height: 43px;
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 0;
			svg{
				fill: #7B8199;
			}
		}
		a{
			height: 43px;
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 0;
			&:hover{
				svg{
					fill: #0285FD;
					transition: all .3s ease-in-out;
				}
			}
			svg{
				fill: #7B8199;
				transition: all .3s ease-in-out;
			}
		}
	}
`