import styled from "styled-components";
import LoadingAnimation from "components/LoadingAnimation";
import Modal from "components/Modal";
import htmlContent from "helpers/htmlContent";

export default function NftFendLoadingModal({loading, loadingStep, t}) {
	return (
		<Modal width={450} active={loading} close={false}>
			<Wrapper>
				<LoadingAnimation color="#7BF185"/>
				<div className="loading_title">{t.wait}</div>
				{
					loadingStep === 1 ? (
						<div className="loading_content">
							<p>{htmlContent(t.content)}</p>
							<p className="loading_label">{t.label}</p>
						</div>
					) : (
						<div className="loading_content">
							<div className="loading_list">
								<p>{t.text}</p>
								<p className="loading_sub_text">{htmlContent(t.sub_text)}</p>
							</div>
							<p className="loading_label">{t.description}</p>
						</div>
					)
				}
			</Wrapper>
		</Modal>
		
	)
}

const Wrapper = styled.div`
	margin-top: 20px;
	.loading_animation{
		margin-top: 0;
	}
	.loading_title{
		margin-top: 40px;
		font-weight: 700;
		font-size: 24px;
		line-height: 130%;
	}
	.loading_content{
		margin-top: 20px;
		p{
			font-size: 16px;
			line-height: 150%;
			color: #A2A8B7;
			&:last-child{
				margin-bottom: 0;
			}
			strong{
				color: #191B20;
			}
		}
	}
	.loading_label{
		background: #DDDFE4;
		border-radius: 24px;
		margin-top: 30px;
		font-size: 14px;
		line-height: 150%;
		padding: 30px 40px;
		color: #191B20 !important;
	}
	.loading_sub_text{
		margin-top: 20px;
	}
`