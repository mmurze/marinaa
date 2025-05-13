import Seo from "helpers/Seo";
import AdminPanelWrapper from "layouts/AdminPanel/AdminPanelWrapper";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSnapshot} from "valtio";
import {state} from "state";
import Title from "components/Title";
import styled from "styled-components";
import AdminPanelTasksItem from "layouts/AdminPanel/AdminPanelTasksItem";
import {stateWeb3} from "state/web3";
import Router from "next/router";
import AdminPagination from "components/AdminPanel/AdminPagination";

export default function AmbassadorTasks({page}){
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [array, setArray] = useState([])
	const [total, setTotal] = useState(null)
	const [status, setStatus] = useState(3)
	const limit = 20
	
	useEffect(() => {
		if (wallet) makeRequest()
	}, [page, wallet])
	
	useEffect(() => {
		Router.push("/admin-panel/ambassador-tasks?page=1").then(makeRequest)
	}, [status])
	
	const makeRequest = () => {
		axios.get("/api/ambassador/admin/get-task-lists", {params: {
				adminWallet: wallet, page, limit, status}})
			.then(r => {
				if (r.data.status) {
					setArray(r.data.data)
					setTotal(r.data.total)
				}
			}).catch(error => console.log(error))
	}
	
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
	const renderTitle = (taskId) => {
		const data = snap.ambassadorTasksArray.find(item => item.id === taskId)
		if (data) {
			return data.title
		} else return 0
	}
	return (
		<>
			<Seo title="Ambassador Tasks"/>
			<AdminPanelWrapper title="Ambassador Tasks">
				<Wrapper>
					<div className="heading_title">
						<Title><h5>Tasks history</h5></Title>
						<select
							className="status_select_filter"
							onChange={(e) => setStatus(e.target.value)}
							value={status}
						>
							{
								statusArray.map((item, index) => {
									return (
										<option key={index} value={item.value}>{item.title}</option>
									)
								})
							}
						</select>
					</div>
					<div className="history_table">
						{
							array.map((item, index) => {
								return (
									<AdminPanelTasksItem
										title={renderTitle(item.ambassador_tasks_id)}
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
						onClick={(e) => Router.push(`/admin-panel/ambassador-tasks?page=${e}`)}
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