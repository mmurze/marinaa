import styled from "styled-components";
import Image from "next/image";
import Title from "components/Title";
import GradientButton from "components/Buttons/GradientButton";
import CenterBlock from "helpers/CenterBlock";

export default function SupportStep0({onClick, t}){
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h1>{t.title}</h1></Title>
				<p className="description">{t.description}</p>
				<GradientButton onClick={() => onClick(true)}>{t.button}</GradientButton>
				<div className="image">
					<Image src="/pic/support/support-start.jpg" width={521} height={339} alt="let us help you" priority={true}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	text-align: center;
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.gradient_button{
		width: auto;
		margin: 50px auto 0 auto;
		padding: 0 60px;
	}
	p{
		font-size: 18px;
		line-height: 26px;
		color: #7B8199;
		margin: 15px 0 0 0;
	}
	.image{
		margin-top: 40px;
	}
`
