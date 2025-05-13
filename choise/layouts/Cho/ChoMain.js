import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function ChoMain({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>{t.title}</h1></Title>
					<div className="list">
						<p>{t.description_1}</p>
						<p>{t.description_2}</p>
					</div>
				</div>
				<div className="image">
					<Image src="/pic/cho/cho-main.png" width={592.98} height={489.26} priority={true} alt="CHO token"/>
				</div>
				<div className="glow"><img src="/pic/cho/cho-glow.svg" alt="The CHO tokenomics is based on the best practices from the industry, a cutting-edge vision for global finance, and our expertise of running a 6 y.o. crypto venture."/></div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 120px;
	position: relative;
	overflow: hidden;
	padding-bottom: 80px;
	margin-bottom: -80px;
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.glow{
		position: absolute;
		top: -300px;
		right: -400px;
		@media only screen and (max-width: 820px) {
			top: -500px;
		}
		@media only screen and (max-width: 600px) {
			top: -200px;
		}
	}
	.list{
		margin-top: 30px;
		max-width: 474px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
		p{
			margin-bottom: 15px;
			font-size: 18px;
			line-height: 150%;
			color: #80889C;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.image{
		position: relative;
		z-index: 10;
		padding-left: 40px;
		@media only screen and (max-width: 600px) {
			padding-left: 0;
			margin-top: 40px;
		}
	}
	.content{
		max-width: 508px;
		width: 100%;
		position: relative;
		z-index: 10;
	}
`