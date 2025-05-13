import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useState} from "react";
import BusinessEarn from "layouts/Business/BusinessCalculator/BusinessEarn";
import BusinessBorrow from "layouts/Business/BusinessBorrow";
import {useRouter} from "next/router";

export default function BusinessCalculator() {
	const {locale} = useRouter()
	const t = require(`locale/page-business-calculator/${locale}.json`)

	const [active, setActive] = useState(0)

	return (
		<Wrapper>
			<CenterBlock width={990}>
				<div className="buttons">
					<button
						onClick={() => setActive(0)}
						className={active === 0 ? "active" : ""}>{t.business_calculator.title_button_1}</button>
					<p>{t.business_calculator.text}</p>
					<button
						onClick={() => setActive(1)}
						className={active === 1 ? "active" : ""}>{t.business_calculator.title_button_2}</button>
				</div>
				{active === 0 ? <BusinessEarn t={t.earn}/> : <BusinessBorrow t={t.borrow}/>}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 180px;
	color: #fff;
	@media only screen and (max-width: 820px) {
		margin-top: 100px;
	}
	.buttons{
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 480px;
		width: 100%;
		margin: 0 auto;
		button{
			padding: 8px 35px;
			border: 1px solid #656D81;
			border-radius: 40px;
			height: 56px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			color: #fff;
			max-width: 200px;
			&.active{
				background: #FFFFFF;
				color: #000000;
			}
		}
		p{
			margin: 0 30px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			@media only screen and (max-width: 600px) {
				margin: 0 15px;
			}
		}
	}
`
