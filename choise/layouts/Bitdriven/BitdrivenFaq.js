import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import FaqList from "components/FaqList";
import Title from "components/Title";

export default function BitdrivenFaq({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<FaqList blackTheme={true} array={t.array}/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	color: #fff;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.title h2{
		text-transform: uppercase;
	}
	.faq_list{
		margin-top: 80px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
	.content{
		font-size: 16px;
		line-height: 150%;
		a{
			color: #F8F8FA;
			text-decoration: underline;
		}
	}
	ul{
		list-style-type: disc;
		padding-left: 15px;
		margin: 15px 0;
	}
`
