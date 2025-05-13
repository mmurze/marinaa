import styled from "styled-components";

export default function JoinButton() {
	return (
		<>
			<Wrapper className="join">
				<a rel="noreferrer nofollow" target="_blank" href="https://choisecom.medium.com/choise-com-metafi-roadmap-discover-q1-updates-17b91da91b78" type="button">
					<p>What’s next?</p>
					<span className="front"/>
					<span className="back"/>
				</a>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	font-size: 14px;
	line-height: 24px;
	a{
		border-radius: 40px;
		position: relative;
		height: 40px;
		width: auto;
		padding: 8px 24px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		&:disabled{
			cursor: default;
			.front, .back{
				background: #7B8199;
			}
			p{
				color: #F9F9F9;
			}
		}
		&:hover{
			p{
				color: #F9F9F9;
				transition: all .3s ease-in-out;
			}
			.back{
				opacity: 1;
				transition: all .3s ease-in-out;
			}
		}
		p{
			position: relative;
			z-index: 10;
			color: #191B20;
			transition: all .3s ease-in-out;
		}
		span{
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 40px;
			top: 0;
			left: 0;
		}
		.front{
			background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFFB1F 91.92%);
		}
		.back{
			background: #191B20;
			opacity: 0;
			transition: all .3s ease-in-out;
		}
	}
`
