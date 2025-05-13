import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import {useState} from "react";

export default function ChoCombined({t}) {
	const [active, setActive] = useState(0)

	const renderArray = (array) => {
		return (
			array.map((item, index) => {
				return (
					<div className="item" key={index}>
						<Image src={item.icon} width={35} height={35} priority={true} alt={item.title}/>
						<p>{item.title}</p>
					</div>
				)
			})
		)
	}
	return (
		<Wrapper>
			<CenterBlock>
				<Title center={true}><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="combined_mobile">
					<img src="/pic/cho/cho-choise-logo.svg" alt="CHO Choise.com"/>
				</div>
				<div className="combined_desktop">
					<img src="/pic/cho/cho-combined-desktop.svg" alt="we’ve combined all together"/>
				</div>
				<div className="lines">
					<img src="/pic/cho/cho-combined-lines.svg" alt="We have combined our cefi wallet and charism defi"/>
				</div>
				<div className="list">
					{renderArray(t.crypteriumArray)}
					{renderArray(t.charismArray)}
				</div>
				<div className="mobile_list">
					<div className="buttons">
						<button
							className={active === 0 ? "active" : ""}
							onClick={() => setActive(0)}>
							{
								active === 0 ? (
								<img src="/pic/cho/cho-crypterium.svg" alt="crypterium"/>
							) : (
								<img src="/pic/cho/cho-crypterium-active.svg" alt="crypterium"/>
							)
							}
						</button>
						<button
							className={active === 1 ? "active" : ""}
							onClick={() => setActive(1)}>
							{
								active === 1 ? (
									<img src="/pic/cho/cho-charism-active.svg" alt="charism"/>
								) : (
									<img src="/pic/cho/cho-charism.svg" alt="charism"/>
								)
							}
						</button>
					</div>
					<div className="list_select">
						{active === 0 ? renderArray(t.crypteriumArray) : renderArray(t.charismArray)}
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.description{
		max-width: 484px;
		width: 100%;
		margin: 30px auto 0 auto;
		text-align: center;
		color: #80889C;
	}
	.list{
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-top: 10px;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.item{
		width: calc(100% / 22);
		position: relative;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		align-items: center;
		@media only screen and (max-width: 600px) {
			width: 100%;
			justify-content: flex-start;
			align-items: center;
			flex-direction: row;
			margin-bottom: 19px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		p{
			writing-mode: tb-rl;
			margin-top: 10px;
			@media only screen and (max-width: 600px) {
				writing-mode: initial;
				margin-left: 10px;
				margin-top: 0;
			}
		}
	}
	.lines{
		display: flex;
		justify-content: center;
		margin-top: 30px;
		padding: 0 25px;
		@media only screen and (max-width: 600px) {
			padding: 0;
			margin-top: 10px;
		}
	}
	.combined_desktop{
		display: flex;
		justify-content: center;
		margin-top: 90px;
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
	.combined_mobile{
		display: none;
		@media only screen and (max-width: 600px) {
			display: flex;
			justify-content: center;
			margin-top: 60px;
		}
	}
	.mobile_list{
		display: none;
		margin-top: 30px;
		@media only screen and (max-width: 600px) {
			display: block;
		}
		.buttons{
			display: flex;
			justify-content: space-between;
			button{
				width: calc(50% - 5px);
				height: 56px;
				border-radius: 50px;
				border: 1px solid #C6CAD3;
				&.active{
					border: 1px solid #0285FD;
					background: #0285FD;
				}
			}
		}
	}
	.list_select{
		margin-top: 35px;
	}
`