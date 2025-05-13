import styled from "styled-components";
import numberFormat from "helpers/numberFormat";
import {useEffect, useState} from "react";
import {getPointsUserList} from "utils/ambassador";
import {useSnapshot} from "valtio";
import {state} from "state";
import moment from "moment/moment";

export default function AmbassadorHistoryPoints() {
	const snap = useSnapshot(state);
	const [array, setArray] = useState([])
	const [total, setTotal] = useState(null)
	const [page, setPage] = useState(1)
	const limit = 10
	useEffect(() => {
		if (snap.verificatedUser) {
			getPointsUserList({
				profileUserId: snap.profileUserId,
				page, limit
			})
				.then(r => {
					if (r.status) {
						setArray(array.concat(r.data))
						setTotal(r.total)
					}})
				.catch(error => console.log(error))
		}
	}, [page])
	return (
		array.length ? (
			<Wrapper className="history_item">
				<div className="block_title">Points history</div>
				<div className="history_table">
					<table>
						<thead>
						<tr>
							<td><span>№</span></td>
							<td><span>Date</span></td>
							<td><span>Reason</span></td>
							<td><span>Amount</span></td>
						</tr>
						</thead>
						<tbody>
						{
							array.map((item, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{moment(item.date).format("DD.MM.YYYY")}</td>
										<td>{item.reason}</td>
										<td className={item.amount < 0 ? "sub" : "add"}>{numberFormat(item.amount)}</td>
									</tr>
								)
							})
						}
						</tbody>
					</table>
				</div>
				{array.length && page !== total ? <button onClick={() => setPage(page + 1)} className="show_more_history">Show more</button> : null}
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	td:last-child{
		width: 100px;
	}
	.add{
		color: #0285FD;
	}
	.sub{
		color: #FF6464;
	}
`