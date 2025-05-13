import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import {useEffect, useRef} from "react";

export default function BitdrivenFund({t}) {
	const containerRef = useRef(null);
	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollLeft = containerRef.current.scrollWidth;
		}
	}, []);
	return (
		<Wrapper>
			<CenterBlock>
				<div className="icon">
					<Image src="/pic/bitdriven/bitdriven-coin.jpg" width={63} height={63} alt="BitDriven - BTC Driven portfolio by One More Fund" priority={true}/>
				</div>
				<h2>{t.title}</h2>
				<div className="description">
					{
						t.descriptions.map((item, index) =>{
							return(
								<p key={index}>{item}</p>
							)
						})
					}
				</div>
				<div ref={containerRef} className="graph">
					<span><img src="/pic/bitdriven/bitdriven-graph.svg" alt="BitDriven graph"/></span>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	color: #fff;
	margin-top: 150px;
	@media only screen and (max-width: 820px) {
		margin-top: 100px;
	}
	h2{
		font-size: 48px;
		line-height: 100%;
		text-align: center;
		max-width: 622px;
		width: 100%;
		margin: 30px auto 0 auto;
		@media only screen and (max-width: 820px) {
			font-size: 46px;
			line-height: 100%;
		}
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	.description{
		text-align: center;
		margin: 30px auto 0 auto;
		max-width: 750px;
		width: 100%;
		p{
			color: #C6CAD3;
			font-size: 18px;
			line-height: 150%;
			margin-bottom: 5px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.icon{
		text-align: center;
	}
	.graph{
		margin-top: 50px;
		display: flex;
		justify-content: center;
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-padding: 20px;
			justify-content: flex-start;
			span{
				width: 800px;
				margin-right: 20px;
				flex: 0 0 auto;
				display: block;
			}
		}
	}
`