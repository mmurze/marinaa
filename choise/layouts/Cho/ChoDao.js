import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function ChoDao({t}) {
	return (
		<Wrapper>
			<CenterBlock width={1096}>
				<div className="image">
					<Image src="/pic/cho/cho-dao.jpg" width={527} height={519} priority={true} alt="dao. your choise to make an impact"/>
				</div>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
					<div className="list">
						<p>{t.description_1}</p>
						<p>{t.description_2}</p>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
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
	.image{
		max-width: 527px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
			display: flex;
			justify-content: center;
		}
	}
	.content{
		max-width: 490px;
		width: 100%;
		margin-left: 80px;
		@media only screen and (max-width: 820px) {
			margin-left: 0;
			max-width: 100%;
			margin-top: 40px;
		}
	}
	.description{
		background: #FFFFDE;
		border-radius: 20px;
		padding: 20px 30px;
		font-size: 18px;
		line-height: 150%;
		margin-top: 50px;
	}
	.list{
		margin-top: 30px;
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
`