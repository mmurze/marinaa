import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import CpaHeading from "components/Cpa/CpaHeading";
import Image from "next/image";

export default function CpaBenefits({t}) {
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
									<Image src={item.image} width={110} height={110} alt={item.description} priority={true}/>
									<p>{item.description}</p>
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
		display: flex;
		justify-content: space-between;
		margin-top: 110px;
		border-bottom: 1px solid #EBEBEB;
		@media only screen and (max-width: 1024px) {
			justify-content: center;
			flex-wrap: wrap;
			margin-bottom: -40px;
			border-bottom: none;
			padding-bottom: 0;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 60px;
			margin-bottom: -20px;
		}
	}
	.item{
		width: calc(100% / 5);
		position: relative;
		padding: 0 10px 65px 15px;
		@media only screen and (max-width: 1024px) {
			width: calc(100% / 3);
			padding: 0 50px;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			margin-bottom: 40px;
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% / 2);
			padding: 0 10px;
			margin-bottom: 20px;
		}
		&:last-child:after, &:first-child:after{
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			height: 30px;
			border-left: 1px solid #EBEBEB;
			@media only screen and (max-width: 1024px) {
				display: none;
			}
		}
		&:before{
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			height: 30px;
			border-left: 1px solid #EBEBEB;
			@media only screen and (max-width: 1024px) {
				display: none;
			}
		}
		p{
			font-size: 15px;
			line-height: 150%;
			letter-spacing: -0.03em;
			margin-top: 10px;
		}
	}
`