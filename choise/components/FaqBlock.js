import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import FaqList from "components/FaqList";
import {useRouter} from "next/router";

export default function FaqBlock({array, center = false, title = true}) {
	const {locale} = useRouter()
	const t = require(`locale/components/${locale}.json`)

	return (
		<Wrapper id="faq">
			<CenterBlock>
				{title && <Title className={center ? "center" : ""}><h2>{t.faq.title}</h2></Title>}
				<FaqList array={array}/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		&.center{
			text-align: center;
		}
		@media only screen and (max-width: 600px) {
			text-align: center;
		}
	}
	.faq_list{
		margin-top: 80px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
	}
`