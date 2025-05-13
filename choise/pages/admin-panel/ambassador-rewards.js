import Seo from "helpers/Seo";
import AdminPanelWrapper from "layouts/AdminPanel/AdminPanelWrapper";
import styled from "styled-components";
import Title from "components/Title";
import {useEffect, useState} from "react";
import AdminPanelRewardsItem from "layouts/AdminPanel/AdminPanelRewardsItem";
import axios from "axios";
import {renderRewardsArray} from "utils/ambassador";
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";
import Router from "next/router";
import AdminPagination from "components/AdminPanel/AdminPagination";

export default function AmbassadorRewards({page}){
	const {wallet} = useSnapshot(stateWeb3)
	const [rewardArray, setRewardArray] = useState([])
	const [array, setArray] = useState([])
	const [total, setTotal] = useState(null)
	const [status, setStatus] = useState(3)
	const limit = 20
	const statusArray = [
		{
			"title": "All",
			"value": 4
		},
		{
			"title": "Approved",
			"value": 1
		},
		{
			"title": "Refused",
			"value": 2
		},
		{
			"title": "Pending",
			"value": 3
		}
	]
	
	useEffect(() => {
		renderRewardsArray().then(r => setRewardArray(r))
		return () => setRewardArray([])
	}, [])
	
	useEffect(() => {
		Router.push("/admin-panel/ambassador-rewards?page=1").then(makeRequest)
	}, [status])
	
	useEffect(() => {
		if (wallet) makeRequest()
	}, [page, wallet])
	
	const makeRequest = () => {
		axios.get("/api/ambassador/admin/get-rewards-list", {params: {
				adminWallet: wallet, page, limit, status}})
			.then(r => {
				if (r.data.status) {
					setArray(r.data.data)
					setTotal(r.data.total)
				}
			}).catch(error => console.log(error))
	}
	const renderTitle = (rewardId) => {
		const data = rewardArray.find(item => item.id === rewardId)
		if (data) {
			return data.title
		} else return 0
	}
	return (
		<>
			<Seo title="Ambassador Rewards"/>
			<AdminPanelWrapper title="Ambassador Rewards">
				<Wrapper>
					<div className="heading_title">
						<Title><h5>Rewards history</h5></Title>
						<select
							className="status_select_filter"
							onChange={(e) => setStatus(e.target.value)}
							value={status}
						>
							{
								statusArray.map((item, index) => {
									return (
										<option key={index} value={item.value}>
											{item.title}
										</option>
									)
								})
							}
						</select>
					</div>
					<div className="history_table">
						{
							array.map((item, index) => {
								return (
									<AdminPanelRewardsItem
										title={renderTitle(item.ambassador_reward_id)}
										item={item}
										key={index}
									/>
								)
							})
						}
					</div>
					<AdminPagination
						page={page}
						total={total}
						onClick={(e) => Router.push(`/admin-panel/ambassador-rewards?page=${e}`)}
					/>
				</Wrapper>
			</AdminPanelWrapper>
		</>
	)
}

const Wrapper = styled.div`
	.history_table{
		width: 100%;
		margin-top: 30px;
	}
	.heading_title{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.status_select_filter{
		background: #191B20;
		border-radius: 100px;
		padding: 10px 25px;
		height: 44px;
		cursor: pointer;
		color: #F9F9F9;
	}
`
export async function getServerSideProps(ctx) {
	return { props: {page: ctx.query.page ? ctx.query.page : 1} }
}