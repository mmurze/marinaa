import styled from "styled-components";
import moment from "moment/moment";
import numberFormat from "helpers/numberFormat";
import {useEffect, useState} from "react";
import {useSnapshot} from "valtio";
import {state} from "state";
import axios from "axios";
import {stateWeb3} from "state/web3";

export default function AmbUserItem({item}) {
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [level, setLevel] = useState(item.amb_level)
	const [save, setSave] = useState(false)
	const [visible, setVisible] = useState(false)
	const [task, setTask] = useState([])
	const levelArray = [1, 2, 3, 4]
	
	useEffect(() => {
		if (level !== item.amb_level) setSave(true)
	}, [level])
	
	const onHandleClick = () => {
		axios.post("/api/ambassador/admin/update-amb-level", {
			adminWallet: wallet, level, id: item.id
		}).then(r => {
			if (r.data.status) setSave(false)
		})
	}
	
	const initUserData = () => {
		setLevel(item.amb_level)
		setSave(false)
	}
	
	const getTasks = () => {
		setVisible(!visible)
		if (!task.length) {
			axios.get("/api/ambassador/admin/get-user-tasks", {params: {
					adminWallet: wallet,
					id: item.id
			}}).then(r => setTask(r.data.data))
		}
	}
	const statusArray = [
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
	
	const renderStatus = (id) => {
		return statusArray.find(item => item.value === +id).title
	}
	return (
		<Wrapper className="item">
			<div className="item_position">
				<div className="user_info">
					<select className="user_level" value={level} onChange={(e) => setLevel(e.target.value)}>
						{
							levelArray.map((item, index) => {
								return <option value={item} key={index}>{item}</option>
							})
						}
					</select>
					<p className="date">{moment(item.registration_date).format("DD.MM.YYYY")}</p>
					<p className="phone">{item.phone}</p>
					<p className="wallet">{item.wallet}</p>
				</div>
				<div className="item_sidebar">
					<p className="points">{numberFormat(item.points)}</p>
					{save && (
						<div className="action_buttons">
							<button className="save_button" onClick={onHandleClick}>Save</button>
							<button className="cancel_button" onClick={initUserData}>Cancel</button>
						</div>
					)}
					<button onClick={getTasks} className={`show_more_button ${visible ? "active" : ""}`}>
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M5.29957 9.40164C5.62316 9.07567 6.14779 9.07567 6.47137 9.40164L10.0284 12.9849L13.5854 9.40164C13.909 9.07567 14.4337 9.07567 14.7572 9.40164C15.0808 9.72761 15.0808 10.2561 14.7572 10.5821L10.6143 14.7555C10.2907 15.0815 9.76609 15.0815 9.44251 14.7555L5.29957 10.5821C4.97599 10.2561 4.97599 9.72761 5.29957 9.40164Z"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M0 0.833333C0 0.373096 0.375384 0 0.838444 0H6.70755C7.8194 0 8.88571 0.438987 9.6719 1.22039C10.4581 2.00179 10.8998 3.0616 10.8998 4.16667V14.1667C10.8998 14.6269 10.5244 15 10.0613 15C9.59827 15 9.22288 14.6269 9.22288 14.1667V4.16667C9.22288 3.50363 8.95788 2.86774 8.48616 2.3989C8.01445 1.93006 7.37466 1.66667 6.70755 1.66667H0.838444C0.375384 1.66667 0 1.29357 0 0.833333Z"/>
						</svg>
					</button>
				</div>
			</div>
			<div className={`item_information ${visible ? "active" : ""}`}>
				<table cellSpacing={0} cellPadding={0}>
					<thead>
						<td>Date</td>
						<td>Task Points</td>
						<td>Task Name</td>
						<td>User message</td>
						<td>Status</td>
					</thead>
					<tbody>
						{
							task.map(item => {
								return (
									<tr className="task_item" key={item.id}>
										<td>{moment(item.date).format("DD.MM.YYYY")}</td>
										<td><strong>{numberFormat(item.task_points)}</strong></td>
										<td>{renderTitle(item.ambassador_tasks_id)}</td>
										<td>{item.user_message}</td>
										<td>{renderStatus(item.status)}</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-bottom: 10px;
	&:last-child{
		margin-bottom: 0;
	}
	&:nth-child(odd){
		.item_position{
			background: #F6F7F8;
		}
	}
	.item_position{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 7px 10px;
		border-radius: 5px;
	}
	.points{
		margin-left: 20px;
		font-weight: bold;
	}
	.user_info{
		display: flex;
		align-items: center;
		font-size: 16px;
	}
	.phone {
		color: #0885FD;
		width: 120px;
	}
	.wallet{
		font-size: 13px;
	}
	.user_level{
		background: #191B20;
		color: #F9F9F9;
		border-radius: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 20px;
		height: 20px;
		font-size: 12px;
		line-height: 14px;
		font-weight: bold;
		margin-right: 10px;
		cursor: pointer;
	}
	.date{
		margin-right: 10px;
		width: 60px;
		font-size: 13px;
	}
	.item_sidebar{
		display: flex;
		align-items: center;
	}
	.action_buttons{
		display: flex;
		align-items: center;
		margin-left: 30px;
		button{
			width: auto;
			margin-right: 20px;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.save_button{
		color: #0885FD;
	}
	.cancel_button{
		color: #7b8199;
		&:hover{
			color: #191B20;
		}
	}
	.show_more_button{
		margin-left: 20px;
		width: 25px;
		height: 25px;
		border-radius: 5px;
		border: 2px solid #7C8199;
		padding: 4px;
		svg{
			fill: #7C8199;
		}
		&.active{
			transform: rotate(-180deg);
		}
		&:hover, &.active{
			border: 2px solid #191B20;
			svg{
				fill: #191B20;
			}
		}
	}
	.item_information{
		display: none;
		margin-top: 10px;
		padding: 7px 10px;
		border-radius: 5px;
		background: #F6F7F8;
		margin-bottom: 20px;
		table{
			width: 100%;
			font-size: 14px;
			thead td{
				padding-bottom: 10px;
				border-bottom: 1px solid #191B20;
			}
			td:last-child{
				text-align: right;
			}
			tbody{
				td{
					padding: 5px 0;
					border-bottom: 1px solid #ebebeb;
					&:nth-child(1){
						width: 90px;
					}
					&:nth-child(2){
						width: 90px;
					}
					&:nth-child(3){
						width: 230px;
						padding-right: 20px;
					}
				}
				tr:last-child td{
					border-bottom: none;
				}
			}
		}
		&.active{
			display: block;
		}
	}
`