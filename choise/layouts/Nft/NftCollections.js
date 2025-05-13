import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useEffect, useState} from "react";
import NftTokenItem from "components/Nft/NftTokenItem";
import NftTokenGrid from "components/Nft/NftTokenGrid";

export default function NftCollections({t}) {
	const [array, setArray] = useState([])
	const [filter, setFilter] = useState("platinum")
	
	useEffect(() => {
		const data = require(`public/data/tokens/${filter}.json`)
		setArray(data)
	}, [filter])
	
	return (
		<Wrapper id="cho">
			<CenterBlock>
				<div className="heading">
					<h2>{t.title}</h2>
					<p>{t.description} 😏</p>
				</div>
				<div className="filter_array">
					{
						t.filterArray.map((item, index) => {
							return (
								<button onClick={() => setFilter(item.value)} className={filter === item.value ? "active" : ""} key={index}>
									<span>{item.title}</span>
									<span>{item.percent}%</span>
								</button>
							)
						})
					}
				</div>
				<NftTokenGrid type={filter}>
					{
						array.map((item, index) => {
							return <NftTokenItem sale={true} item={item} key={index}/>
						})
					}
				</NftTokenGrid>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 130px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.token_list{
		margin-top: 50px;
	}
	.heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		p{
			max-width: 561px;
			width: 100%;
			font-size: 20px;
			line-height: 150%;
			letter-spacing: -0.03em;
			color: #7B8199;
			@media only screen and (max-width: 600px) {
				max-width: 100%;
				margin-top: 20px;
				font-size: 16px;
				line-height: 150%;
			}
		}
		h2{
			font-size: 48px;
			line-height: 100%;
			max-width: 380px;
			width: 100%;
			@media only screen and (max-width: 600px) {
				max-width: 100%;
			}
			@media only screen and (max-width: 600px) {
				font-size: 30px;
				line-height: 100%;
				max-width: 100%;
			}
		}
	}
	.filter_array{
		display: flex;
		justify-content: space-between;
		margin-top: 80px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			margin-top: 40px;
		}
		button{
			width: calc(100% / 4 - 10px);
			justify-content: space-between;
			font-size: 25px;
			line-height: 120%;
			height: 65px;
			border-radius: 500px;
			border: 1px solid #EBEBEB;
			background: #F7F7F7;
			padding: 0 30px;
			@media only screen and (max-width: 820px) {
				font-size: 18px;
			}
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-bottom: 20px;
				&:last-child{
					margin-bottom: 0;
				}
			}
			&.active{
				background: #FFFB1F;
				border: 1px solid #FFFB1F;
			}
		}
	}
`