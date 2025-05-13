import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function CharismBetaWhatIsIt({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title center={true}><h2>{t.title}</h2></Title>
				<div className="list">
					<div className="image">
						<Image src="/pic/charism/what-is.jpg" width={590} height={400} priority={true} alt="what is charism?"/>
					</div>
					<div className="content">
						<p className="description">{t.description}</p>
						<p className="sub_description">{t.sub_description}</p>
					</div>
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
	.list{
		margin-top: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column-reverse;
			justify-content: flex-start;
			align-items: flex-start;
			margin-top: 20px;
		}
	}
	.image{
		padding-right: 50px;
		@media only screen and (max-width: 820px) {
			padding-right: 0;
			display: flex;
			justify-content: center;
			width: 100%;
			margin-top: 20px;
		}
	}
	.content{
		max-width: 524px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
		}
		p{
			font-size: 20px;
			line-height: 150%;
			margin-bottom: 17px;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 140%;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.description{
		padding: 0 20px;
	}
	.sub_description{
		background: #FFFFDE;
		border-radius: 16px;
		padding: 20px;
	}
`