import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import data from "public/data/crypterium-markets.json";

export default function ChoTradedOn({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						data.choise.map((item, index) => {
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

const Wrapper = styled.div`
	margin-top: 90px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		margin-top: 60px;
		gap: 20px 40px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			gap: 2px 0;
			justify-content: center;
		}
	}
	.item{
		width: 205px;
		@media only screen and (max-width: 600px) {
			width: calc(50% - 10px);
		}
		a{
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			line-height: 0;
			@media only screen and (max-width: 600px) {
				width: 100%;
				justify-content: center;
				padding: 0 20px;
			}
			&:hover{
				svg{
					fill: #191B20;
					transition: all .3s ease-in-out;
				}
			}
			svg{
				fill: #C6CAD3;
				transition: all .3s ease-in-out;
			}
		}
	}
`