import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function SecurityLogoList() {
	const array = [
		{
			"image": "/pic/security/s-logo-1.jpg",
			"width": 92.59,
			"height": 26.85
		},
		{
			"image": "/pic/security/s-logo-2.jpg",
			"width": 84.92,
			"height": 32.49
		},
		{
			"image": "/pic/security/s-logo-3.jpg",
			"width": 87.5,
			"height": 29.17
		},
		{
			"image": "/pic/security/s-logo-4.jpg",
			"width": 93.68,
			"height": 24.11
		},
		{
			"image": "/pic/security/s-logo-5.jpg",
			"width": 111,
			"height": 30
		},
		{
			"image": "/pic/security/s-logo-6.jpg",
			"width": 50,
			"height": 49
		}
	]
	return (
		<Wrapper>
			<CenterBlock>
				<ul className="list">
					{
						array.map((item, index) => {
							return (
								<li key={index}>
									<Image src={item.image} width={item.width} height={item.height} alt={`Security item ${index + 1}`} priority={true}/>
								</li>
							)
						})
					}
				</ul>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 50px;
	.list{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 0 -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
		}
		li{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-right: 30px;
			@media only screen and (max-width: 600px) {
				width: 100px;
				margin-right: 30px;
				flex: 0 0 auto;
				scroll-snap-align: start;
				&:last-child {
					margin-right: 0;
				}
			}
			&:last-child{
				margin-right: 0;
			}
		}
	}
`
