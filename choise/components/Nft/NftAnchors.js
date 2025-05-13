import styled from "styled-components";
import array from "public/data/nft-anchor.json"
import { Link } from "react-scroll";

export default function NftAnchors() {
	return (
		<Wrapper>
			{
				array.map((item, index) => {
					return (
						<li key={index}><Link smooth={true} offset={-150} to={item.slug}>{item.title}</Link></li>
					)
				})
			}
		</Wrapper>
	)
}

const Wrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: -20px;
	position: relative;
	z-index: 10;
	@media only screen and (max-width: 1024px) {
		justify-content: center;
	}
	@media only screen and (max-width: 600px) {
		display: none;
	}
	li{
		margin-right: 40px;
		margin-bottom: 20px;
		@media only screen and (max-width: 1024px) {
			margin-right: 20px;
		}
		&:last-child{
			margin-right: 0;
		}
	}
	a{
		font-size: 14px;
		line-height: 17px;
		color: #7B8199;
		cursor: pointer;
		&:hover{
			color: #0285FD;
		}
	}
`