import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import EntityLicenseIsuredBitGo from "components/EntityLicenseIsuredBitGo";
import Image from "next/image";
import htmlContent from "helpers/htmlContent";
export default function MainArtSecurity({t}) {
	return (
		<Wrapper>
			<CenterBlock width={1137}>
				<div className="image">
					<span className="label1"><img src="/pic/main-new/art-safe-label-1.svg" alt="BitGo"/></span>
					<span className="label2"><img src="/pic/main-new/art-safe-label-2.svg" alt="Ondato"/></span>
					<span className="label3"><img src="/pic/main-new/art-safe-label-3.svg" alt="Chainalysis"/></span>
					<Image src="/pic/main-new/art-security-safe.png" width={575.75} height={576.11} priority={true} alt="state-of-the-art security"/>
				</div>
				<div className="content">
					<Title><h4>{htmlContent(t.title)}</h4></Title>
					<div className="list">
						{
							t.descriptions.map((item, index) => {
								return(
									<p key={index}>{item}</p>
								)
							})
						}
					</div>
					<EntityLicenseIsuredBitGo/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 200px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column-reverse;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}
	.content{
		max-width: 374px;
		width: 100%;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
		}
	}
	.image{
		position: relative;
		@media only screen and (max-height: 900px) {
			transform: scale(.8);
		}
		@media only screen and (max-width: 1024px) {
			margin-right: 150px;
		}
		@media only screen and (max-width: 820px) {
			margin-right: 80px;
		}
		@media only screen and (max-width: 600px) {
			margin: 40px 40px 0 40px;
			transform: scale(1);
		}
		&:hover{
			.label1{
				top: 70px;
				left: 20px;
			}
			.label2{
				top: 50%;
				right: -20px;
			}
			.label3{
				bottom: 20px;
				left: 80px;
			}
		}
	}
	.list{
		margin-top: 20px;
		font-size: 14px;
		line-height: 150%;
		color: #80889C;
		p{
			margin-bottom: 20px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.license_insured{
		margin-top: 50px;
	}
	.label1{
		position: absolute;
		top: 10px;
		left: 0;
		z-index: 10;
		transition: .3s ease-in-out;
		@media only screen and (max-width: 820px) {
			transform: scale(.5);
		}
	}
	.label2{
		position: absolute;
		top: 50%;
		right: -70px;
		transform: translateY(-50%);
		z-index: 10;
		margin-top: -50px;
		transition: .3s ease-in-out;
		@media only screen and (max-width: 820px) {
			transform: translateY(-50%) scale(.5);
		}
	}
	.label3{
		position: absolute;
		bottom: -20px;
		left: 50px;
		z-index: 10;
		transition: .3s ease-in-out;
		@media only screen and (max-width: 820px) {
			transform: scale(.5);
		}
	}
`
