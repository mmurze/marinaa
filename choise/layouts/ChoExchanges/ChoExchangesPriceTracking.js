import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function ChoExchangesPriceTracking({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<a className="item" key={index} href={item.slug} target="_blank" rel="noreferrer">
									<img src={item.icon} alt={item.title}/>
								</a>
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
	}
	.list{
		display: flex;
		justify-content: center;
		margin-top: 50px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		a{
			min-width: 270px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #191B20;
			border-radius: 40px;
			height: 68px;
			margin: 0 5px;
			padding: 0 40px;
			@media only screen and (max-width: 600px) {
				min-width: 100%;
				&:last-child{
					margin-top: 20px;
				}
			}
			&:hover{
				background: #0285FD;
			}
		}
	}
`