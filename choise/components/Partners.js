import styled from "styled-components";
import array from "public/data/partners.json"
import Link from "next/link";

export default function Partners() {
	const renderArray = (array, icon) => {
		return (
			array.map((item, index) => {
				return (
					<li key={index}>
						{item.link !== "#" ? (
							item.target ? (
								<a href={item.link} target="_blank" rel="noreferrer nofollow" dangerouslySetInnerHTML = {{ __html: `${icon ? "<span class='icon'>💵</span>" : ""}${item.icon}` }}/>
							) : (
								<Link href={item.link} dangerouslySetInnerHTML = {{ __html: `${icon ? "<span class='icon'>💵</span>" : ""}${item.icon}` }}/>
							)
						) : (
							<p dangerouslySetInnerHTML = {{ __html: `${icon ? "<span class='icon'>💵</span>" : ""}${item.icon}` }}/>
						)}
					</li>
				)
			})
		)
	}
	
	return (
		<Wrapper className="partners">
			<h2>teaming up with the best</h2>
			<ul className="list">
				{renderArray(array.partners, false)}
				{renderArray(array.investors, true)}
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: relative;
	z-index: 10;
	p{
		font-size: 14px;
		line-height: 150%;
		color: #7B8199;
	}
	h2{
		font-size: 18px;
		line-height: 150%;
		font-weight: normal;
		color: #7B8199;
	}
	.list{
		display: flex;
		margin-top: 30px;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: -10px;
		li{
			margin-bottom: 10px;
			margin-right: 10px;
		}
	}
	a, p{
		border: 1px solid #F0F0F0;
		border-radius: 6.2592px;
		background: #F9F9F9;
		padding: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 38px;
		transition: all .3s ease-in-out;
		&:hover{
			border: 1px solid #0285FD;
			svg{
				fill: #0285FD;
				transition: all .3s ease-in-out;
			}
		}
		svg{
			fill: #A3ADC2;
			transition: all .3s ease-in-out;
		}
	}
	p{
		&:hover{
			border: 1px solid #F0F0F0;
			svg{
				fill: #A3ADC2;
			}
		}
	}
	.icon{
		margin-right: 7px;
	}
`
