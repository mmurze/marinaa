import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";

export default function CharismBetaNft({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						t.list.map((item, index) => {
							return (
								<div className="item" key={index}>
									<div className="image">
										<Image src={item.image} width={264} height={321} priority={true} alt={item.title}/>
									</div>
									<div className="content">
										<span>{item.value}</span>
										<p>{item.title}</p>
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
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 100px;
		@media only screen and (max-width: 1024px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
		}
	}
	.item{
		width: calc(100% / 4 - 20px);
		display: flex;
		flex-direction: column;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			width: 240px;
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
		}
		&:last-child{
			margin-right: 0;
		}
		&:nth-child(1) span{
			background: #191B20;
			color: #F9F9F9;
		}
		&:nth-child(2) span{
			background: #0285FD;
			color: #F9F9F9;
		}
		&:nth-child(3) span{
			background: #5CEE9C;
		}
		&:nth-child(4) span{
			background:#FFFB1F;
		}
	}
	.image{
		line-height: 0;
	}
	.content{
		display: flex;
		align-items: center;
		width: 100%;
		margin-top: 27px;
		margin-left: 35px;
		span{
			width: 62px;
			height: 62px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			line-height: 0;
			font-weight: 700;
			font-size: 23px;
		}
		p{
			width: calc(100% - 62px);
			padding-left: 12px;
			font-weight: 700;
			font-size: 18px;
			line-height: 150%;
		}
	}
`