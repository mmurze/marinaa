import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

export default function HelpKnowMore() {
	const {locale} = useRouter()
	const {helpKnowMore} = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper>
			<CenterBlock>
				<div className="item">
					<Title><h2>{helpKnowMore.title_1}</h2></Title>
					<p className="description">{helpKnowMore.description_1_1}
						<a href="mailto:support@choise.com" target="_blank" rel="noreferrer">support@choise.com</a> {helpKnowMore.description_1_2}</p>
					<div className="make_request">
						<a href="mailto:support@choise.com" target="_blank" rel="noreferrer" className="button_link">{helpKnowMore.link_a}</a>
					</div>
					<div className="image">
						<Image src="/pic/help/know-more.png" width={294} height={206.76} priority={true} alt="Need to know more?"/>
					</div>
				</div>
				<div className="item">
					<Title><h2>{helpKnowMore.title_2}</h2></Title>
					<p className="description">{helpKnowMore.description_2}</p>
					<div className="learn_more">
						<Link href="/news/tutorials" className="button_link">{helpKnowMore.link}</Link>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 120px;
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
	.item{
		width: 100%;
		background: #F6F7F8;
		border-radius: 24px;
		padding: 50px;
		position: relative;
		@media only screen and (max-width: 820px) {
			text-align: center;
		}
		&:first-child{
			max-width: 696px;
			margin-right: 15px;
			@media only screen and (max-width: 820px) {
				max-width: 100%;
				margin-right: 0;
			}
		}
		&:last-child{
			max-width: 474px;
			margin-left: 15px;
			@media only screen and (max-width: 820px) {
				max-width: 100%;
				margin-left: 0;
				margin-top: 40px;
			}
			@media only screen and (max-width: 600px) {
				margin-top: 20px;
			}
			.title, .description{
				text-align: center;
			}
		}
	}
	.description{
		margin-top: 20px;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
		max-width: 380px;
		width: 100%;
		@media only screen and (max-width: 820px) {
			margin: 20px auto 0 auto;
		}
		a{
			color: #0285FD;
		}
	}
	.make_request{
		margin-top: 90px;
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
		}
		a{
			background: #0285FD;
			color: #F9F9F9;
			&:hover{
				background: #191B20;
			}
		}
	}
	.learn_more{
		text-align: center;
		margin-top: 90px;
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
		}
		a{
			background: #FFFB1F;
			&:hover{
				background: #0285FD;
				color: #F9F9F9;
			}
		}
	}
	.button_link{
		height: 60px;
		border-radius: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		padding: 20px 60px;
	}
	.image{
		line-height: 0;
		position: absolute;
		bottom: -30px;
		right: 70px;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
	}
`