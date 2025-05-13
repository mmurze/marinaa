import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import htmlContent from "helpers/htmlContent";

export default function RebrandingLetter({t}) {
	return (
		<Wrapper>
			<CenterBlock width={690}>
				<div className="heading">
					{
						t.heading.map((item, index) =>{
							return(
								<p key={index}>{item}</p>
							)
						})
					}
				</div>
				<div className="letter">
					{
						t.letter.map((item, index) =>{
							return(
								<p key={index}>{htmlContent(item)}</p>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 70px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-content: center;
		p{
			&:first-child{
				font-weight: 700;
				font-size: 20px;
				line-height: 150%;
				@media only screen and (max-width: 600px) {
					font-size: 16px;
					line-height: 150%;
				}
			}
			&:last-child{
				font-size: 20px;
				line-height: 150%;
				color: #80889C;
				text-align: right;
				@media only screen and (max-width: 600px) {
					font-size: 16px;
					line-height: 150%;
				}
			}
		}
	}
	.letter {
		margin-top: 30px;
		height: 590px;
		overflow-y: auto;
		padding-right: 40px;
		@media only screen and (max-width: 600px) {
			height: 60vh;
			padding-right: 20px;
		}
		&::-webkit-scrollbar { width: 5px;}
		&::-webkit-scrollbar-button {  display: none }
		&::-webkit-scrollbar-track {  background-color: #0285FD;}
		&::-webkit-scrollbar-track-piece { background-color: #EEEFF2;}
		&::-webkit-scrollbar-thumb { height: 10px; background-color: #0285FD; border-radius: 10px;}
		&::-webkit-scrollbar-corner { background-color: #0285FD;}
		&::-webkit-resizer { background-color: #0285FD;}
		p{
			font-size: 16px;
			line-height: 150%;
			color: #80889C;
			margin: 20px 0;
			&:first-child{
				margin: 0 0 20px 0;
			}
			&:last-child{
				margin: 20px 0 0 0;
			}
		}
	}
`