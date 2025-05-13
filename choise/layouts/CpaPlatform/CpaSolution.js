import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import CpaHeading from "components/Cpa/CpaHeading";
import Image from "next/image";

export default function CpaSolution({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<CpaHeading title={t.title}/>
				<div className="list_block">
					<ul>
						{
							t.array.map((item, index) => {
								return <li key={index}>{item}</li>
							})
						}
					</ul>
					<div className="image">
						<Image src="/pic/cpa/cpa-solution.jpg" width={895} height={533} alt={t.title} priority={true}/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 90px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.list_block{
		background: #F7F7F7;
		border-radius: 24px;
		margin-top: 65px;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		height: 533px;
		position: relative;
		padding: 100px 0 100px 70px;
		@media only screen and (max-width: 1024px) {
			padding: 40px 0 40px 40px;
			height: 370px;
		}
		@media only screen and (max-width: 600px) {
			height: auto;
			padding: 40px;
			margin-top: 30px;
		}
	}
	ul{
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.image{
		line-height: 0;
		position: absolute;
		right: 0;
		bottom: 0;
		@media only screen and (max-width: 1024px) {
			transform: scale(.7);
			transform-origin: right bottom;
		}
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	li{
		font-size: 24px;
		line-height: 110%;
		letter-spacing: -0.03em;
		margin-bottom: 35px;
		@media only screen and (max-width: 1024px) {
			margin-bottom: 20px;
		}
		@media only screen and (max-width: 820px) {
			font-size: 21px;
		}
		@media only screen and (max-width: 600px) {
			text-align: center;
			font-size: 18px;
			width: 100%;
		}
		&:last-child{
			margin-bottom: 0;
		}
	}
`