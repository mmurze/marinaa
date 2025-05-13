import styled from "styled-components";
import moment from "moment";
import {statusHistoryClass, statusHistoryLabel} from "utils/ambassador";
import {useState} from "react";
import {takePointsToUser, takeTaskItem, takeTaskStatus, writePointsToUser} from "utils/admin-panel";
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";
export default function AdminPanelTasksItem({item, title}) {
	const {wallet} = useSnapshot(stateWeb3)
	const [loading, setLoading] = useState(false)
	const [itemData, setItemData] = useState(item)
	const [status, setStatus] = useState(item.status)
	const [comment, setComment] = useState(item.comment ? item.comment : "")
	const [addComment, setAddComment] = useState(!!item.comment)
	const [taskPoint, setTaskPoint] = useState(item.task_points)
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
	const changeTaskStatus = async () => {
		setLoading(true)
		try {
			await takeTaskStatus({
				status: +status,
				adminWallet: wallet,
				userTaskId: item.id,
				comment
			})
			await takePointsToUser({
				status,
				points: taskPoint,
				adminWallet: wallet,
				profileUserId: item.profile_users_id
			})
			if (+status === 1) {
				await writePointsToUser({
					adminWallet: wallet,
					profileUserId: item.profile_users_id,
					points: taskPoint,
					reason: `Task ID ${item.ambassador_tasks_id} Result: Approve`,
					taskId: item.id
				})
			}
			const data = await takeTaskItem({
				taskId: item.id,
				adminWallet: wallet
			})
			setItemData(data)
			setComment(data.comment)
			setLoading(false)
			setAddComment(true)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}
	
	return (
		itemData ? (
			<Wrapper className="item">
				<ul className="heading">
					<li>Task ID: <strong>{itemData.ambassador_tasks_id}</strong> / Table ID: <strong>{item.id}</strong></li>
					<li>{moment(item.date).format("DD.MM.YYYY")}</li>
				</ul>
				<ul className="user_block">
					<li className="title_item">{title}</li>
					<li className="user_details">
						<p className="phone">{item.phone}</p>
						<p className="amb_level">{item.amb_level}</p>
					</li>
				</ul>
				<p className="user_message">{itemData.user_message}</p>
				<div className="status_block">
					<div className={`status ${statusHistoryClass(itemData.status)}`}>{statusHistoryLabel(itemData.status)}</div>
					<div className="status_select_block">
						<div className="points_block">
							<input
								type="number"
								className="points"
								value={+taskPoint}
								onChange={(e) => setTaskPoint(e.target.value)}
								placeholder="Task points"
								onWheel={e => e.currentTarget.blur()}
							/>
							<p>Points</p>
							<button
								onClick={() => setTaskPoint(item.task_points)}
								className="reset_points"
							><img src="/pic/admin-panel/reset.svg" alt="reset"/></button>
						</div>
						<select
							disabled={loading || +itemData.status === 1}
							className={`status_select ${statusHistoryClass(+status)}`}
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
						{itemData.status !== 1 && (
							<button disabled={+status === 3 || loading} onClick={changeTaskStatus}>
								{loading ? "Loading" : "Save"}
							</button>
						)}
					</div>
				</div>
				{
					+item.status !== 1 ? (
						<div className="comment_box">
							<div className="add_comment" onClick={() => setAddComment(!addComment)}>
						<span className={addComment ? "active" : ""}>
							<img src="/pic/ambassador/agree-check.svg" alt="Agree"/>
						</span>
								<p>{addComment ? "Hide Comment" : "Show Comment"}</p>
							</div>
							{addComment && +item.status !== 1 && (
								<textarea value={comment} onChange={(e) => setComment(e.target.value)}/>
							)}
						</div>
					) : (
						<p className="status_comment">{comment}</p>
					)
				}
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	margin-bottom: 30px;
	border-bottom: 1px solid #80889C;
	padding-bottom: 30px;
	&:last-child{
		margin-bottom: 0;
		padding-bottom: 0;
		border-bottom: none;
	}
	.heading{
		display: flex;
		justify-content: space-between;
		li{
			margin-right: 10px;
			font-size: 14px;
			line-height: 110%;
			color: #80889C;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.user_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 5px;
		font-size: 12px;
		line-height: 110%;
		a{
			color: #0285FD;
			text-decoration: underline;
		}
		li:last-child{
			a{
				text-align: right;
			}
		}
	}
	.user_message{
		margin-top: 20px;
		font-size: 16px;
		line-height: 1.6;
		color: #656D81;
		background: #F6F7F8;
		border-radius: 20px;
		padding: 15px;
	}
	.status_block{
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.status{
		font-size: 14px;
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
	.status_select{
		padding: 5px 10px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		&:disabled{
			cursor: default;
		}
		&.approved{
			background: #24BE74;
			color: #F9F9F9;
		}
		&.refused{
			background: #FF6464;
			color: #F9F9F9;
		}
		&.pending{
			background: #7B8199;
			color: #F9F9F9;
		}
	}
	.status_select_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		button{
			width: auto;
			margin-left: 15px;
			&:disabled{
				opacity: .4;
				cursor: default;
			}
		}
	}
	.status_comment{
		margin-top: 10px;
		font-size: 16px;
		line-height: 140%;
		color: #7B8199;
	}
	.comment_box{
		margin-top: 10px;
		textarea{
			width: 100%;
			margin-top: 10px;
			height: 100px;
			border: 1px solid #DDDFE4;
			padding: 10px;
			resize: none;
			font-size: 16px;
			line-height: 120%;
		}
	}
	.add_comment{
		display: flex;
		align-items: center;
		cursor: pointer;
		&:hover{
			p{
				color: #191B20;
				transition: .3s ease-in-out;
			}
		}
		span{
			width: 18px;
			height: 18px;
			border: 1px solid #0285FD;
			border-radius: 3px;
			transition: .3s ease-in-out;
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: 0;
			text-align: center;
			&.active{
				background: #0285FD;
				transition: .3s ease-in-out;
			}
		}
		p{
			width: calc(100% - 18px);
			padding-left: 10px;
			font-size: 14px;
			line-height: 120%;
			color: #80889C;
			transition: .3s ease-in-out;
		}
	}
	.points_block{
		display: flex;
		align-items: center;
		margin-right: 15px;
		.reset_points{
			width: 16px;
		}
		p{
			font-size: 12px;
		}
	}
	.points{
		width: 80px;
		border: 1px solid #B0B3C2;
		height: 25px;
		padding: 10px;
		margin-right: 5px;
	}
	.phone{
		color: #0285FD;
	}
	.title_item{
		font-size: 14px;
		background: #0285FD;
		padding: 5px 10px;
		color: #F9F9F9;
		border-radius: 3px;
	}
	.user_details{
		display: flex;
		align-items: center;
	}
	.amb_level{
		margin-left: 10px;
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
		cursor: default;
	}
`