import styled from "styled-components";
import numberFormat from "helpers/numberFormat";
import Image from "next/image";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function ProfileAmbassador() {
	const snap = useSnapshot(state);
	return (
		<Wrapper className="item">
			<div className="content_box">
				<h2>Ambassador</h2>
				<p className="description">Now you are a part of MetaFi enthusiasts team</p>
			</div>
			<div className="value_box">
				<div className="label">Ambassador Points</div>
				<div className={`value ${+snap.ambassadorUserPoints === 0 ? "none" : ""}`}>{numberFormat(snap.ambassadorUserPoints)}</div>
				<div className="image">
					<Image src="/pic/profile/amb-icon.png" width={46} height={56} priority={true} alt="Ambassador Points"/>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: #F6F7F8;
	border-radius: 36px;
	padding: 50px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 1024px) {
		flex-direction: column;
		justify-content: flex-start;
	}
	@media only screen and (max-width: 600px) {
		padding: 30px;
	}
	h2{
		font-size: 30px;
		line-height: 130%;
	}
	.description{
		font-size: 14px;
		line-height: 140%;
		color: #7B8199;
		margin-top: 10px;
	}
	.content_box{
		width: 200px;
		@media only screen and (max-width: 1024px) {
			width: 100%;
		}
	}
	.value_box{
		background: #F9F9F9;
		border-radius: 20px;
		padding: 15px 30px;
		width: calc(100% - 200px);
		margin-left: 20px;
		position: relative;
		overflow: hidden;
		@media only screen and (max-width: 1024px) {
			width: 100%;
			margin-top: 20px;
			margin-left: 0;
		}
	}
	.label{
		font-size: 12px;
		line-height: 14px;
		color: #7B8199;
		position: relative;
		z-index: 10;
	}
	.value{
		min-width: 100px;
		background: #28D180;
		border-radius: 100px;
		height: 28px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2px 11px;
		font-weight: 700;
		font-size: 24px;
		line-height: 100%;
		color: #F9F9F9;
		margin-top: 15px;
		position: relative;
		z-index: 10;
		&.none{
			min-width: 39px;
			background: #C6CAD3;
			color: #F9F9F9;
		}
	}
	.image{
		position: absolute;
		bottom: 0;
		right: 20px;
		line-height: 0;
	}
`