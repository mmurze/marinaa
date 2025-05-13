import styled from "styled-components";
import Link from "next/link";
import {useRouter} from "next/router";

export default function EntityLicenseIsuredBitGo() {
	const {locale} = useRouter()
	const {licensed_bit_go} = require(`locale/components/${locale}.json`)
	return (
		<Wrapper className="license_insured">
			<li><img src="/pic/eu.svg" alt="EU entity & license"/><a href="https://rekvizitai.vz.lt/imone/stilgeka/juridinis-asmuo/" target="_blank" rel="noreferrer">{licensed_bit_go.license}</a></li>
			<li><img src="/pic/insured.svg" alt="Certified custodians"/><Link href="/security">{licensed_bit_go.security}</Link></li>
		</Wrapper>
	)
}

const Wrapper = styled.ul`
	li{
		font-weight: 500;
		font-size: 14px;
		line-height: 140%;
		display: flex;
		align-items: center;
		&:last-child{
			margin-top: 20px;
		}
		img{
			margin-right: 10px;
		}
	}
`
