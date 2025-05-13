import styled from "styled-components";

export default function BorderInput({value = '', onChange, placeholder, width = 420, required = false}){
	return (
		<BorderInputWrapper className="border_button_block" width={width}>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
			/>
			<RequiredInput>{required ? 'required' : 'optional' }</RequiredInput>
		</BorderInputWrapper>
	)
}

const RequiredInput = styled.div`
	position: absolute;
	right: 20px;
	height: 100%;
	display: flex;
	align-items: center;
	font-size: 14px;
	line-height: 24px;
	color: #7B8199;
`

const BorderInputWrapper = styled.div`
	display: flex;
	justify-content: center;
	max-width: ${props => props.width}px;
	width: 100%;
	margin: 0 auto;
	padding-top: 40px;
	position: relative;
	input{
		background: #F9F9F9;
		border: 1px solid #E0F0FF;
		box-sizing: border-box;
		box-shadow: 0 0 50px rgba(41, 146, 250, 0.08);
		border-radius: 20px;
		padding: 20px 90px 20px 20px;
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
