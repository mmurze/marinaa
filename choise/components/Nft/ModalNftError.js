import styled from "styled-components";
import Image from "next/image";
import GradientButton from "components/Buttons/GradientButton";
import {renderTransactionLink} from "utils/nft";

export default function ModalNftError({error, transaction, onClick}) {
	return (
		<Wrapper>
			<div className="image">
				<Image src="/pic/nft/nft-error.png" width={498} height={309.5} alt="Error" priority={true}/>
			</div>
			<div className="title_modal">Error</div>
			<div className="heading">Something went wrong</div>
			<div className="sub_heading">try again in a few minutes</div>
			{transaction && (
				<p className="transaction">{renderTransactionLink(transaction)}</p>
			)}
			{error && <p className="error_text">{error}</p>}
			<GradientButton onClick={() => onClick(false)}>Try again</GradientButton>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	text-align: center;
	letter-spacing: -0.03em;
	.title_modal{
		font-size: 24px;
		line-height: 120%;
		font-weight: bold;
		margin-top: -60px;
	}
	.heading{
		font-weight: 700;
		font-size: 24px;
		line-height: 120%;
		margin-top: 25px;
	}
	.gradient_button{
		max-width: 278px;
		width: 100%;
		margin: 20px auto 0 auto;
	}
	.sub_heading, .error_text{
		font-size: 16px;
		line-height: 140%;
		color: #7B8199;
	}
	.error_text{
		margin-top: 20px;
		font-size: 12px;
		overflow-x: auto;
	}
	.transaction{
		margin-top: 10px;
		font-weight: 700;
		font-size: 16px;
		line-height: 140%;
	}
`
