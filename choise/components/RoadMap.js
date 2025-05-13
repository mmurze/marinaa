import styled from "styled-components";
import Title from "components/Title";

export default function RoadMap({array, title}) {
	return (
		<Wrapper className="road_map">
			{title && <Title><h2>{title}</h2></Title>}
			<div className="list">
				{
					array.map((item, index) => {
						return (
							<Item length={array.length} key={index}>
								<h3 className="date">{item.date}</h3>
								<div className="arrow">
									<img src="/pic/arrow.svg" alt={item.date}/>
								</div>
								<ul>
									{
										item.list.map((item, index) => {
											return (
												<li key={index}>
													{
														item.title ? (
															<>
																{item.title}
																{item.success && <span className="done">{item.label ? item.label : "done"}</span>}
															</>
														) : item
													}
												</li>
											)
										})
									}
								</ul>
							</Item>
						)
					})
				}
			</div>
		</Wrapper>
	)
}

const Item = styled.div`
	width: ${p => `calc(100% / ${p.length} - 10px)`};
	position: relative;
	z-index: 10;
	@media only screen and (max-width: 1024px) {
		width: 320px;
		flex: 0 0 auto;
		padding-right: 20px;
		&:last-child{
			padding-right: 0;
		}
		&:before{
			content: '';
			position: absolute;
			width: 100%;
			border: 1px dashed #7B8199;
			top: 97px;
		}
	}
	@media only screen and (max-width: 600px) {
		width: 280px;
	}
	h3{
		background: #0285FD;
		border-radius: 500px;
		padding: 3px 16px;
		font-size: 22px;
		line-height: 120%;
		font-weight: normal;
		color: #F9F9F9;
		text-align: center;
		display: inline-block;
	}
	ul{
		margin-top: 30px;
		li{
			font-size: 16px;
			line-height: 130%;
			color: #7B8199;
			margin-bottom: 15px;
			&:last-child{
				margin-bottom: 0;
			}
			.done{
				font-weight: 500;
				font-size: 14px;
				line-height: 120%;
				background: #5CEE9C;
				border-radius: 500px;
				color: #191B20;
				margin-left: 5px;
				padding: 1px 5px;
			}
		}
	}
`

const Wrapper = styled.div`
	.list{
		position: relative;
		margin-top: 90px;
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			justify-content: flex-start;
			margin: 90px -20px -40px -20px;
			padding: 0 20px 40px 20px;
		}
		@media only screen and (max-width: 600px) {
			margin: 40px -20px -40px -20px;
		}
		&:before{
			content: '';
			position: absolute;
			width: 100%;
			border: 1px dashed #7B8199;
			top: 97px;
			@media only screen and (max-width: 1024px) {
				display: none;
			}
		}
	}
	.arrow{
		background: linear-gradient(259.09deg, #5CEE9C 8.08%, #FFEF21 91.92%);
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 45px;
		position: relative;
		z-index: 10;
		margin-left: 40px;
	}
`