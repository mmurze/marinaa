import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import CpaHeading from "components/Cpa/CpaHeading";
import Image from "next/image";

export default function CpaAdvantages({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<CpaHeading
					title={t.title}
					subTitle={t.sub_title}
					description={t.description}
				/>
				<div className="list">
					{
						t.array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<h3>{item.title}</h3>
									{item.link && (
										<div className="link">
											<a href={item.link} target="_blank">{item.link_title}</a>
										</div>
									)}
									<div className="image">
										<Image src={item.image} width={item.width} height={item.height} priority={true} alt={item.title}/>
									</div>
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.list{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			padding-bottom: 20px;
			margin-bottom: -20px;
			margin-left: -40px;
			margin-right: -40px;
			padding-right: 40px;
			padding-left: 40px;
		}
		@media only screen and (max-width: 820px) {
			margin-left: -20px;
			margin-right: -20px;
			padding-right: 20px;
			padding-left: 20px;
		}
	}
	.item{
		width: calc(100% / 3 - 20px);
		background: #F8F8FA;
		border-radius: 24px;
		min-height: 607px;
		padding: 45px 40px 0 40px;
		overflow: hidden;
		position: relative;
		@media only screen and (max-width: 1024px) {
			flex: 0 0 auto;
			width: 382px;
			margin-right: 20px;
		}
		@media only screen and (max-width: 820px) {
			width: 360px;
		}
		@media only screen and (max-width: 600px) {
			width: 300px;
			min-height: 450px;
			padding: 30px 30px 0 30px;
		}
	}
	.image{
		position: absolute;
		bottom: 0;
		left: 0;
		line-height: 0;
	}
	h3{
		font-weight: normal;
		position: relative;
		z-index: 10;
		font-size: 26px;
		line-height: 140%;
		letter-spacing: -0.03em;
		@media only screen and (max-width: 600px) {
			font-size: 20px;
		}
	}
	.link{
		margin-top: 30px;
		position: relative;
		z-index: 10;
		visibility: hidden;
		a{
			background: #FFFB1F;
			border-radius: 40px;
			height: 47px;
			padding: 0 27px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 16px;
			line-height: 24px;
			letter-spacing: -0.03em;
		}
	}
`