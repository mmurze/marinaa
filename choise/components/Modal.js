import styled from "styled-components";

export default function Modal({children, active, onCallBack, close = true, width = 420, className, background = "#F7F7F7", padding = 30}) {
	
	return (
		active ? (
			<Wrapper
				padding={padding}
				background={background}
				width={width}
			>
				<div className={`modal ${className ? className : ""}`}>
					{close ? (
						<button type="button" className="close_modal" onClick={() => onCallBack(false)}>
							<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6.48949 5.58574L11.4395 0.635742L12.8535 2.04974L7.90349 6.99974L12.8535 11.9497L11.4395 13.3637L6.48949 8.41374L1.53949 13.3637L0.125488 11.9497L5.07549 6.99974L0.125488 2.04974L1.53949 0.635742L6.48949 5.58574Z"/>
							</svg>
						</button>
					) : null}
					{children}
				</div>
				<div onClick={() => onCallBack(false)} className="overlay"/>
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 99999;
	display: flex;
	align-items: center;
	justify-content: center;
	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, .8);
	}
	.modal {
		background: ${p => p.background};
		border-radius: 40px;
		max-width: ${p => p.width}px;
		width: calc(100% - 40px);
		padding: ${p => p.padding}px;
		position: relative;
		z-index: 10;
		overflow-y: auto;
		max-height: 90vh;
		::-webkit-scrollbar { visibility: hidden; display: none;}
		@media only screen and (max-width: 600px) {
			padding: 30px 20px;
			border-radius: 15px;
		}
	}
	.close_modal {
		position: absolute;
		width: 30px;
		height: 30px;
		right: 30px;
		top: 30px;
		background: #E4E4E4;
		line-height: 0;
		border-radius: 50%;
		transition: all .3s ease-in-out;
		z-index: 30;
		@media only screen and (max-width: 600px) {
			right: 20px;
			top: 20px;
		}
		svg {
			fill: #191B20;
			transition: all .3s ease-in-out;
		}
		&:hover {
			transition: all .3s ease-in-out;
			background: #1A1B20;
			svg{
				fill: #F9F9F9;
				transition: all .3s ease-in-out;
			}
		}
	}
`