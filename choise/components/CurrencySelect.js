import styled from "styled-components";
import {useState} from "react";
import useClickOutside from "helpers/useClickOutside";

export default function CurrencySelect({array, value, onClick, placeholder}) {
	const ref = useClickOutside(() => setVisible(false));
	const [visible, setVisible] = useState(false)
	const onHandleClick = (value) => {
		onClick(value)
		setVisible(false)
	}
	return (
		<Wrapper ref={ref} className={`form_input custom_select_values ${visible ? "visible" : ""}`}>
			<div className="select_list_block">
				<button type="button" onClick={() => setVisible(!visible)}>
					{value ? value : placeholder}
					<img src="/pic/drop-modal-rib.svg" alt={value}/>
				</button>
				<div className={`select_value_list ${visible ? "visible" : ""}`}>
					<ul>
						{
							array.map((item, index) => {
								return(
									<li
										className={item === value ? "active" : ""}
										key={index}
										onClick={() => onHandleClick(item)}
									>
										{item}
										{item === value ? <img src="/pic/checked.svg" alt="checked"/> : null}
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
	position: relative;
	z-index: 10;
	margin-bottom: 15px;
	&:last-child{
		margin-bottom: 0;
	}
	&.visible{
		button img{
			transform: rotate(-180deg);
			transition: .2s ease-in-out;
		}
	}
	.select_label{
		font-size: 16px;
		line-height: 120%;
		color: #7B8199;
		margin-bottom: 10px;
	}
	.select_list_block{
		position: relative;
	}
	button{
		height: 56px;
		font-size: 16px;
		line-height: 28px;
		justify-content: space-between;
		background: #1A1C21;
		border-radius: 40px;
		color: #fff;
		padding: 14px 32px;
		img{
			transition: .2s ease-in-out;
		}
	}
	.select_value_list{
		position: absolute;
		top: 60px;
		width: 100%;
		opacity: 0;
		visibility: hidden;
		transition: .2s ease-in-out;
		&.visible{
			opacity: 1;
			visibility: visible;
			transition: .2s ease-in-out;
		}
		ul{
			overflow: hidden;
			border-radius: 20px;
		}
		li{
			padding: 0 32px;
			background: #191B20;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 45px;
			border-bottom: 1px solid #272A32;
			&:last-child{
				border-bottom: none;
			}
		}
	}
`
