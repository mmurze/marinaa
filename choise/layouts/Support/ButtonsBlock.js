import styled from "styled-components";

export default function ButtonsBlock({children, count, width = 846, flexDirection = 'row'}){
	return (
		<Wrapper width={width} count={count} flexDirection={flexDirection}>
			<div className="buttons_block_position" >
				{children}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	width: 100%;
	.buttons_block_position{
		display: flex;
		justify-content: flex-start;
		flex-direction: ${props => props.flexDirection};
		flex-wrap: wrap;
		width: 100%;
		max-width: ${props => props.width}px;
		button{
			width: ${props => `calc(100% / ${props.count} - 18px)`};
		}
	}
`
