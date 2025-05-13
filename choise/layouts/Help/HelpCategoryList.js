import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function HelpCategoryList({children}) {
	return (
		<Wrapper>
			<CenterBlock>
				{children}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 70px;
	.list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 60px;
		margin-bottom: -20px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
		}
	}
	.item{
		width: calc(50% - 10px);
		margin-bottom: 20px;
		position: relative;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
		a{
			display: flex;
			align-items: center;
			justify-content: space-between;
			border: 1px solid #EEEFF2;
			border-radius: 16px;
			font-size: 20px;
			line-height: 120%;
			padding: 30px 25px;
			transition: all 0.2s ease-in-out;
			@media only screen and (max-width: 600px) {
				font-size: 16px;
				line-height: 120%;
				padding: 20px;
			}
			span{
				width: calc(100% - 35px);
				padding-right: 20px;
			}
			&:hover{
				background: #191B20;
				color: #F9F9F9;
				transition: all 0.2s ease-in-out;
			}
		}
	}
`