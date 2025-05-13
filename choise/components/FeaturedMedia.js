import styled from "styled-components";
import array from "public/data/featured-media.json"
import CenterBlock from "helpers/CenterBlock";

export default function FeaturedMedia() {
	return (
		<Wrapper className="featured_media">
			<CenterBlock>
				<ul>
					{
						array.map((item, index) => {
							return (
								<li key={index}>
									<a href={item.link} target="_blank" rel="noreferrer nofollow" dangerouslySetInnerHTML = {{ __html: `${item.icon}` }}/>
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
	margin-top: 160px;
	@media only screen and (max-width: 820px) {
		margin-top: 70px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 40px;
	}
	ul{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			justify-content: flex-start;
			margin: 0 -20px -40px -20px;
			padding: 0 20px 40px 20px;
			width: calc(100% + 40px);
		}
	}
	li{
		margin: 0 15px;
		&:first-child{
			margin: 0 15px 0 0;
		}
		&:last-child{
			margin: 0 0 0 15px;
		}
		@media only screen and (max-width: 820px) {
			flex: 0 0 auto;
			width: 120px;
		}
		@media only screen and (max-width: 600px) {
			width: 80px;
		}
	}
	a{
		&:hover{
			svg{
				fill: #0285FD;
				transition: all .3s ease-in-out;
			}
		}
	}
	svg{
		max-width: 100%;
		width: 100%;
		fill: #7B8199;
		transition: all .3s ease-in-out;
	}
`
