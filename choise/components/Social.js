import styled from "styled-components";
import array from "public/data/social.json"

export default function Social({className}) {
	return (
		<Wrapper className={`social ${className ? className : ''}`}>
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
		</Wrapper>
	)
}

const Wrapper = styled.div`
	ul{
		display: flex;
		align-items: center;
		a{
			padding: 0 15px;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 48px;
			line-height: 0;
			&:hover{
				svg{
					fill: #0285FD;
					transition: all .3s ease-in-out;
				}
			}
		}
	}
	svg{
		fill: #7B8199;
		transition: all .3s ease-in-out;
	}
`
