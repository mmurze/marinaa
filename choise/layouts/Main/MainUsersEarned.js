import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import MainUsersEarnedSliderItem from "layouts/Main/MainUsersEarnedSliderItem";
import Link from "next/link";

export default function MainUsersEarned({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.array.map((item, index) => {
							return <MainUsersEarnedSliderItem item={item} key={index}/>
						})
					}
				</div>
				<div className="link">
					<Link href="/pages/earn">{t.link}</Link>
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
	.list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 40px;
		@media only screen and (max-width: 1024px) {
			margin-bottom: -20px;
		}
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 40px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
		}
	}
	.link{
		display: flex;
		justify-content: center;
		margin-top: 50px;
		@media only screen and (max-width: 600px) {
			margin-top: 40px;
		}
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #FFFB1F;
			border-radius: 40px;
			padding: 8px 35px;
			height: 56px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			@media only screen and (max-width: 600px) {
				width: 100%;
			}
		}
	}
`
