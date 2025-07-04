import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function StepInformationInsure({t}) {
	return (
		<Wrapper className="tab_item_block">
			<div className="content">
				<Link href="/pages/price-insurance" className="top_link">{t.link_insure}</Link>
				<div className="top">
					<h3>{t.title}</h3>
					<p className="description">{t.description}</p>
				</div>
				<div className="link_block">{t.link_insure}</div>
			</div>
			<div className="image">
				<Image src="/pic/main-new/tab-image-insure.jpg" width={834} height={484} priority={true} alt="your choise to insure assets"/>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
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
