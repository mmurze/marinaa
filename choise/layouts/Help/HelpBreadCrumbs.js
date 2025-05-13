import styled from "styled-components";
import Link from "next/link";
import CenterBlock from "helpers/CenterBlock";
import {useRouter} from "next/router";

export default function HelpBreadCrumbs({children}) {
	const {locale} = useRouter()
	const {helpBreadCrumbs} = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper>
			<CenterBlock>
				<ul>
					<li><Link href="/help">{helpBreadCrumbs.title}</Link></li>
					<li>{children}</li>
				</ul>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	ul {
		display: flex;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
		}
		li {
			font-size: 18px;
			line-height: 120%;
			&:after {
				content: url("/pic/help/help-arrow.svg");
				margin: 0 15px;
				@media only screen and (max-width: 600px) {
					display: none;
				}
			}
			&:last-child{
				@media only screen and (max-width: 600px) {
					margin-top: 10px;
				}
				&:after {
					display: none;
				}
			}
			a {
				color: #80889C;
			}
		}
	}
`