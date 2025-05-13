import styled from "styled-components";

export default function BorderTextarea({value = '', placeholder, onChange, name, height = 220}) {
	return (
		<BorderTextareaWrapper height={height}>
			<textarea
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
				id=""/>
		</BorderTextareaWrapper>
	)
}

const BorderTextareaWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 40px;
	textarea{
		resize: none;
		background: #F9F9F9;
		border: 1px solid #E0F0FF;
		box-sizing: border-box;
		height: ${props => props.height}px;
		box-shadow: 0 0 50px rgba(41, 146, 250, 0.08);
		border-radius: 20px;
		padding: 20px;
		font-size: 18px;
		line-height: 23px;
		width: 100%;
		transition: all .3s ease-in-out;
		&:focus{
			transition: all .3s ease-in-out;
			border: 1px solid #2992FA;
		}
	}
`
