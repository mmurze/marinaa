import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function HelpContent({children}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content_block">
					{children}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 70px;
	@media only screen and (max-width: 600px) {
		margin-top: 40px;
	}
	.content_block{
		max-width: 820px;
		width: 100%;
	}
	.title{
		max-width: 1024px;
		width: 100%;
		h1{
			font-size: 70px;
			line-height: 120%;
			@media only screen and (max-width: 600px) {
				font-size: 46px;
			}
		}
	}
	.content{
		margin-top: 40px;
		font-size: 18px;
		line-height: 150%;
	}
	.wysiwyg-text-align-center{
		display: flex;
		justify-content: center;
		margin: 20px 0;
	}
	ul{
		padding-left: 15px;
		list-style: disc;
		margin: 20px 0;
		li{
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	p{
		margin: 15px 0;
	}
	a{
		color: #0285FD;
		text-decoration: underline;
	}
	table{
		width: 100% !important;
		td{
			padding: 10px;
		}
	}
`