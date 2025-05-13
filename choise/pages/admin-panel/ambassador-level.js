import Seo from "helpers/Seo";
import AdminPanelWrapper from "layouts/AdminPanel/AdminPanelWrapper";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";
export default function AmbassadorLevel(){
	const {wallet} = useSnapshot(stateWeb3)
	const [level, setLevel] = useState("")
	const [percent, setPercent] = useState("")
	const [array, setArray] = useState([])
	useEffect(() => {
		axios.get("/api/ambassador/admin/ambassador-level", {
			params: {
				adminWallet: wallet
			}
		}).then(r => setArray(r.data))
		return () => {
			setLevel("")
			setPercent("")
			setArray([])
		}
	}, [])
	const onHandleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<>
			<Seo title="Ambassador Levels"/>
			<AdminPanelWrapper title="Ambassador Levels">
				<Wrapper>
					<div className="level_heading">
						<form onSubmit={onHandleSubmit}>
							<input type="number" value={level} onChange={(e) => setLevel(e.target.value)} placeholder="Level number" required={true} onWheel={e => e.currentTarget.blur()}/>
							<input type="number" value={percent} onChange={(e) => setPercent(e.target.value)} placeholder="Percent number" required={true} onWheel={e => e.currentTarget.blur()}/>
							<button className="add_level">Add Level</button>
						</form>
					</div>
					<table cellPadding={0} cellSpacing={0} className="list">
						<thead>
							<tr>
								<td>Level</td>
								<td>Percent</td>
								<td>&nbsp;</td>
							</tr>
						</thead>
						<tbody>
							{
								array.map(item => {
									return (
										<tr key={item.id}>
											<td>{item.level}</td>
											<td>+{item.percent}%</td>
											<td>
												<div className="button_list">
													<button className="edit_button">Edit</button>
													<button className="delete_button">Delete</button>
												</div>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</Wrapper>
			</AdminPanelWrapper>
		</>
	)
}

const Wrapper = styled.div`
	.level_heading{
		display: flex;
		align-items: center;
		justify-content: space-between;
		form{
			display: flex;
			align-items: center;
			input{
				width: auto;
				border: 1px solid #B0B3C2;
				padding: 10px;
				height: 30px;
				margin-right: 10px;
				border-radius: 5px;
			}
		}
	}
	.add_level{
		width: auto;
		background: #191B20;
		color: #F9F9F9;
		border-radius: 5px;
		padding: 10px;
		height: 30px;
	}
	.list{
		max-width: 400px;
		width: 100%;
		margin-top: 25px;
	}
	thead{
		td{
			padding-bottom: 10px;
			font-weight: bold;
			font-size: 14px;
		}
	}
	tbody{
		tr:last-child td{
			border-bottom: none;
			padding: 7px 0 0 0;
		}
		td{
			padding: 7px 0;
			border-bottom: 1px solid #B0B3C2;
			font-size: 15px;
		}
	}
	.button_list{
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.edit_button, .delete_button{
		width: auto;
		margin-right: 15px;
		&:last-child{
			margin-right: 0;
		}
	}
	.delete_button{
		color: #FF7D53;
	}
`