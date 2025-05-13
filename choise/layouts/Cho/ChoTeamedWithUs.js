import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Link from "next/link";
import array from "public/data/partners.json";
import MarqueeSlider from "components/MarqueeSlider";

export default function ChoTeamedWithUs({t}) {
	const arraySlider = array.partners.concat(array.investors)
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
			</CenterBlock>
			<div className="list">
				<MarqueeSlider>
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
				</MarqueeSlider>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 150px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.list{
		margin-top: 80px;
	}
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