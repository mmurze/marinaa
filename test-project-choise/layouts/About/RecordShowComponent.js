import styled from "styled-components";
import Button from "components/Button";
import {useState} from "react";
export default function RecordShowComponent({t}) {
	const [isYellow, SetIsYellow] = useState(true)
	
	return (
		<Wrapper className="component">
			<div className="profit">
				<p className="profit_description ">{t.description}</p>
				<div className="profit_numbers">
					<div className="image">
						<img src="/pic/about/triangle.svg" alt="triangle"/>
					</div>
					<p className="numbers">216.20%</p>
					<div className="buttons" onClick={() => {SetIsYellow(!isYellow)}}>
						<Button className={`first ${isYellow ? 'yellow_bg': 'gray_bg'}`}>24H</Button>
						<Button className={`second ${!isYellow ? 'yellow_bg': 'gray_bg'}`}>1M</Button>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.profit{
		background: #F6F7F8;
		padding: 15px 25px;
		border-radius: 10px;
		width: 390px;
		@media only screen and (max-width: 600px) {
			margin: 0 auto;
		}
		.profit_description{
			font-weight: 400;
			font-size: 12px;
			line-height: 14px;
			letter-spacing: -0.3px;
			color: #7B8199;
		}
		.profit_numbers{
			margin-top: 10px;
			display: flex;
			.numbers{
				font-weight: 700;
				font-size: 36px;
				line-height: 42px;
				letter-spacing: -0.03em;
				margin: auto 35px auto 0;
			}
			.image{
				margin-right: 10px;
				padding-top: 4px;
			}
		}
		
		.buttons{
			display: flex;
			width: 150px;
			.first{
				border-radius: 40px 0 0 40px;
			}
			.second{
				border-radius: 0 40px 40px 0;
			}
			.yellow_bg{
				background: #FFFB1F;
			}
			.gray_bg{
				background: #DDDFE4;
			}
		}
	}
`
