import styled from "styled-components";
import Title from "components/Title";
import {useEffect, useState} from "react";
import axios from "axios";
import Input from "components/Forms/Input";
import numberFormat from "helpers/numberFormat";

export default function AdminPanelBitDriven() {
	const [success, setSuccess] = useState(false)
	const [total, setTotal] = useState(0)
	useEffect(() => {
		getTotal()
	}, [])

	const getTotal = () => {
		axios.get("/api/admin-panel-bitdriven", {params: {token: "5Gk6LFKfN586R1hysEX824kwqw17Z7Gg"}}).then(r => {
			setTotal(r.data.total)
		})
	}
	const onHandleSubmit = (e) => {
		e.preventDefault()
		axios.post("/api/admin-panel-bitdriven", {token: "5Gk6LFKfN586R1hysEX824kwqw17Z7Gg", total}).then(r => {
			if (r.data.status) {
				setSuccess(true)
				setTimeout(() => {
					setSuccess(false)
					getTotal()
				}, 3000)
			}
		})
	}
	return (
		<Wrapper>
			<Title><h4>Bitdriven total: {numberFormat(total)}</h4></Title>
			<form onSubmit={onHandleSubmit}>
				<Input value={total} onChange={setTotal} required={true} placeholder="Bitdriven top total" type="number"/>
				<button disabled={total <= 0 || success}>{success ? "Success update" : "Update total"}</button>
			</form>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 40px;
	border-top: 1px solid #ebebeb;
	padding-top: 20px;
	form{
		display: flex;
		align-items: center;
		margin-top: 20px;
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	.form_input{
		margin-bottom: 0;
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	button{
		width: auto;
		height: 56px;
		border-radius: 40px;
		padding: 16px 40px;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		background: #191B20;
		color: #fff;
		margin-left: 20px;
		@media only screen and (max-width: 600px) {
			margin-left: 0;
			margin-top: 15px;
			width: 100%;
		}
		&:disabled{
			opacity: .4;
		}
	}
`
