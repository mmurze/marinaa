import styled from "styled-components";

export default function ValuesRange({array, value, onClick}) {
	return (
		<Wrapper className="values_range" size={array.length}>
			<div className="line">
				{
					array.map((item, index) => {
						return (
							<span
								onClick={() => onClick(item)}
								className={value >= item ? "active" : ""}
								key={index}>{item}</span>
						)
					})
				}
			</div>
			<ul className="values_list">
				{
					array.map((item, index) => {
						return (
							<li
								className={value === item ? "active" : ""}
								key={index}
								onClick={() => onClick(item)}>
								<span/>
								<p>{item}%</p>
							</li>
						)
					})
				}
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.values_list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20px;
	}
	p{
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: #585F71;
		transition: all .3s ease-in-out;
	}
	li{
		cursor: pointer;
		width: calc(100% / ${p => p.size});
		text-align: center;
		&.active{
			p{
				color: #fff;
				transition: all .3s ease-in-out;
			}
		}
	}
	.line{
		background: #393D49;
		border-radius: 16px;
		width: 100%;
		height: 6px;
		position: relative;
		display: flex;
		span{
			height: 100%;
			font-size: 0;
			border-radius: 16px;
			width: calc(100% / ${p => p.size});
			transition: all .3s ease-in-out;
			&.active{
				background: #5CEE9C;
				transition: all .3s ease-in-out;
			}
		}
	}
`