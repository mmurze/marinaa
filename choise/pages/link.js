import {useEffect} from "react";
import Router, {useRouter} from "next/router";
import Seo from "helpers/Seo";
import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Header from "components/Header";
import Footer from "components/Footer";
export default function Link(){
	const {locale} = useRouter()
	const t = require(`locale/page-link/${locale}.json`)
	
	useEffect(() => {
		Router.push("https://crpt.onelink.me/WpQ0/4ins5ese")
	}, [])
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<Wrapper>
					<CenterBlock>
						<Title><h2>{t.title}</h2></Title>
					</CenterBlock>
				</Wrapper>
			</main>
			<Footer/>
		</>
	)
}

const Wrapper = styled.section`
	padding: 140px 0;
	.title{
		text-align: center;
	}
`