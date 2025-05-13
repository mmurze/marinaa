import styled from "styled-components";
import {useEffect, useState} from "react";
import NftTokenItem from "components/Nft/NftTokenItem";
import NftTokenProfileGrid from "components/Nft/NftTokenProfileGrid";
import {useSnapshot} from "valtio";
import {state} from "state";
import {getProfileTokens} from "utils/nft";
import InfiniteScroll from "helpers/InfiniteScroll";
import CustomSelectValues from "components/CustomSelectValues";
import NftLoadingNotFound from "components/NftLoadingNotFound";
import CheckWalletNetwork from "components/CheckWalletNetwork";

export default function ProfileLastRoundTokens({children}) {
	const snap = useSnapshot(state);
	const [total, setTotal] = useState(null)
	const [page, setPage] = useState(1)
	const [array, setArray] = useState([])
	const [filter, setFilter] = useState("all")
	useEffect(() => {
		if (snap.refreshNftList) {
			const f = async () => {
				await setPage(1)
				await setTotal(null)
				await setArray(null)
				await makeRequest()
			}
			if (snap.mint) {
				f()
				state.refreshNftList = false
			}
		}
	}, [snap.refreshNftList])
	
	useEffect(() => {
		const f = async () => {
			await setPage(1)
			await setTotal(null)
			await setArray(null)
			await makeRequest()
		}
		if (snap.mint) f()
	}, [filter])
	
	useEffect(() => {
		if (page !== 1 && snap.mint) makeRequest()
	}, [page])
	
	const makeRequest = () => {
		getProfileTokens(page, filter, snap.ownerLastCallRoundNft)
			.then(r => {
				if (r.isSuccess) {
					if (page === 1) {
						setArray(r.data)
					} else setArray([...array, ...r.data])
					if (r.meta) {
						setTotal(r.meta.pagination.total)
					} else setTotal(1)
				} else setTotal(null)
			})
	}
	
	const filterArray = [
		{
			"title": "all",
			"value": "all"
		},
		{
			"title": "platinum",
			"value": "platinum"
		},
		{
			"title": "gold",
			"value": "gold"
		},
		{
			"title": "silver",
			"value": "silver"
		},
		{
			"title": "bronze",
			"value": "bronze"
		}
	]
	
	return (
		<Wrapper>
			<div className="top_filters">
				{children}
				<CustomSelectValues
					width={150}
					label="Type"
					array={filterArray}
					onClick={setFilter}
					value={filter}
				/>
			</div>
			<CheckWalletNetwork defaultNetwork="binance">
				{
					array ? (
						array.length > 0 ? (
							<NftTokenProfileGrid profile={true} type={filter}>
								{
									array.map((item, index) => {
										return <NftTokenItem profile={true} sale={true} item={item} key={index}/>
									})
								}
							</NftTokenProfileGrid>
						) : <NftLoadingNotFound loading={false}/>
					) : <NftLoadingNotFound loading={true}/>
				}
				<InfiniteScroll total={total} page={page} onCallBack={setPage}/>
			</CheckWalletNetwork>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 40px;
	.token_list{
		margin-top: 70px;
	}
	.top_filters{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		position: relative;
		z-index: 20;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.filters{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: -10px;
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
			justify-content: flex-start;
			flex-direction: column;
			width: 100%;
		}
		li{
			margin-right: 15px;
			border-radius: 500px;
			height: 32px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			border: 1px solid #EBEBEB;
			padding: 0 16px;
			cursor: pointer;
			transition: all .3s ease-in-out;
			margin-bottom: 10px;
			@media only screen and (max-width: 600px) {
				width: 100%;
				margin-right: 0;
				height: 45px;
			}
			&.active{
				background: #FFFB1F;
				border: 1px solid #FFFB1F;
				transition: all .3s ease-in-out;
			}
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.custom_select_values{
		@media only screen and (max-width: 820px) {
			margin-top: 30px;
			max-width: 100%;
		}
	}
`