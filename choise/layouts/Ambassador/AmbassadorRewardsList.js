import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import LoadingAnimation from "components/LoadingAnimation";
import {renderRewardsArray} from "utils/ambassador";
import AmbassadorRewardItem from "layouts/Ambassador/AmbassadorRewardItem";

export default function AmbassadorRewardsList({t}) {
	const [array, setArray] = useState([])
	useEffect(() => {
		renderRewardsArray().then((r) => setArray(r))
	}, [])
	return (
		array.length ? (
			<Wrapper>
				<CenterBlock>
					<Title><h2>{t.title}</h2></Title>
					<p className="description">{t.description}</p>
					{
						array ? (
							<div className="list">
								{
									array.length ? (
										array.map((item, index) => {
											return <AmbassadorRewardItem item={item} key={index} t={t.item}/>
										})
									) : (
										<div className="empty_block">
											<p>{t.empty_block}</p>
										</div>
									)
								}
							</div>
						) : (
							<div className="loading_block">
								<LoadingAnimation/>
							</div>
						)
					}
				</CenterBlock>
			</Wrapper>
		) : (
			<EmptyBlock className="empty_block"></EmptyBlock>
		)
	)
}

const EmptyBlock = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
`

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.title{
		text-align: center;
	}
	.description{
		text-align: center;
		margin-top: 20px;
		font-size: 18px;
		line-height: 150%;
		color: #80889C;
	}
	.loading_block{
		display: flex;
		justify-content: center;
		padding: 80px 0;
	}
	.list{
		margin-top: 50px;
		@media only screen and (max-width: 1024px) {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 16px 20px;
		}
		@media only screen and (max-width: 820px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media only screen and (max-width: 600px) {
			grid-gap: 0;
			display: flex;
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
		}
	}
`