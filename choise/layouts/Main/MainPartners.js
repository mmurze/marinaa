import styled from "styled-components";
import array from "public/data/partners.json"
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function MainPartners() {
	const arraySlider = array.partners.concat(array.investors)
	return (
		<Wrapper>
			<Marquee pauseOnHover={true} gradient={false}>
				{
					arraySlider.concat(arraySlider).map((item, index) => {
						return (
							<div className="item" key={index}>
								{item.link !== "#" ? (
									item.target ? (
										<a href={item.link} target="_blank" rel="noreferrer nofollow" dangerouslySetInnerHTML = {{ __html: `${item.icon}` }}/>
									) : (
										<Link href={item.link} dangerouslySetInnerHTML = {{ __html: `${item.icon}` }}/>
									)
								) : (
									<p dangerouslySetInnerHTML = {{ __html: `${item.icon}` }}/>
								)}
							</div>
						)
					})
				}
			</Marquee>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #ffffff;
	position: relative;
	z-index: 10;
	padding: 30px 0;
	.item{
		margin-right: 45px;
		svg{
			fill: #191B20;
			transition: .3s ease-in-out;
		}
		a:hover svg{
			fill: #0285FD;
			transition: .3s ease-in-out;
		}
	}
`