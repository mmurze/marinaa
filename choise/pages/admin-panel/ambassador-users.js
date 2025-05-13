import Seo from "helpers/Seo";
import AdminPanelWrapper from "layouts/AdminPanel/AdminPanelWrapper";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import AdminPagination from "components/AdminPanel/AdminPagination";
import AmbUserItem from "components/AdminPanel/AmbUserItem";
import { animateScroll as scroll } from 'react-scroll'
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";

export default function AmbassadorUsers(){
	const {wallet} = useSnapshot(stateWeb3)
	const [array, setArray] = useState([])
	const [page, setPage] = useState("1")
	const [total, setTotal] = useState(null)
	const [limit, setLimit] = useState(30)
	const [level, setLevel] = useState("all")
	
	useEffect(() => {
		if (wallet && page) {
			makeRequest()
		} else setPage("1")
		scroll.scrollTo(30);
	}, [page, wallet])
	
	const makeRequest = () => {
		axios.get("/api/ambassador/admin/get-users-list", {params: {
				adminWallet: wallet, page, limit, level}})
			.then(r => {
				if (r.data.status) {
					setArray(r.data.data)
					setTotal(r.data.total)
				}
			})
			.catch(error => console.log(error))
	}
	const limitArray = [10, 30, 50, 100]
	const levelArray = ["all", 1, 2, 3, 4]
	return (
		<>
			<Seo title="Ambassador Users"/>
			<AdminPanelWrapper title="Ambassador Users">
				<Wrapper>
					<div className="filter">
						<div className="filter_item">
							<p>User Level</p>
							<select value={level} onChange={(e) => {
								setLevel(e.target.value)
								setPage(null)
							}}>
								{
									levelArray.map((item, index) => {
										return <option value={item} key={index}>{item}</option>
									})
								}
							</select>
						</div>
						<div className="filter_item">
							<p>List limit</p>
							<select value={limit} onChange={(e) => {
								setLimit(e.target.value)
								setPage(null)
							}}>
								{
									limitArray.map((item, index) => {
										return <option value={item} key={index}>{item}</option>
									})
								}
							</select>
						</div>
					</div>
					<div className="list">
						{
							array.map(item => {
								return <AmbUserItem item={item} key={item.id}/>
							})
						}
					</div>
					<AdminPagination total={total} page={page} onClick={setPage} limit={limit}/>
				</Wrapper>
			</AdminPanelWrapper>
		</>
	)
}

const Wrapper = styled.div`
	.list{
		margin-top: 20px;
	}
	.filter{
		display: flex;
		align-items: center;
		border-bottom: 1px solid #ebebeb;
		padding: 10px 20px;
		position: sticky;
		top: 90px;
		margin-top: -10px;
		background: #F9F9F9;
		select{
			width: 35px;
			height: 25px;
			text-align: center;
			cursor: pointer;
			background: #191B20;
			color: #F9F9F9;
			border: none;
			border-radius: 5px;
			font-weight: bold;
		}
	}
	.filter_item{
		display: flex;
		align-items: center;
		margin-right: 20px;
		p{
			font-size: 13px;
			margin-right: 10px;
		}
		&:last-child{
			margin-right: 0;
		}
	}
`