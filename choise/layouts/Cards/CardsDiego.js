import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import Title from "components/Title";
import Link from "next/link";

export default function CardsDiego({t}) {
	return (
		<Wrapper>
			<CenterBlock width={1020}>
				<div className="image">
					<Image src="/pic/cards/diego.jpg" width={443.82} height={456.84} priority={true} alt="meet diego"/>
				</div>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<p>{t.description}</p>
					<Link href="/news/post/how-crypterium-card-simplifies-life-for-freelance-web-developer">
						{t.link}
					</Link>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 140px;
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
		}
	}
	.image{
		width: 443.82px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
	.content{
		width: calc(100% - 443.82px);
		padding-left: 84px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			padding-left: 0;
			margin-top: 40px;
		}
		p{
			font-size: 18px;
			line-height: 150%;
			color: #80889C;
			margin-top: 40px;
		}
		a{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			height: 56px;
			padding: 16px 40px;
			background: #FFFB1F;
			border-radius: 40px;
			font-size: 16px;
			line-height: 24px;
			font-weight: 500;
			margin-top: 56px;
		}
	}
`