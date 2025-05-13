import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function SecurityListCertificates({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="banner">
					<div className="image">
						<Image src="/pic/security/certificate-image.jpg" alt="list of our certificates" priority={true} width={245} height={216}/>
					</div>
					<div className="content">
						<Title><h2>{t.title}</h2></Title>
						<ul className="list">
							{
								t.certificates.map((item, index) => {
									return (
										<li key={index}>
											<img src="/pic/security/certificate-icon.svg" alt={`Certificate ${index + 1}`}/> {item}
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 180px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.banner{
		background: #272A32;
		border-radius: 50px;
		padding: 40px 60px 0 60px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		@media only screen and (max-width: 1024px) {
			flex-direction: column-reverse;
			justify-content: center;
			align-items: center;
		}
		@media only screen and (max-width: 600px) {
			padding: 30px 30px 0 30px;
			border-radius: 26px;
		}
	}
	.content{
		color: #fff;
		width: calc(100% - 245px - 40px);
		padding-bottom: 40px;
		@media only screen and (max-width: 1024px) {
			width: 100%;
			padding-bottom: 0;
		}
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -10px;
		margin-top: 30px;
		li{
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			color: #fff;
			font-size: 16px;
			line-height: 130%;
			margin-right: 10px;
			background: #454A58;
			border-radius: 55px;
			padding: 9px 20px;
			height: 39px;
			margin-bottom: 10px;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 130%;
				margin-right: 5px;
			}
			&:last-child{
				margin-right: 0;
			}
			img{
				margin-right: 8px;
			}
		}
	}
	.image{
		line-height: 0;
		width: 245px;
		@media only screen and (max-width: 1024px) {
			margin-top: 50px;
		}
	}
`