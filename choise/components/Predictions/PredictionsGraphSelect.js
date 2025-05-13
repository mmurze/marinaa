import styled from "styled-components";

export default function PredictionsGraphSelect({onClick, array, active, t}) {
	return (
		<Wrapper>
			<div className="title">{t.title}</div>
			<ul className="select">
				{
					array.map((item, index) => {
						return (
							<li className={active === item.title ? 'active' : ''} onClick={() => onClick(item)} key={index}>
								<img src={`/pic/predictions/coins/${item.title.toLowerCase()}.svg`} alt={item.title}/>
								<p>{item.title}</p>
							</li>
						)
					})
				}
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 350px;
	width: 100%;
	@media only screen and (max-width: 820px) {
		max-width: 100%;
	}
	.title {
		font-weight: 500;
		font-size: 16px;
		line-height: 26px;
		padding: 5px 26px;
		background: #FFFB1F;
		border-radius: 38px;
		display: inline-flex;
	}
	.select {
		margin-top: 40px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: -15px;
		li {
			width: 50%;
			cursor: pointer;
			display: flex;
			align-items: center;
			margin-bottom: 15px;
			color: #7B8199;
			font-weight: 500;
			font-size: 18px;
			line-height: 26px;
			transition: all .3s ease-in-out;
			p {
				margin: 0;
			}
			img {
				border: 2px solid #F9F9F9;
				border-radius: 50%;
				box-sizing: border-box;
				background-color: #F9F9F9;
				transition: all .3s ease-in-out;
				@media only screen and (max-width: 600px) {
					width: 37.28px;
					height: 37.28px;
				}
			}
			&.active {
				color: #2F3035;
				transition: all .3s ease-in-out;
				img {
					border: 2px solid #2FB459;
					background-color: #2FB459;
					transition: all .3s ease-in-out;
				}
			}
			p {
				margin-left: 17px;
			}
		}
	}
`