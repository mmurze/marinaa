import styled from "styled-components";

export default function Input({type = "text", onChange, disabled = false, required = false, value, error = null, placeholder = ""}) {
	return (
		<Wrapper className={`form_input ${error ? "error" : ""}`}>
			<input
				value={value}
				type={type}
				onChange={(e) => onChange(e.target.value)}
				disabled={disabled}
				required={required}
				onWheel={e => e.currentTarget.blur()}
				placeholder={placeholder}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-bottom: 15px;
	&:last-child{
		margin-bottom: 0;
	}
	&.error{
		input{
			border: 1px solid #FF5252;
			background: #FFEBEE;
			transition: color 0.3s ease-in-out;
		}
	}
	input{
		background: #F9F9F9;
		border-radius: 500px;
		height: 56px;
		padding: 14px 32px;
		border: 1px solid #F9F9F9;
		transition: color 0.3s ease-in-out;
		font-size: 16px;
		line-height: 28px;
		letter-spacing: -0.03em;
	}
`