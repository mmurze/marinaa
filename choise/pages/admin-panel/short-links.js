import Seo from "helpers/Seo";
import AdminWrapper from "layouts/AdminPanel/AdminPanelWrapper";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Input from "components/Forms/Input";
import Modal from "components/Modal";
import generator from "generate-password"
import axios from "axios";
import copy from 'copy-to-clipboard';
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";
import AdminPagination from "components/AdminPanel/AdminPagination";
import Router from "next/router";

export default function ShortLinks({page}){
	const {wallet} = useSnapshot(stateWeb3)
	const [copyText, setCopyText] = useState(false)
	const [total, setTotal] = useState(null)
	const [visible, setVisible] = useState(false)
	const [slug, setSlug] = useState("")
	const [redirectSlug, setRedirectSlug] = useState("")
	const [description, setDescription] = useState("")
	const [length, setLength] = useState(5)
	const [array, setArray] = useState([])
	const [error, setError] = useState(null)
	const lengthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
	
	useEffect(() => {
		if (wallet) makeRequest()
	}, [page, wallet])
	
	useEffect(() => {
		if (copyText) {
			setTimeout(() => {
				setCopyText(false)
			}, 1500)
		}
	}, [copyText])
	
	const makeRequest = () => {
		axios.get("/api/short-link/list", {params: {
				adminWallet: wallet,
				page,
				limit: 10
			}}).then(r => {
			if (r.data.status) {
				setArray(r.data.data)
				setTotal(r.data.total)
			}
		})
	}
	
	const onHandleSubmit = (e) => {
		e.preventDefault()
		setError(null)
		axios.post("/api/short-link/add", {
			slug: `https://choise.com/s/${slug}`,
			redirectSlug,
			description: description.length ? description : null,
			adminWallet: wallet
		}).then(r => {
			if (r.data.status) {
				setArray(array)
				setSlug("")
				setRedirectSlug("")
				setDescription("")
				setVisible(false)
				Router.push("/admin-panel/short-links?page=1")
			}
			setError(r.data.error.detail)
		}).catch(error => {
			console.log(error)
		})
	}
	const deleteItem = (id) => {
		axios.post("/api/short-link/delete", {
			id, adminWallet: wallet
		}).then(r => {
			if (r.data.status) {
				const filterArray = array.filter(item => item.id !== id)
				setArray(filterArray)
			}
		})
	}
	return (
		<>
			<Seo title="Short Links"/>
			<AdminWrapper title="Short Links">
				<Wrapper>
					<Modal close={false} background="#ffffff" width={600} active={visible} onCallBack={setVisible}>
						<form onSubmit={onHandleSubmit}>
							<div className="short_link_block">
								<p>https://choise.com/s/</p>
								<Input value={slug} onChange={setSlug} placeholder="short-link" required={true}/>
							</div>
							<div className="generate_block">
								<select value={length} onChange={(e) => {
									setLength(+e.target.value)
								}}>
									{
										lengthArray.map((item, index) => {
											return (
												<option key={index} value={item}>{item}</option>
											)
										})
									}
								</select>
								<button onClick={() => {
									setSlug(
										generator.generate({
											length,
											numbers: true
										})
									)
								}} type="button" className="generate_button">Generate link</button>
							</div>
							<Input value={redirectSlug} onChange={setRedirectSlug} placeholder="Redirect link" required={true}/>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Link description"
							/>
							{error ? <p className="error">{error}</p> : null}
							<button
								disabled={!slug.length || !redirectSlug.length}
								className="submit_button">Add link</button>
						</form>
					</Modal>
					<button
						className="submit_button"
						onClick={() => setVisible(true)}
					>Add link</button>
					<div className="list">
						{
							array.map((item, index) => {
								return (
									<div className="item" key={index}>
										<ul>
											<li>
												<span
													onClick={() => {
														copy(item.slug)
														setCopyText(true)
													}}
													className="copy">{item.slug}</span>
												<a href={item.slug} target="_blank" rel="noreferrer">🔗</a>
											</li>
											<li>⤑</li>
											<li className="crop_link">
												<span
													onClick={() => {
														copy(item.redirect_slug)
														setCopyText(true)
													}}
													className="copy">{item.redirect_slug}</span>
												<a href={item.redirect_slug} target="_blank" rel="noreferrer">🔗</a>
											</li>
											<li><button onClick={() => deleteItem(item.id)} className="delete_button">&times;</button></li>
										</ul>
										{item.description ? <p className="item_description">{item.description}</p> : null}
									</div>
								)
							})
						}
					</div>
					<AdminPagination
						page={page}
						total={total}
						onClick={(e) => Router.push(`/admin-panel/short-links?page=${e}`)}
					/>
					<div className={`copy_information ${copyText ? "active" : ""}`}>Link copied</div>
				</Wrapper>
			</AdminWrapper>
		</>
	)
}

const Wrapper = styled.div`
	.submit_button{
		width: auto;
		background: #191B20;
		border-radius: 40px;
		padding: 8px 40px;
		height: 50px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #F9F9F9;
		&:disabled{
			cursor: default;
			opacity: .6;
			&:hover{
				background: #191B20;
				color: #F9F9F9;
			}
		}
		&:hover{
			background: #FFFB1F;
			color: #191B20;
		}
	}
	form{
		input{
			width: 100%;
			background: #F8F8F8;
			border: 1px solid #F2F2F2;
			border-radius: 26px;
		}
		.submit_button{
			width: 100%;
		}
	}
	.generate_button{
		width: auto;
		font-size: 12px;
		line-height: 150%;
		color: #00A3FF;
	}
	.short_link_block{
		margin-bottom: 0;
		position: relative;
		input{
			padding-left: 179px;
		}
		p{
			position: absolute;
			top: 0;
			left: 32px;
			height: 100%;
			display: flex;
			align-items: center;
			color: #B2B3C2;
		}
		.form_input{
			margin-bottom: 0;
		}
	}
	.generate_block{
		display: flex;
		justify-content: flex-end;
		margin-bottom: 20px;
		margin-top: 10px;
	}
	select{
		padding: 0;
		margin: 0 10px 0 0;
		background: transparent;
		border: none;
		width: auto;
		cursor: pointer;
	}
	textarea{
		width: 100%;
		background: #F8F8F8;
		border: 1px solid #F2F2F2;
		border-radius: 26px;
		margin-bottom: 20px;
		height: 200px;
		resize: none;
		padding: 14px 32px;
		font-size: 16px;
		line-height: 28px;
		letter-spacing: -0.03em;
	}
	.list{
		margin-top: 40px;
		ul{
			display: flex;
			li{
				margin-right: 20px;
				a{
					margin-left: 10px;
				}
				&:last-child{
					margin-right: 0;
				}
			}
		}
	}
	.item{
		margin-bottom: 20px;
		border-bottom: 1px solid #A2A8B7;
		padding-bottom: 20px;
		&:last-child{
			padding-bottom: 0;
			border-bottom: none;
			margin-bottom: 0;
		}
	}
	.crop_link{
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
	}
	.copy{
		color: #00A3FF;
		text-decoration: underline;
		cursor: pointer;
	}
	.item_description{
		font-size: 12px;
		line-height: 150%;
		color: #A2A8B7;
		margin-top: 5px;
	}
	.copy_information{
		position: fixed;
		width: 100%;
		bottom: -100px;
		left: 0;
		background: #0285FD;
		padding: 20px 0;
		text-align: center;
		z-index: 100;
		font-size: 18px;
		line-height: 22px;
		color: #F9F9F9;
		transition: all .3s ease-in-out;
		&.active{
			bottom: 0;
			transition: all .3s ease-in-out;
		}
	}
	.delete_button{
		width: auto;
		font-size: 20px;
		padding: 0;
		margin: 0;
		color: #FF646A;
		opacity: .5;
		&:hover{
			opacity: 1;
		}
	}
	.error{
		background: rgba(255, 100, 100, 0.05);
		border: 1px solid rgba(255, 100, 100, 0.3);
		border-radius: 20px;
		margin-bottom: 20px;
		padding: 20px;
		font-size: 16px;
		line-height: 130%;
	}
`
export async function getServerSideProps(ctx) {
	return { props: {page: ctx.query.page ? ctx.query.page : 1} }
}