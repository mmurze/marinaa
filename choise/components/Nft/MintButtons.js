import styled from "styled-components";

export default function MintButtons({total, onClick, value}) {
	const mintButtons = [1, 3, 5, 10, 20]
	return (
		<Wrapper>
			{
				mintButtons.map((item, index) => {
					return (
						<button
							disabled={process.env.TOTAL_MINT - total < item}
							className={value === item ? "active" : ""}
							onClick={() => onClick(item)}
							key={index}>{item}</button>
					)
				})
			}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 310px;
	width: 100%;
	margin-top: 23px;
	button{
		width: 54px;
		height: 54px;
		border-radius: 50%;
		font-weight: 700;
		font-size: 18px;
		line-height: 120%;
		border: 1px solid #F9F9F9;
		&:disabled{
			cursor: default;
			opacity: .3;
		}
		&:hover{
			background: rgba(255, 255, 255, 0.4);
		}
		&.active{
			background: #FFFB1F;
			border: 1px solid #FFFB1F;
		}
	}
`