import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import axios from "axios";
import coinsArray from "public/data/predictions-coins.json"
import PredictionsGraph from "components/Predictions/PredictionsGraph";
import PredictionsGraphSelect from "components/Predictions/PredictionsGraphSelect";

export default function PredictionsProfit({t}) {
	const [coin, setCoin] = useState(coinsArray[0]);
	const [graphData, setGraphData] = useState([]);
	
	useEffect(() => {
		axios.get(`https://api.cryptoforecast.io/api/v1/currency/${coin.ticker}/daily_predictions?period=Months&prediction=ALL&profit=ALL`)
			.then(r => setGraphData(r.data.items.slice(-7)))
	}, [coin])
	
	return (
		<Wrapper>
			<CenterBlock>
				<Title center={true}><h2>{t.title}</h2></Title>
				<p className="description">{t.description}</p>
				<div className="list_block">
					<PredictionsGraph title={coin.title} array={graphData} t={t.graph}/>
					<PredictionsGraphSelect onClick={(e) => setCoin(e)} array={coinsArray} active={coin.title} t={t.graph_select}/>
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
		max-width: 622px;
		width: 100%;
		margin: 20px auto 0 auto;
		text-align: center;
		font-size: 18px;
		line-height: 150%;
		color: #7B8199;
	}
	.list_block{
		display: flex;
		justify-content: space-between;
		margin-top: 75px;
		@media only screen and (max-width: 820px) {
			flex-direction: column-reverse;
		}
	}
`