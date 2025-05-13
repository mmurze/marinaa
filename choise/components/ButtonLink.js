import styled from "styled-components";

export default function ButtonLink({children, onClick, slug}) {
	return (
		<Wrapper className="button_link" onClick={onClick}>
			<a rel="noreferrer nofollow" href={slug} target="_blank">{children}</a>
			<p>{children}</p>
			<span className="front"/>
			<span className="back"/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	border-radius: 40px;
	position: relative;
	height: 56px;
	padding: 8px 24px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	a{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 20;
		font-size: 0;
	}
	&:disabled{
		cursor: default;
		.front, .back{
			background: #191B20;
			transition: all .3s ease-in-out;
			opacity: .3;
		}
		&:hover{
			.front, .back{
				background: #191B20;
				opacity: .3;
			}
		}
		p{
			color: #F9F9F9;
			opacity: .3;
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
		font-size: 14px;
		line-height: 24px;
		color: #191B20;
		transition: all .3s ease-in-out;
		margin: 0 !important;
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
		transition: all .3s ease-in-out;
	}
	.back{
		background: #191B20;
		opacity: 0;
		transition: all .3s ease-in-out;
	}
`
