import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";

export default function ChoExperience() {
	const array = [
		"/pic/cho/experience/1.svg",
		"/pic/cho/experience/2.svg",
		"/pic/cho/experience/3.svg",
		"/pic/cho/experience/4.svg",
		"/pic/cho/experience/5.svg",
		"/pic/cho/experience/6.svg",
		"/pic/cho/experience/7.svg",
		"/pic/cho/experience/8.svg",
		"/pic/cho/experience/9.svg",
		"/pic/cho/experience/10.svg",
		"/pic/cho/experience/11.svg",
		"/pic/cho/experience/12.png",
		"/pic/cho/experience/13.svg",
		"/pic/cho/experience/14.svg",
		"/pic/cho/experience/15.svg"
	]
	return (
		<Wrapper>
			<CenterBlock>
				<Title center={true}><h2>with an experience from</h2></Title>
				<ul className="list">
					{
						array.map((item, index) => {
							return (
								<li key={index}><img src={item} alt={`experience ${index + 1}`}/></li>
							)
						})
					}
				</ul>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.list{
		margin-top: 90px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: -40px;
		@media only screen and (max-width: 600px) {
			margin-bottom: -30px;
			margin-top: 40px;
		}
		li{
			width: calc(100% / 5 - 20px);
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 0;
			margin-bottom: 40px;
			@media only screen and (max-width: 600px) {
				width: calc(100% / 2 - 20px);
				margin-bottom: 30px;
			}
		}
	}
`