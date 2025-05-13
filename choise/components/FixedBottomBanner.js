import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useEffect, useState} from "react";
import mainImage from "public/pic/banners/get-banner.jpg"
import Image from "next/image";
import Link from "next/link";
import Responsive from "helpers/Responsive";
import {useRouter} from "next/router";
export default function FixedBottomBanner() {
	const {asPath} = useRouter()
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		if (asPath.split("?")[0] !== "/bitdriven") {
			if (localStorage.getItem("getProfit") !== "true") {
				setVisible(true)
			}
		}
	}, [])
	const onHandleClick = () => {
		setVisible(false)
		localStorage.setItem("getProfit", "true")
	}
	return (
		visible ? (
			<Responsive width={600}>
				<Wrapper>
					<CenterBlock>
						<Link onClick={onHandleClick} className="main_link" href="/bitdriven?utm_source=organic&utm_medium=banner_web&utm_campaign=all-bitdriven_banner_website_lopw-bitdriven">Join the waitlist</Link>
						<button className="close_button" onClick={onHandleClick}>
							<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.1365 1.69671L8.30331 0.863525L5.00013 4.16671L1.69695 0.863525L0.86377 1.69671L4.16695 4.99989L0.86377 8.30307L1.69695 9.13625L5.00013 5.83307L8.30331 9.13625L9.1365 8.30307L5.83331 4.99989L9.1365 1.69671Z"/>
							</svg>
						</button>
						<Image className="main_image" src={mainImage} alt="Get up to 1,200% profit with bitdriven index token"/>
					</CenterBlock>
				</Wrapper>
			</Responsive>
		) : null
	)
}

const Wrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background: #191B20;
	z-index: 999;
	.center_block{
		padding: 0 60px;
	}
	.close_button{
		position: absolute;
		top: 30px;
		right: 0;
		z-index: 30;
		width: 26px;
		height: 26px;
		background: #3C3D42;
		border-radius: 4px;
		@media only screen and (max-width: 900px) {
			top: 10px;
		}
		svg{
			fill: #fff;
		}
		&:hover{
			background: #FFFB20;
			svg{
				fill: #191B20;
			}
		}
	}
	.main_link{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		font-size: 0;
		z-index: 10;
	}
	.main_image{
		line-height: 0;
	}
`
