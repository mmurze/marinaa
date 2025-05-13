import styled from "styled-components";
import {useState} from "react";
import useClickOutside from "helpers/useClickOutside";

export default function CustomSelect({array, value, onClick}) {
	const ref = useClickOutside(() => setVisible(false));
	const [visible, setVisible] = useState(false)

	const renderValue = () => {
		return array.find(item => item === value)
	}

	const onHandleClick = (e) => {
		onClick(e)
		setVisible(false)
	}

	return (
		<Wrapper ref={ref} className="custom_select">
			<button
				type="button"
				onClick={() => setVisible(!visible)}>{value ? renderValue() : "Choose a value"}
			</button>
			<div className={`drop ${visible ? "active" : ""}`}>
				<ul>
					{
						array.map((item, index) => {
							return <li className={value === item ? "active" : ""} onClick={() => onHandleClick(item)} key={index}>{item}</li>
						})
					}
				</ul>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	z-index: 10;
	button{
		height: 45px;
		background: #191B20;
		color: #F9F9F9;
		border-radius: 5px;
	}
	.drop{
		position: absolute;
		width: 100%;
		top: 50px;
		left: 0;
		opacity: 0;
		visibility: hidden;
		z-index: 10;
		ul{
			background: #F9F9F9;
			border-radius: 5px;
			border: 1px solid #ebebeb;
		}
		li{
			padding: 10px 20px;
			border-bottom: 1px solid #ebebeb;
			cursor: pointer;
			&.active{
				background: #191B20;
				color: #F9F9F9;
				&:hover{
					background: #191B20;
				}
			}
			&:hover{
				background: #ebebeb;
			}
		}
		&.active{
			opacity: 1;
			visibility: visible;
		}
	}
`
