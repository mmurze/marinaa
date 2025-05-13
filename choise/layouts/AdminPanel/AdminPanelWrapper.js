import styled from "styled-components";
import {useEffect, useState} from "react";
import LoadingAnimation from "components/LoadingAnimation";
import {checkAdmin} from "utils/admin-panel";
import Router from "next/router";
import CenterBlock from "helpers/CenterBlock";
import AdminPanelNav from "layouts/AdminPanel/AdminPanelNav";
import Title from "components/Title";
import Header from "components/Header";
import Footer from "components/Footer";
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";
export default function AdminPanelWrapper({children, title}) {
	const {wallet} = useSnapshot(stateWeb3)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		if (wallet) {
			makeRequest()
		} else Router.push("/")
	}, [wallet])
	
	useEffect(() => {
		const timer = setInterval(() => {
			if (wallet) makeRequest()
		}, 4000);
		return () => clearInterval(timer);
	})
	
	const makeRequest = () => {
		if (checkAdmin(wallet)) {
			setLoading(false)
		} else Router.push("/")
	}
	
	return (
		<>
			<Header/>
			<main>
				<Wrapper>
					{loading ? <LoadingAnimation/> : (
						<CenterBlock>
							<Title><h1>{title}</h1></Title>
							<div className="admin_panel_position">
								<div className="admin_panel_nav">
									<AdminPanelNav/>
								</div>
								<div className="admin_panel_content">
									{children}
								</div>
							</div>
						</CenterBlock>
					)}
				</Wrapper>
			</main>
			<Footer/>
		</>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.loading_animation{
		display: flex;
		justify-content: center;
	}
	.admin_panel_position{
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.admin_panel_nav{
		max-width: 200px;
		width: 100%;
		@media only screen and (max-width: 1024px) {
			max-width: 100%;
		}
	}
	.admin_panel_content{
		padding-left: 60px;
		margin-left: 30px;
		width: calc(100% - 200px - 30px);
		border-left: 1px solid #F6F7F8;
		@media only screen and (max-width: 1024px) {
			padding-left: 0;
			margin-left: 0;
			width: 100%;
			margin-top: 30px;
			border-left: none;
		}
	}
	.title h1{
		font-size: 40px;
	}
`