import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
export default function MainList({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<p className="title_partners">{t.title}</p>
				<div className="partners">
					<ul className="left_partners">
						{
							t.partners.left.map((item, index) => {
								return (
									<li key={index}><img src={item.slug} alt={item.alt}/></li>
								)
							})
						}
					</ul>
					<ul className="right_partners">
						{
							t.partners.right.map((item, index) => {
								return (
									<li key={index}>
										<img className="money" src="/pic/main/main-list/money.svg" alt="money"/>
										<img src={item.slug} alt={item.alt}/>
									</li>
								)
							})
						}
					</ul>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 50px;
	.title_partners{
		display: flex;
		justify-content: center;
		font-weight: 500;
		color: #7B8199;
	}
	
	.partners{
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		@media only screen and (max-width: 600px) {
			justify-content: space-evenly;
		}
		@media only screen and (max-width: 480px) {
			flex-direction: column;
			gap: 15px;
		}
		ul{
			display: flex;
			flex-wrap: wrap;
			width: calc(50% - 30px);
			gap: 10px;
			@media only screen and (max-width: 480px) {
				width: 100%;
			}
			&.left_partners{
				justify-content: flex-end;
				@media only screen and (max-width: 480px) {
					justify-content: center;
				}
			}
			&.right_partners{
				justify-content: flex-start;
				@media only screen and (max-width: 480px) {
					justify-content: center;
				}
			}
		}
		li{
			padding: 5px;
			display: flex;
			justify-content: center;
			border-radius: 10px;
			border: 2px solid #F6F7F8;
			img {
				margin-right: 5px;
			}
		}
	}
`