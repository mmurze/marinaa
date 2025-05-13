import styled from "styled-components";
import Modal from "components/Modal";
import htmlContent from "helpers/htmlContent";
import Image from "next/image";
export default function NftFendErrorModal({error, onClick, t}) {
	return (
		<Modal width={450} active={error} onCallBack={onClick}>
			<Wrapper>
				<div className="error_image">
					<Image src="/pic/fend/fend-modal-error.png" width={322.5} height={192} priority={true} alt="Oooooppsss..."/>
				</div>
				<div className="error_title">{t.ops}</div>
				<p className="error_description">{htmlContent(error)}</p>
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	.error_title{
		font-weight: 700;
		font-size: 24px;
		line-height: 130%;
	}
	.error_description{
		font-size: 16px;
		line-height: 150%;
		color: #A2A8B7;
		max-width: 292px;
		width: 100%;
		margin: 20px auto 0 auto;
	}
`
