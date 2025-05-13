import styled from "styled-components";
import Title from "helpers/Title";
import CenterBlock from "helpers/CenterBlock";
import Responsive from "helpers/Responsive";
export default function MainCharismWallet({t}) {
	return (
		<Wrapper>
			<CenterBlock width={1080}>
				<div className="title_pic">
					<Title><h2>{t.title}</h2></Title>
					<Responsive width={820}>
						<div className="picture">
							<img src="/pic/main/main-charism-wallte/charismWallet.svg" alt="circles"/>
						</div>
					</Responsive>
				</div>
				<ul className="list">
					{
						t.list.map((item, index) => {
							return (
								<li key={index}>
									<img src={item.slug} alt={item.alt}/>
									<p className="list_item">{item.text}</p>
								</li>
							)
						})
					}
				</ul>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	.center_block{
		display: flex;
		justify-content: space-between;
		margin-top: 150px;
		@media only screen and (max-width: 820px) {
			margin-top: 90px;
			flex-direction: column;
			justify-content: center;
			gap: 30px;
		}
	}

	.list{
		width: 40%;
		@media only screen and (max-width: 1024px){
			width: 90%;
		}
		li{
			display: flex;
			margin: 50px 0;
			&:first-child{
				margin-top: 0;
			}
		}
		img{
			margin: 0 30px 0 10px;
			@media only screen and (max-width: 820px){
				max-width: 50px;
			}
		}
	}
	.title_pic{
		max-width: 580px;
		width: 100%;
		@media only screen and (max-width: 1024px){
			max-width: 450px;
		}
		@media only screen and (max-width: 820px){
			max-width: 820px;
		}
		.picture {
			margin-top: 30px;
			@media only screen and (max-width: 1024px) {
				width: 300px;
			}
		}
	}
`