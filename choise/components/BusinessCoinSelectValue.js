import styled from "styled-components";
import numberFormat from "helpers/numberFormat";
import {useEffect, useState} from "react";
import useClickOutside from "helpers/useClickOutside";

export default function BusinessCoinSelectValue({title = null, max = null, value, coin, onChange, array, changeCoin, min = 0}) {
	const ref = useClickOutside(() => setVisible(false));
	const [visible, setVisible] = useState(false)

	const onHandleClick = (coinItem) => {
		changeCoin(coinItem)
		setVisible(false)
	}
	useEffect(() => {
		if (value < 0) onChange("")
	}, [value])
	return (
		<Wrapper className="coin_select_value" ref={ref}>
			{title && (
				<div className="select_heading">
					<p className="select_title">{title}</p>
					{max && <p className="select_max">Min {numberFormat(min)} max {numberFormat(max)}</p>}
				</div>
			)}
			<div className="input_block">
				{
					max ? (
						<input
							className={(value > max || value < min) ? "error" : ""}
							type="number" value={value} required={true} onChange={e => onChange(e.target.value)}
						/>
					) : (
						<input
							type="number" value={value} required={true} onChange={e => onChange(e.target.value)}
						/>
					)
				}
				<button className="drop_button" onClick={() => setVisible(!visible)}>
					<span><img src={`/pic/coins/${coin.toLowerCase()}.svg`} alt=""/>{coin}</span>
					<img className={`select_drop ${visible ? "visible" : ""}`} src="/pic/select-drop.svg" alt={coin}/>
				</button>
				<div className={`drop ${visible ? "visible" : ""}`}>
					<ul>
						{
							array.map((item, index) => {
								return (
									<li
										key={index} onClick={() => onHandleClick(item)}>
										<span><img src={`/pic/coins/${item.toLowerCase()}.svg`} alt=""/>{item}</span>
										{item === coin && <img src="/pic/active-select.svg" alt={`${item} Active`}/>}
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	.select_heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		p{
			font-weight: 450;
			font-size: 14px;
			line-height: 100%;
		}
	}
	.select_title{
		color: #FFFFFF;
	}
	.select_max{
		color: #A2A8B7;
	}
	.input_block{
		margin-top: 10px;
		position: relative;
		input{
			background: #1A1C21;
			border: 1px solid #1A1C21;
			border-radius: 500px;
			padding: 14px 140px 14px 20px;
			height: 56px;
			font-weight: 500;
			font-size: 16px;
			line-height: 28px;
			color: #fff;
			transition: all .3s ease-in-out;
			position: relative;
			z-index: 20;
			&.error{
				color: #FF6464;
				border: 1px solid #FF6464;
				transition: all .3s ease-in-out;
			}
		}
	}
	.drop_button{
		position: absolute;
		top: 0;
		right: 0;
		padding-right: 25px;
		width: 120px;
		justify-content: space-between;
		text-align: left;
		height: 56px;
		font-weight: 500;
		font-size: 16px;
		line-height: 28px;
		color: #fff;
		z-index: 20;
		span{
			display: flex;
			align-items: center;
			img{
				margin-right: 5px;
			}
		}
	}
	.drop{
		position: absolute;
		top: 61px;
		width: 100%;
		z-index: 10;
		display: none;
		&.visible{
			display: block;
		}
		ul{
			background: #191B20;
			border-radius: 20px;
			width: 100%;
			overflow: hidden;
			padding: 0 20px;
		}
		li{
			border-bottom: 1px solid #272A32;
			padding: 15px 0;
			background: #191B20;
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-weight: 500;
			font-size: 16px;
			line-height: 28px;
			span{
				display: flex;
				align-items: center;
				img{
					margin-right: 5px;
				}
			}
			&:last-child{
				border-bottom: none;
			}
		}
	}
	.select_drop{
		transition: all .3s ease-in-out;
		&.visible{
			transform: rotate(180deg);
			transition: all .3s ease-in-out;
		}
	}
`
