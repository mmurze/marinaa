import styled from "styled-components";
import {
	findTaskById,
	getTasksUserList,
	statusHistoryClass,
	statusHistoryLabel
} from "utils/ambassador";
import {useEffect, useState} from "react";
import {useSnapshot} from "valtio";
import {state} from "state";
import moment from "moment";
import Modal from "components/Modal";
import AmbassadorTaskItem from "layouts/Ambassador/AmbassadorTaskItem";
export default function AmbassadorHistoryTasks() {
	const snap = useSnapshot(state);
	const [array, setArray] = useState([])
	const [total, setTotal] = useState(null)
	const [page, setPage] = useState(1)
	const [visible, setVisible] = useState(false)
	const [modalItem, setModalItem] = useState(null)
	
	const limit = 10
	useEffect(() => {
		if (snap.verificatedUser) {
			getTasksUserList({
				profileUserId: snap.profileUserId, page, limit
			})
				.then(r => {
					if (r.status) {
						setArray(array.concat(r.data))
						setTotal(r.total)
					}
				})
				.catch(error => console.log(error))
		}
	}, [page])
	
	const onHandleClick = async (item) => {
		if (item.ambassador_tasks_id !== 1) {
			const data = await findTaskById(item.ambassador_tasks_id)
			if (data){
				setVisible(true)
				setModalItem({...data, user_message: item.user_message})
			}
		} else {
			setVisible(true)
			setModalItem({
				"id": 1,
				"title": "Welcome task 👋",
				"content": "<p>Complete all steps to sign up for the Ambassador program.</p>",
				"welcome": true,
				"user_message": "Welcome task completed. You have successfully claimed the reward.",
				"tags": ["Everyone"],
				"points": 200,
				"single": true
			})
		}
	}
	
	return (
		array.length ? (
			<Wrapper className="history_item">
				<Modal active={visible} onCallBack={() => {
					setVisible(false)
					setTimeout(() => {
						setModalItem(null)
					}, 400)
				}}>
					<AmbassadorTaskItem modal={true} item={modalItem}/>
				</Modal>
				<div className="block_title">Tasks history</div>
				<div className="history_table">
					<table>
						<thead>
						<tr>
							<td><span>№</span></td>
							<td><span>Task ID</span></td>
							<td><span>Date</span></td>
							<td><span>Status</span></td>
							<td><span>Comment</span></td>
						</tr>
						</thead>
						<tbody>
						{
							array.map((item, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td className="id_modal" onClick={() => onHandleClick(item)}><span>{item.ambassador_tasks_id}</span></td>
										<td>{moment(item.date).format("DD.MM.YYYY")}</td>
										<td className={statusHistoryClass(item.status)}>{statusHistoryLabel(item.status)}</td>
										<td>{item.comment}</td>
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
	tbody td{
		&:first-child{
			width: 100px;
		}
		&:nth-child(2){
			width: 200px;
		}
		&:nth-child(3){
			width: 150px;
		}
		&:last-child{
			width: 200px;
		}
	}
	.approved{
		color: #24BE74;
	}
	.refused{
		color: #FF6464;
	}
	.pending{
		color: #7B8199;
	}
	.id_modal{
		span{
			cursor: pointer;
			border-bottom: 1px dashed #0285FD;
			color: #0285FD;
		}
	}
`