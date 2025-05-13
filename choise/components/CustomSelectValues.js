import styled from "styled-components";
import {useState} from "react";
import useClickOutside from "helpers/useClickOutside";

export default function CustomSelectValues({array, value, onClick, label, width = "100%"}) {
	const ref = useClickOutside(() => setVisible(false));
	const [visible, setVisible] = useState(false)
	const onHandleClick = (value) => {
		onClick(value)
		setVisible(false)
	}
	return (
		<Wrapper ref={ref} width={typeof width === "number" ? `${width}px` : width} className={`custom_select_values ${visible ? "visible" : ""}`}>
			{label && <div className="select_label">{label}</div>}
			<div className="select_list_block">
				<button type="button" onClick={() => setVisible(!visible)}>
					{value}
					<img src="/pic/value-select-rib.svg" alt={value}/>
				</button>
				<div className={`select_value_list ${visible ? "visible" : ""}`}>
					<ul>
						{
							array.map((item, index) => {
								return(
									<li
										className={item.value === value ? "active" : ""}
										key={index}
										onClick={() => onHandleClick(item.value)}
									>{item.title}
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
	max-width: ${p => p.width};
	width: 100%;
	position: relative;
	z-index: 10;
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
		background: #F6F7F8;
		border-radius: 10px;
		height: 44px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		justify-content: space-between;
		padding: 0 20px;
		text-transform: capitalize;
		img{
			transition: .2s ease-in-out;
		}
	}
	.select_value_list{
		position: absolute;
		top: 49px;
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
			border: 1px solid #DDDFE4;
			border-radius: 10px;
			overflow: hidden;
		}
		li{
			padding: 10px 20px;
			background: #F9F9F9;
			cursor: pointer;
			&.active{
				background: #F6F7F8;
			}
			&:hover{
				background: #F6F7F8;
			}
		}
	}
`
