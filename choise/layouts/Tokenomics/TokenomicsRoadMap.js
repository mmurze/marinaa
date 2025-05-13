import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import RoadMap from "components/RoadMap";

export default function TokenomicsRoadMap() {
	const array = [
		{
			"date": "Q4 | 2021",
			"list": [
				{
					"title": "Ecosystem design",
					"success": true
				},
				{
					"title": "Assembling the team",
					"success": true
				}
			]
		},
		{
			"date": "Q1 | 2022",
			"list": [
				{
					"title": "Launchpad",
					"success": true
				},
				{
					"title": "CHO Community Sale",
					"success": true
				},
				{
					"title": "DAO forum",
					"success": true
				},
				{
					"title": "DEX aggregator",
					"success": true
				},
				{
					"title": "DeFi Staking/yield farming aggregator",
					"success": true
				}
			]
		},
		{
			"date": "Q2 | 2022",
			"list": [
				{
					"title": "Chain bridges",
					"success": true
				},
				{
					"title": "Crypto Price protection (insurance)",
					"success": true
				},
				{
					"title": "Smart pools (Transaction builder)",
					"success": true
				},
				{
					"title": "USDT, USDC interest account up to 15% APY",
					"success": true
				},
				{
					"title": "CHO interest account up to 6.2% APY",
					"success": true
				}
			]
		},
		{
			"date": "Q3 | 2022",
			"list": [
				"CeFi—Defi integtation",
				"NFT interest accounts",
				"Dual currency interest accounts",
				{
					"title": "Web 3.0 interest accounts",
					"success": true
				}
			]
		},
		{
			"date": "Q4 | 2022",
			"list": [
				{
					"title": "DeFi derivatives",
					"success": true,
					"label": "hypothesis"
				},
				"Adding new coins",
				"NFT launchpad",
				"Earn marketplace"
			]
		}
	]
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>product roadmap</h2></Title>
				<RoadMap array={array}/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
`