import styled from "styled-components";
import Modal from "components/Modal";
import GradientButton from "components/Buttons/GradientButton";
import numberFormat from "helpers/numberFormat";
import moment from "moment";
import htmlContent from "helpers/htmlContent";

export default function NftFendVerifyModal({active, onCallBack, onSubmit, amount, period, apy, coin ,t}) {
	return (
		<Modal width={450} active={active} onCallBack={onCallBack}>
			<Wrapper>
				<div className="verify_title">{t.title}</div>
				<div className="verify_list">
					{
						t.array.map((item, index) => {
							return(
								<p key={index}>item</p>
							)
						})
					}
				</div>
				<ul className="verify_steps">
					{
						t.steps.map((item, index) =>{
							return(
								<li key={index}>{htmlContent(item)}</li>
							)
						})
					}
				</ul>
				<div className="verify_content">
					<div className="verify_item">
						<p>{t.amount}</p>
						<p>{numberFormat(amount)} {coin}</p>
					</div>
					<div className="verify_item">
						<p>{t.lock}</p>
						<p className="lock_period">{moment(new Date()).add(period, "months").format("MMM, DD YYYY")} <span>({period} {t.months})</span></p>
					</div>
					<div className="verify_item">
						<p>{t.APY}</p>
						<p>{apy}%</p>
					</div>
				</div>
				<GradientButton onClick={onSubmit}>{t.verify}</GradientButton>
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	text-align: left;
	.verify_title{
		text-align: left;
		font-size: 24px;
		line-height: 130%;
	}
	.verify_list{
		margin-top: 20px;
		p{
			font-size: 16px;
			line-height: 150%;
			color: #A2A8B7;
			margin-bottom: 15px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.verify_steps{
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
		position: relative;
		&:before{
			content: url("/pic/fend/verify-step-arrow.svg");
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		li{
			width: calc(50% - 22px);
			background: #F6F7F8;
			border-radius: 16px;
			padding: 15px 20px;
			span{
				font-size: 14px;
				line-height: 150%;
				color: #80889C;
			}
			p{
				font-weight: 700;
				font-size: 16px;
				line-height: 150%;
			}
		}
	}
	.verify_content{
		margin-top: 40px;
	}
	.verify_item{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		&:last-child{
			margin-bottom: 0;
		}
		p{
			font-size: 16px;
			line-height: 150%;
			width: calc(50% - 5px);
			&:first-child{
				color: #80889C;
			}
			&:last-child{
				text-align: right;
				font-weight: 500;
			}
		}
	}
	.gradient_button{
		border: none;
		margin-top: 20px;
	}
	.lock_period{
		span{
			@media only screen and (max-width: 600px) {
				display: block;
			}
		}
	}
`
