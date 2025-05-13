import styled from "styled-components";
import Image from "next/image";
import GradientButton from "components/Buttons/GradientButton";
import {renderTransactionLink} from "utils/nft";
import Link from "next/link";
export default function ModalNftSuccess({transaction, amount, onClick}) {
	return (
		<Wrapper>
			<div className="image">
				<Image src="/pic/nft/nft-success.png" width={498} height={309.5} alt="Success" priority={true}/>
			</div>
			<div className="title_modal">Success</div>
			<p className="description_token">Transaction Hash of your CHO NFT mint</p>
			<p className="transaction">{renderTransactionLink(transaction)}</p>
			<p className="information">You have successfully minted CHO NFT! See your minted CHO NFT in your <Link href="/profile">profile</Link>.</p>
			<GradientButton onClick={() => onClick(false)}>Done</GradientButton>
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
	.description_token{
		font-size: 16px;
		line-height: 140%;
		color: #7B8199;
		margin-top: 11px;
	}
	.transaction{
		font-weight: 700;
		font-size: 16px;
		line-height: 140%;
	}
	.information{
		font-size: 12px;
		line-height: 140%;
		color: #7B8199;
		max-width: 247px;
		width: 100%;
		margin: 35px auto 0 auto;
		a{
			color: #0285FD;
			text-decoration: underline;
		}
	}
	.gradient_button{
		max-width: 278px;
		width: 100%;
		margin: 20px auto 0 auto;
	}
`
