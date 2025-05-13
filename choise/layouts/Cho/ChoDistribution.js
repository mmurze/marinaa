import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function ChoDistribution({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title className="mobile"><h2>{t.title}</h2></Title>
				<div className="image">
					<Image src="/pic/cho/cho-distribution.jpg" width={520} height={520} priority={true} alt="CHO token distribution"/>
				</div>
				<div className="content">
					<Title className="desktop"><h2>{t.title_desktop}</h2></Title>
					<ul className="list">
						{
							t.array.map((item, index) => {
								return (
									<Item background={item.background} color={item.color} key={index}>
										<span>{item.percent}</span>
										<p>{item.title}</p>
									</Item>
								)
							})
						}
					</ul>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Item = styled.li`
	display: flex;
	align-items: center;
	width: calc(50% - 20px);
	margin-bottom: 13px;
	@media only screen and (max-width: 600px) {
		width: 100%;
	}
	span{
		font-weight: 700;
		font-size: 18px;
		line-height: 100%;
		padding: 5px 10px;
		border-radius: 130.694px;
		background: ${p => p.background};
		color: ${p => p.color};
	}
	p{
		margin-left: 10px;
		font-size: 18px;
		line-height: 19px;
	}
`

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.image{
		width: 520px;
		line-height: 0;
		@media only screen and (max-width: 1024px) {
			width: 35%;
		}
		@media only screen and (max-width: 820px) {
			width: 100%;
			display: flex;
			justify-content: center;
			padding: 0 200px;
			margin-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			padding: 0 50px;
		}
	}
	.content{
		width: calc(100% - 520px);
		padding-left: 100px;
		@media only screen and (max-width: 1024px) {
			width: 65%;
			padding-left: 80px;
		}
		@media only screen and (max-width: 820px) {
			padding-left: 0;
			width: 100%;
		}
	}
	.title{
		max-width: 277px;
		width: 100%;
		&.desktop{
			@media only screen and (max-width: 820px) {
				display: none;
			}
		}
		&.mobile{
			display: none;
			text-align: center;
			margin: 0 auto;
			@media only screen and (max-width: 820px) {
				display: block;
			}
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 60px;
		flex-wrap: wrap;
		margin-bottom: -13px;
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
	}
`