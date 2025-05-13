import styled from "styled-components";
import {useState} from "react";
export default function AssessComponent({t}) {
	const [total, setTotal] = useState("40")
	return (
		<Wrapper total={total} className="component">
			<div className="sells">
				<div className="strong">
					<img src="/pic/about/circle_red.svg" alt="dot"/>
					<p className="name">{t.sell}</p>
				</div>
				<input className="percent"
				       onWheel={e => e.currentTarget.blur()}
				       type="number"
				       value={total}
				       onChange={(e) => setTotal(e.target.value)}
				/>
				<div className="strong">
					<p className="name">{t.buy}</p>
					<img src="/pic/about/circle_green.svg" alt="circle"/>
				</div>
			</div>
			<div className="line_block">
				<span className="total_line"/>
				<div className="line">
					<span className="dot"/>
				</div>
				<div className="fill_line">
					<span/>
					<span/>
					<span/>
					<span/>
					<span/>
					<span/>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.sells, .line_block{
		@media only screen and (max-width: 600px) {
			margin: 0 auto;
		}
	}
	.line_block{
		margin-top: 20px;
		position: relative;
		max-width: 450px;
		width: 100%;
		border-radius: 20px;
		overflow: hidden;
	}
	.line{
		height: 10px;
		width: 100%;
		background: #EEEFF2;
	}
	.fill_line{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		span{
			width: calc(100%/6);
			display: flex;
			justify-content: center;
			&:before{
				content: "";
				width: 2px;
				height: 10px;
				background: #fff;
			}
		}
	}
	.dot{
		position: absolute;
		height: 10px;
		width: 10px;
		background: black;
		border-radius: 50%;
		left: 50%;
		transform: translateX(-50%);
	}
	.total_line{
		position: absolute;
		top: 0;
		left: 50%;
		width: ${p => p.total/2}%;
		height: 100%;
		background: #28D180;
		border-radius: 37px;
		transition: all .3s ease-in-out;
	}
	.sells{
		display: flex;
		justify-content: space-between;
		max-width: 450px;
		width: 100%;
		.strong{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}
		.name{
			padding: 0 10px;
		}
		.percent{
			border: 1px solid #28D180;
			border-radius: 8px;
			color: #28D180;
			width: 115px;
			height: 35px;
			text-align: center;
			padding: 5px 0;

			font-weight: 700;
			font-size: 22px;
			line-height: 26px;
		}
	}
`