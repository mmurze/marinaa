import styled from "styled-components";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function BusinessPartners({t}) {
	return (
		<Wrapper>
			<Marquee pauseOnHover={true} gradient={false}>
				{
					t.array.concat(t.array).map((item, index) => {
						return (
							<div className="item" key={index}>
								{item.link !== "#" ? (
									item.target ? (
										<a href={item.link} target="_blank" rel="noreferrer nofollow">
											<img src={item.icon} alt={item.title}/>
										</a>
									) : (
										<Link href={item.link}>
											<img src={item.icon} alt={item.title}/>
										</Link>
									)
								) : (
									<p><img src={item.icon} alt={item.title}/></p>
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
	margin-top: 110px;
	@media only screen and (max-width: 820px) {
		margin-top: 80px;
	}
	.item{
		width: 150px;
		margin-right: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			width: 100px;
		}
	}
`