import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function RebrandingDescription({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="description_block">
					<div className="image">
						<Image src="/pic/rebranding/vladimir.png" width={228} height={228} priority={true} alt="Vladimir Gorbunov"/>
						<p className="name">{t.name}</p>
						<p className="label">{t.label}</p>
					</div>
					<div className="content">
						<div className="rib"><img src="/pic/rebranding/rib.svg" alt="Our mission has broadened"/></div>
						<p className="description">{t.description}</p>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: -170px;
	position: relative;
	z-index: 40;
	.description_block{
		background: #0285FD url("/pic/rebranding/description-bg.svg") 90% bottom no-repeat;
		border-radius: 24px;
		padding: 50px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		@media only screen and (max-width: 600px) {
			padding: 40px 30px;
		}
	}
	.description{
		font-weight: 500;
		font-size: 38px;
		line-height: 120%;
		color: #F9F9F9;
		margin-top: 66px;
		@media only screen and (max-width: 768px) {
			margin-top: 20px;
		}
		@media only screen and (max-width: 600px) {
			font-size: 26px;
			line-height: 120%;
			text-align: center;
		}
	}
	.image{
		width: 228px;
		@media only screen and (max-width: 768px) {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			span{
				display: block;
				width: 200px !important;
				height: 200px !important;
			}
		}
	}
	.content{
		width: calc(100% - 228px);
		padding-left: 130px;
		@media only screen and (max-width: 820px) {
			padding-left: 40px;
		}
		@media only screen and (max-width: 768px) {
			width: 100%;
			padding-left: 0;
			margin-top: 40px;
		}
	}
	.name{
		font-weight: 500;
		font-size: 20px;
		line-height: 100%;
		color: #F9F9F9;
		margin-top: 20px;
	}
	.label{
		margin-top: 10px;
		font-size: 20px;
		line-height: 100%;
		color: #95CCFE;
	}
	.rib{
		@media only screen and (max-width: 768px) {
			display: flex;
			justify-content: center;
		}
	}
`