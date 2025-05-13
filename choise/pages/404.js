import Seo from "helpers/Seo";
import styled from "styled-components";
import Image from "next/legacy/image";
import Link from "next/link";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Custom404() {
  const {locale} = useRouter()
  const t = require(`locale/page-404/${locale}.json`)
  
  return (
    <>
      <Seo
        title={t.seo.title}
        description={t.seo.description}
      />
      <Header/>
      <main>
        <Wrapper>
          <div className="image">
            <Image src="/pic/logo-404.png" width={359} height={170} alt="page not found" priority={true}/>
          </div>
          <h1>{t.main.title}</h1>
          <p>{t.main.description}</p>
          <div className="link">
            <Link href="/">{t.main.link}</Link>
          </div>
        </Wrapper>
      </main>
      <Footer/>
    </>
  )
}

const Wrapper = styled.section`
	background-image: url("/pic/background-404.svg");
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 20px;
	text-align: center;
	margin-bottom: -100px;
	@media only screen and (max-width: 1024px) {
		margin-bottom: -70px;
	}
	h1{
		font-size: 50px;
		line-height: 120%;
		margin-top: 10px;
		font-weight: normal;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
		}
	}
	p{
		font-size: 18px;
		line-height: 120%;
		margin-top: 5px;
	}
	.link{
		margin-top: 40px;
		a{
			font-size: 14px;
			line-height: 24px;
			color: #F7F7F7;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #0285FD;
			border-radius: 40px;
			padding: 15px 60px;
			&:hover{
				background: #191B20;
			}
		}
	}
`