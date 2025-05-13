import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import htmlContent from "helpers/htmlContent";

export default function SeedrsPerksTables({t}) {
	const checkValue = (value) => {
		if (value) {
			return <img src="/pic/seedrs-perks/table-yes.svg" alt="there is"/>
		} else return <img src="/pic/seedrs-perks/table-none.svg" alt="nope"/>
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h1>{t.title}</h1></Title>
				<div className="list">
					<ul className="labels_list">
						<li className="hide_label">{t.hide_label}</li>
						{
							Object.keys(t.label).map(function(key, index) {
								return (
									key === "cashback_for" ? (
										<li className="cashback_item" key={index}>
											<span>{htmlContent(t.label[key])}</span>
											<ul className="icon_list">
												<li><img src="/pic/seedrs-perks/cashback-icon-1.svg" alt="airbnb"/></li>
												<li><img src="/pic/seedrs-perks/cashback-icon-2.svg" alt="booking"/></li>
												<li><img src="/pic/seedrs-perks/cashback-icon-3.svg" alt="netflix"/></li>
												<li><img src="/pic/seedrs-perks/cashback-icon-4.svg" alt="spotify"/></li>
											</ul>
											<p>{t.description}</p>
										</li>
									) : (
										<li key={index}>
											<span>{htmlContent(t.label[key])}</span>
										</li>
									)
								)
							})
						}
					</ul>
					<div className="cards_list">
						{
							t.array.map((item, index) => {
								return (
									<ul key={index}>
										<li><span className="heading_item">{item.title}</span></li>
										<li>
											<span className="mobile_label">{htmlContent(t.label.amount_invested)}</span>
											<span className="value_item">{item.amount_invested}</span>
										</li>
										<li>
											<span className="mobile_label">{htmlContent(t.label.increase_fixes_deposits)}</span>
											<span className="value_item">{item.increase_fixes_deposits ? item.increase_fixes_deposits : <img src="/pic/seedrs-perks/table-none.svg" alt="nope"/>}</span>
										</li>
										<li>
											<span className="mobile_label">
												{htmlContent(t.label.cho_cashback)}
											</span>
											<span className="value_item">{item.cho_cashback}</span>
										</li>
										<li>
											<span className="mobile_label">{htmlContent(t.label.mystery_gift)}</span>
											<span className="value_item">{checkValue(item.mystery_gift)}</span>
										</li>
										<li>
											<span className="mobile_label">{htmlContent(t.label.investor_badge)}</span>
											<span className="value_item">{checkValue(item.investor_badge)}</span>
										</li>
										<li>
											<span className="mobile_label">{htmlContent(t.label.metal_cards)}</span>
											<span className="value_item">{checkValue(item.metal_cards)}</span>
										</li>
										<li>
											<span className="mobile_label">{htmlContent(t.label.vip_support)}</span>
											<span className="value_item">{checkValue(item.vip_support)}</span>
										</li>
										<li className="cashback_value_item">
											<span className="mobile_label cashback_item">
												{htmlContent(t.label.cashback_for)}
												<p className="icon_list">
													<i><img src="/pic/seedrs-perks/cashback-icon-1.svg" alt="airbnb"/></i>
													<i><img src="/pic/seedrs-perks/cashback-icon-2.svg" alt="booking"/></i>
													<i><img src="/pic/seedrs-perks/cashback-icon-3.svg" alt="netflix"/></i>
													<i><img src="/pic/seedrs-perks/cashback-icon-4.svg" alt="spotify"/></i>
												</p>
												<p>{t.description}</p>
											</span>
											<span className="value_item">{item.cashback_for ? item.cashback_for : <img src="/pic/seedrs-perks/table-none.svg" alt="nope"/>}</span>
										</li>
										<li>
											<span className="mobile_label">{htmlContent(t.label.masterclass)}</span>
											<span className="value_item">{checkValue(item.masterclass)}</span>
										</li>
										<li>
											<span className="mobile_label">{htmlContent(t.label.sponsorship_package)}</span>
											<span className="value_item">{checkValue(item.sponsorship_package)}</span>
										</li>
									</ul>
								)
							})
						}
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	.title{
		text-align: center;
		@media only screen and (max-width: 1024px) {
			padding: 0 80px;
		}
		@media only screen and (max-width: 600px) {
			padding: 0;
		}
		h1{
			font-size: 60px;
			line-height: 120%;
			@media only screen and (max-width: 1024px) {
				font-size: 46px;
				line-height: 100%;
			}
		}
	}
	.list{
		margin-top: 60px;
		display: flex;
		justify-content: space-between;
	}
	.labels_list{
		width: 435px;
		border: 1px solid #DDDFE4;
		border-radius: 13px;
		padding: 25px 30px;
		@media only screen and (max-width: 1190px) {
			width: 350px;
		}
		@media only screen and (max-width: 1024px) {
			display: none;
		}
	}
	.cards_list{
		width: calc(100% - 435px);
		display: flex;
		justify-content: space-between;
		padding-left: 40px;
		@media only screen and (max-width: 1210px) {
			padding-left: 10px;
		}
		@media only screen and (max-width: 1190px) {
			width: calc(100% - 350px);
		}
		@media only screen and (max-width: 1024px) {
			width: 100%;
			flex-direction: column;
			position: relative;
		}
		ul{
			width: calc(100% / 5 - 5px);
			border: 1px solid #DDDFE4;
			border-radius: 13px;
			padding: 25px 10px;
			@media only screen and (max-width: 1024px) {
				width: 100%;
				position: sticky;
				top: 120px;
				margin-bottom: 20px;
			}
			@media only screen and (max-width: 600px) {
				padding: 15px 10px;
			}
			&:nth-child(1){
				background: #F9F9F9;
			}
			&:nth-child(2){
				background: #FFEFDE;
			}
			&:nth-child(3){
				background: #F3F3F3;
			}
			&:nth-child(4){
				background: #FEFFBB;
			}
			&:nth-child(5){
				background: #393D49;
				border: 1px solid #393D49;
				li{
					color: #F9F9F9;
				}
				.heading_item{
					@media only screen and (max-width: 1024px) {
						background: #F9F9F9;
						color: #191B20;
					}
				}
			}
		}
		li{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 14px;
			line-height: 17px;
			&:first-child{
				border-bottom: 1px solid transparent;
				@media only screen and (max-width: 1024px) {
					justify-content: flex-start;
					text-align: left;
				}
			}
			&:nth-child(2){
				font-weight: 500;
				font-size: 16px;
				line-height: 19px;
			}
		}
	}
	li{
		border-bottom: 1px solid #D9D9D9;
		height: 40px;
		display: flex;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			height: auto;
			padding: 10px 0;
		}
		&:nth-child(3){
			height: 60px;
			@media only screen and (max-width: 1024px) {
				height: auto;
				padding: 10px 0;
			}
		}
		&:last-child{
			border-bottom: none;
		}
	}
	.hide_label{
		visibility: hidden;
	}
	sup{
		font-size: 10px;
		position: relative;
		top: -1px;
		margin-left: 1px;
	}
	.mobile_label{
		display: none;
		width: 60%;
		text-align: left;
		padding-left: 5px;
		@media only screen and (max-width: 1024px) {
			display: block;
		}
		@media only screen and (max-width: 600px) {
			padding-left: 0;
		}
	}
	.value_item{
		@media only screen and (max-width: 1024px) {
			width: 40%;
			display: flex;
			justify-content: flex-end;
			padding-right: 40px;
		}
		@media only screen and (max-width: 600px) {
			padding-right: 0;
		}
	}
	.heading_item{
		font-weight: 500;
		font-size: 22px;
		line-height: 26px;
		@media only screen and (max-width: 1024px) {
			border: 1px solid #191B20;
			border-radius: 346.008px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 24px;
			line-height: 29px;
			padding: 5px 18px;
		}
	}
	.cashback_item{
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		height: 81px;
		padding-top: 7px;
		@media only screen and (max-width: 600px) {
			height: auto;
			padding-top: 0;
		}
		ul{
			display: flex;
			align-items: center;
		}
		p{
			font-size: 10px;
			line-height: 120%;
			color: #A2A8B7;
			margin-top: 5px;
		}
	}
	.cashback_value_item{
		height: 81px;
		@media only screen and (max-width: 600px) {
			height: 120px;
		}
	}
	
	.icon_list{
		margin-top: 5px;
		li, i{
			height: auto;
			border-bottom: none;
			margin-right: 30px;
			@media only screen and (max-width: 600px) {
				width: 60px;
				display: inline-flex;
				margin: 5px 20px 5px 0;
			}
			&:last-child{
				margin-right: 0;
			}
		}
	}
`