import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import htmlContent from "helpers/htmlContent";
export default function StepInformationCard({t}) {
	return (
		<Wrapper className="tab_item_block">
			<div className="content">
				<Link href="/pages/cards" className="top_link">{t.link_card}</Link>
				<div className="top">
					<h3>{t.title}</h3>
					<p className="description">{t.description}</p>
					<div className="labels_list">
						<p><img src="/pic/main-new/visa.svg" alt="Visa"/></p>
						<p><img src="/pic/main-new/mastercard.svg" alt="Mastercard"/> {htmlContent(t.link_description)}</p>
						<p><img src="/pic/main-new/apple-pay.svg" alt="Apple Pay"/></p>
					</div>
				</div>
				<div className="link_block">{t.link_card}</div>
			</div>
			<div className="image">
				<Image src="/pic/main-new/tab-image-card.jpg" width={834} height={484} priority={true} alt="your choise to card"/>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	.labels_list{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -5px;
		margin-top: 20px;
		.soon{
			border-left: 1px solid #C6CAD3;
			padding-left: 5px;
			margin-left: 5px;
			font-weight: 500;
			font-size: 12px;
			line-height: 14px;
			color: #A2A8B7;
		}
		p{
			background: #F6F7F8;
			border-radius: 8px;
			padding: 4px 5px;
			margin-right: 5px;
			margin-bottom: 5px;
			font-weight: 500;
			font-size: 12px;
			line-height: 150%;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.content{
		background: #F9F9F9;
		border-radius: 20px;
		width: 286px;
		height: 484px;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		&:hover .link_block{
			background: #272A32;
			transition: .3s ease-in-out;
		}
	}
	.image{
		overflow: hidden;
		border-radius: 20px;
		width: calc(100% - 286px - 20px);
		background: #F9F9F9;
	}
	h3{
		font-size: 24px;
		line-height: 120%;
	}
	.description{
		margin-top: 20px;
		font-size: 14px;
		line-height: 150%;
		color: #848484;
	}
	.link_block{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #191B20;
		padding: 20px;
		border-radius: 55px;
		height: 43px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		color: #F9F9F9;
		transition: .3s ease-in-out;
	}
	.top_link{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		font-size: 0;
	}
`
