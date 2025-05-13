import styled from "styled-components";
import {useState} from "react";
import moment from "moment/moment";
import {statusHistoryClass, statusHistoryLabel} from "utils/ambassador";
import numberFormat from "helpers/numberFormat";
import {takeRewardItem, writeRewardUser} from "utils/admin-panel";
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";

export default function AdminPanelRewardsItem({item, title}) {
	const {wallet} = useSnapshot(stateWeb3)
	const [loading, setLoading] = useState(false)
	const [itemData, setItemData] = useState(item)
	const [status, setStatus] = useState(item.status)
	const [comment, setComment] = useState(item.comment ? item.comment : "")
	const [addComment, setAddComment] = useState(!!item.comment)
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
			await writeRewardUser({
				adminWallet: wallet,
				status,
				rewardId: item.ambassador_reward_id,
				points: item.reward_points,
				reason: comment,
				profileUserId: item.profile_users_id,
				rewardTableId: item.id
			})
			const data = await takeRewardItem({
				rewardId: item.id,
				adminWallet: wallet
			})
			setItemData(data)
			setComment(data.comment)
			setLoading(false)
			setAddComment(true)
		} catch (error) {
			setLoading(false)
		}
	}
	return (
		itemData ? (
			<Wrapper className="item">
				<ul className="heading">
					<li>Task ID: <strong>{itemData.ambassador_reward_id}</strong> / Table ID: <strong>{item.id}</strong></li>
					<li>{moment(item.date).format("DD.MM.YYYY")}</li>
				</ul>
				<ul className="user_block">
					<li className="title_item">{title}, User ID: {item.profile_users_id}</li>
					{item.phone && <li className="phone">{item.phone}</li>}
				</ul>
				<div className="status_block">
					<div className={`status ${statusHistoryClass(itemData.status)}`}>{statusHistoryLabel(itemData.status)}</div>
					<div className="status_select_block">
						<p className="points">{numberFormat(item.reward_points)} points</p>
						<select
							disabled={loading || itemData.status === 1 || itemData.status === 2}
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
						{+itemData.status === 3 && (
							<button disabled={+status === 3 || loading} onClick={changeTaskStatus}>
								{loading ? "Loading" : "Save"}
							</button>
						)}
					</div>
				</div>
				{
					itemData.status === 3 ? (
						<div className="comment_box">
							<div className="add_comment" onClick={() => setAddComment(!addComment)}>
						<span className={addComment ? "active" : ""}>
							<img src="/pic/ambassador/agree-check.svg" alt="Agree"/>
						</span>
								<p>{addComment ? "Hide Comment" : "Show Comment"}</p>
							</div>
							{addComment && (
								<textarea
									value={comment}
									onChange={(e) => setComment(e.target.value)}
								/>
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
		.phone{
			color: #0285FD;
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
	.points{
		margin-right: 15px;
	}
	.title_item{
		font-size: 14px;
		background: #0285FD;
		padding: 5px 10px;
		color: #F9F9F9;
		border-radius: 3px;
	}
`