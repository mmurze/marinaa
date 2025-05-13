import styled from "styled-components";
import {useRouter} from "next/router";

export default function MobileNavFooter() {
	const {locale} = useRouter()
	const {footer} = require(`locale/components/${locale}.json`)
	return (
		<Wrapper>
			<a href="https://crypterium.onelink.me/jtmZ/choisesiteheader" target="_blank" rel="noreferrer nofollow" className="app_link">{footer.get_wallet}</a>
			<p className="copyright">{footer.copyright}</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 40px;
	.app_link{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: 10px;
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
		border-radius: 40px;
		height: 56px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}
	.documentation {
		margin-top: 10px;
		a{
			width: 100%;
			border: 1px solid #EBEBEB;
			border-radius: 40px;
			color: #191B20;
			height: 56px;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
				border: 1px solid #191B20;
			}
		}
	}
	.copyright{
		margin-top: 40px;
		font-size: 12px;
		line-height: 130%;
		color: #7B8199;
		padding-bottom: 20px;
	}
`
