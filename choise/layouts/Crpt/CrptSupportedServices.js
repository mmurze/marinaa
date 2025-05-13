import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import array from "public/data/supported-services.json"

export default function CrptSupportedServices() {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2><img src="/pic/decor/round-arrow-right.svg" alt="supported by services"/>supported by services</h2></Title>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<span dangerouslySetInnerHTML={{__html: item.icon}}/>
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
		display: flex;
		justify-content: center;
		h2{
			display: flex;
			align-items: center;
		}
		img{
			line-height: 0;
			margin-right: 18px;
			position: relative;
			top: 5px;
			@media only screen and (max-width: 600px) {
				display: none;
			}
		}
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: -50px;
		margin-top: 90px;
		@media only screen and (max-width: 600px) {
			margin-top: 50px;
			overflow-x: auto;
			justify-content: flex-start;
			flex-wrap: nowrap;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
		}
	}
	.item{
		width: calc(100% / 5 - 20px);
		margin-bottom: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		@media only screen and (max-width: 820px) {
			padding: 0 10px;
		}
		@media only screen and (max-width: 600px) {
			width: 200px;
			margin-right: 20px;
			flex: 0 0 auto;
		}
		svg{
			max-width: 100%;
			height: auto;
		}
		span{
			width: 100%;
			height: 50px;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			text-align: center;
			line-height: 0;
			svg{
				fill: #80889C;
				transition: all .3s ease-in-out;
			}
			//&:hover{
			//	svg{
			//		fill: #0285FD;
			//		transition: all .3s ease-in-out;
			//	}
			//}
		}
	}
`