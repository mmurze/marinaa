import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import EntityLicenseIsuredBitGo from "components/EntityLicenseIsuredBitGo";

export default function NftFendSecurity({t}) {
	return (
		<Wrapper>
			<CenterBlock width={1140}>
				<div className="image">
					<Image src="/pic/fend/security.jpg" width={426} height={427} priority={true} alt="state-of-the-art security"/>
				</div>
				<div className="content">
					<Title><h2>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
					<EntityLicenseIsuredBitGo/>
					{/*<div className="licensed_title">License agreement</div>*/}
					{/*<ul className="list">*/}
					{/*	{*/}
					{/*		t.array.map((item, index) => {*/}
					{/*			return (*/}
					{/*				<li key={index}>*/}
					{/*					<img src="/pic/fend/file.svg" alt={item.title}/>*/}
					{/*					{item.title}*/}
					{/*				</li>*/}
					{/*			)*/}
					{/*		})*/}
					{/*	}*/}
					{/*</ul>*/}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 768px) {
			flex-direction: column-reverse;
			align-items: flex-start;
			justify-content: flex-start;
		}
	}
	.content{
		max-width: 411px;
		width: 100%;
		@media only screen and (max-width: 768px) {
			max-width: 100%;
		}
	}
	.license_insured{
		margin-top: 20px;
	}
	.description{
		margin-top: 15px;
		font-size: 16px;
		line-height: 150%;
		color: #7B8199;
	}
	.licensed_title{
		margin-top: 50px;
		color: #7B8199;
		font-size: 16px;
		line-height: 150%;
	}
	.list{
		display: flex;
		margin-top: 18px;
		@media only screen and (max-width: 768px) {
			justify-content: space-between;
		}
		li{
			margin-right: 17px;
			background: #F7F7F7;
			border-radius: 7px;
			padding: 9px 12px;
			height: 39px;
			display: flex;
			align-items: center;
			cursor: default;
			transition: .3s ease-in-out;
			&:hover{
				background: #5CEE9C;
				transition: .3s ease-in-out;
			}
			@media only screen and (max-width: 768px) {
				margin-right: 0;
			}
			&:last-child{
				margin-right: 0;
			}
		}
		img{
			margin-right: 10px;
		}
	}
	.image{
		margin-right: 40px;
		@media only screen and (max-width: 768px) {
			margin: 40px 0 -50px 0;
			display: flex;
			justify-content: center;
			width: 100%;
		}
	}
`
