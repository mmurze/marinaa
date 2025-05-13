import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useEffect, useState} from "react";
import {renderRewardsArray, renderTasksArray} from "utils/ambassador";
import AmbassadorTaskItem from "layouts/Ambassador/AmbassadorTaskItem";
import AmbassadorRewardItem from "layouts/Ambassador/AmbassadorRewardItem";
import numberFormat from "helpers/numberFormat";
import faqArray from "public/data/ambassador-faq.json"
import FaqList from "components/FaqList";
import ProfileAmbassadorHistory from "layouts/Profile/ProfileAmbassadorHistory";
import LoadingAnimation from "components/LoadingAnimation";
export default function ProfileAmbassadorsList() {
	const [tab, setTab] = useState("tasks")
	const [tasksArray, setTasksArray] = useState(null)
	const [rewardsArray, setRewardsArray] = useState(null)
	useEffect(() => {
		renderTasksArray().then(r => setTasksArray(r))
		renderRewardsArray().then(r => setRewardsArray(r))
	}, [])
	const tabsArray = [
		{
			"title": "Available tasks",
			"value": "tasks",
			"total": tasksArray?.length
		},
		{
			"title": "Rewards",
			"value": "rewards",
			"total": tasksArray?.length
		},
		{
			"title": "History",
			"value": "history"
		}
	]
	const renderLists = () => {
		switch (tab) {
			case "tasks": return <TasksBlock/>
			case "rewards": return <RewardsBlock/>
			case "faq": return <FaqList array={faqArray}/>
			case "history": return <ProfileAmbassadorHistory/>
		}
	}
	const TasksBlock = () => {
		return (
			tasksArray ? (
				<div className="list">
					{
						tasksArray.map((item, index) => {
							return (
								item.visible ? (
									<AmbassadorTaskItem item={item} key={index}/>
								) : null
							)
						})
					}
				</div>
			) : (
				<div className="loading_list">
					<LoadingAnimation/>
				</div>
			)
		)
	}
	const RewardsBlock = () => {
		return (
			rewardsArray ? (
				<div className="rewards_list">
					{
						rewardsArray.map((item, index) => {
							return (
								item.visible ? (
									<AmbassadorRewardItem item={item} key={index}/>
								) : null
							)
						})
					}
				</div>
			) : (
				<div className="loading_list">
					<LoadingAnimation/>
				</div>
			)
		)
	}
	return (
		<Wrapper>
			<CenterBlock width={1140}>
				<h2 className="tab_heading">Ambassador</h2>
				<p className="tab_description">Now you are a part of MetaFi enthusiasts team</p>
				<div className="tabs_block">
					<div className="tab_list">
						{
							tabsArray.map((item, index) => {
								return (
									<button
										onClick={() => setTab(item.value)}
										className={`tab_button ${tab === item.value ? "active" : ""}`}
										key={index}
									>
										{item.title} {item.total && <span>{numberFormat(item.total)}</span>}
									</button>
								)
							})
						}
					</div>
					<button className={`tab_button ${tab === "faq" ? "active" : ""}`} onClick={() => setTab("faq")}>FAQ</button>
				</div>
				{renderLists()}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 80px;
	@media only screen and (max-width: 600px) {
		margin-top: 40px;
	}
	.tab_heading{
		font-size: 30px;
		line-height: 36px;
	}
	.tab_description{
		font-size: 16px;
		line-height: 120%;
		color: #7B8199;
		margin-top: 10px;
	}
	.list{
		display: grid;
		margin-top: 60px;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 16px 20px;
		@media only screen and (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media only screen and (max-width: 768px) {
			display: flex;
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
			grid-gap: 0;
		}
		.item{
			@media only screen and (max-width: 768px) {
				width: calc(100% - 20px);
				margin-right: 20px;
				flex: 0 0 auto;
				scroll-snap-align: start;
				&:last-child{
					margin-right: 0;
				}
			}
		}
	}
	.rewards_list{
		margin-top: 60px;
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
	.tab_list{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -10px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			width: 100%;
			margin-bottom: 0;
		}
	}
	.tab_button{
		width: auto;
		margin-right: 10px;
		margin-bottom: 10px;
		border: 1px solid #DDDFE4;
		border-radius: 100px;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		padding: 10px 25px;
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-right: 0;
		}
		&:hover{
			background: #F6F7F8;
		}
		&:disabled{
			opacity: .5;
			&:hover{
				background: transparent;
			}
		}
		span{
			color: #A2A8B7;
			margin-left: 10px;
		}
		&.active{
			background: #191B20;
			color: #F9F9F9;
		}
	}
	.tabs_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 62px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			width: 100%;
		}
	}
	.faq_list{
		margin-top: 60px;
	}
	.loading_list{
		padding: 80px 0;
		display: flex;
		justify-content: center;
	}
`