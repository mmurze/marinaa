import styled from "styled-components";

export default function PictureComponent({t}) {
	return (
		<Wrapper className="component">
			<div className="header">
				{
					t.header.map((item, index) => {
						return(
							<p key={index} className="header_text">{item.title}</p>
						)
					})
				}
			</div>
			{
				t.table.map((item, index)=>{
					return(
						<div className="line" key={index}>
							<p className="header_text column">{item.date}</p>
							<PredictionItem value={item.prediction}>
								<p className="data">Bullish Strength {item.prediction}%</p>
								<span/>
							</PredictionItem>
							<p className="profit">{item.profit > 0 ? "+" : ""}{item.profit}</p>
						</div>
					)
				})
			}
		</Wrapper>
	)
}
const PredictionItem= styled.div`
	position: relative;
	width: 180px;
	border-left: 4px solid #7EE3B3;
	padding: 0 10px;
	p{
		position: relative;
		left: 0;
		z-index: 10;
		width: 160px;
		font-weight: 500;
		font-size: 18px;
		line-height: 26px;
		letter-spacing: -0.03em;
	}
	span{
		position: absolute;
		width: ${props => props.value}%;
		background: #EEEFF2;
		height: 100%;
		top: 0;
		left: 0;
	}
`

const Wrapper = styled.div`
	max-width: 420px;
	.header{
		display: flex;
		justify-content: space-between;
		p{
			&:nth-child(1) {
				width: 55px;
			}
			&:nth-child(2) {
				position: relative;
				left: 0;
				padding: 0 10px;
				width: 180px;
			}
			&:nth-child(3) {
				//padding: 0 10px;
				width: 100px;
				text-align: center;
			}
		}
	}
	.header_text{
		font-size: 14px;
		line-height: 16px;
		letter-spacing: -0.3px;
		color: #7B8199;
		&.column{
			width: 55px;
		}
	}
	.line{
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		height: 30px;
		align-items: center;
		.profit{
			font-weight: 500;
			font-size: 18px;
			line-height: 26px;
			letter-spacing: -0.03em;
			border-left: 4px solid #7EE3B3;
			background: #EEEFF2;
			width: 100px;
			text-align: center;
		}
	}
`