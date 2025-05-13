import styled from "styled-components";

export default function ChoExchangesStoreButtons() {
	return (
		<Wrapper className="store_list">
			<a className="store_button" href="https://crypterium.onelink.me/jtmZ/buycho?app_screen=buy-crypto/cho" target="_blank" rel="noreferrer">
				<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.7879 13.0567C16.7602 10.0499 19.313 8.58712 19.4297 8.51902C17.984 6.46382 15.7431 6.18301 14.9556 6.16062C13.0735 5.96751 11.2479 7.25866 10.2891 7.25866C9.31123 7.25866 7.83484 6.17928 6.24363 6.211C4.19601 6.24179 2.28044 7.39766 1.22984 9.19258C-0.938342 12.8524 0.678703 18.2306 2.75598 21.1889C3.7951 22.6377 5.00932 24.2554 6.59862 24.1984C8.15347 24.1359 8.73426 23.2319 10.6106 23.2319C12.4697 23.2319 13.0151 24.1984 14.636 24.1621C16.3047 24.1359 17.3553 22.7067 18.3581 21.2449C19.5589 19.5843 20.0411 17.9489 20.0603 17.8649C20.021 17.8519 16.8195 16.6605 16.7879 13.0567Z"/>
					<path d="M13.7261 4.21457C14.5623 3.1949 15.1345 1.80766 14.9757 0.399902C13.7653 0.452145 12.2516 1.2162 11.3799 2.21348C10.6087 3.09228 9.91978 4.53269 10.0977 5.88728C11.4574 5.98617 12.8534 5.21838 13.7261 4.21457Z"/>
				</svg>
			</a>
			<a className="store_button" href="https://crypterium.onelink.me/jtmZ/buycho?app_screen=buy-crypto/cho" target="_blank" rel="noreferrer">
				<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M3.55006 1.09058L16.6317 8.3382L12.8495 12.0259L1.6875 1.14623C2.10277 0.720609 2.77996 0.669317 3.55006 1.09058ZM0.599609 3.04691C0.599609 2.5056 0.751837 2.08762 1.01488 1.81914L1.0798 1.75585L12.1768 12.5711V12.8265L1.0798 23.6417L1.01488 23.5828C0.751837 23.3143 0.599609 22.8963 0.599609 22.355V3.04691ZM13.5166 12.8257L17.2115 16.4326L17.2988 16.3857L21.6799 13.9596C22.9302 13.2655 22.9302 12.1305 21.6799 11.4408L17.2988 9.01036L17.216 8.96343L13.5166 12.5703V12.8257ZM16.6317 17.0577L12.8495 13.3701L1.6875 24.2541C2.10277 24.6797 2.77996 24.731 3.55006 24.3054L16.6317 17.0577Z"/>
				</svg>
			</a>
			<a href="https://crypterium.onelink.me/jtmZ/buycho?app_screen=buy-crypto/cho" className="buy_button" target="_blank" rel="noreferrer">Buy now</a>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	z-index: 10;
	.store_button{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		line-height: 0;
		background: #F9F9F9;
		border-radius: 50%;
		width: 56px;
		height: 56px;
		margin-right: 10px;
		&:hover{
			background: #FFFB1F;
		}
		svg{
			fill: #191B20;
		}
	}
	.buy_button{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #FFFB1F;
		height: 56px;
		padding: 16px 40px;
		border-radius: 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		&:hover{
			background: #F9F9F9;
		}
	}
`