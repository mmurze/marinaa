import AdminWrapper from "layouts/AdminPanel/AdminPanelWrapper";
import Seo from "helpers/Seo";
import {renderTasksArray} from "utils/ambassador";
import {useEffect, useState} from "react";
import {state} from "state";
import styled from "styled-components";
import axios from "axios";
import numberFormat from "helpers/numberFormat";
import Title from "components/Title";
import AdminPanelBitDriven from "layouts/AdminPanel/AdminPanelBitDriven";

export default function AdminPanel(){
	const [sitemap, setSitemap] = useState(null)
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		renderTasksArray().then(r => state.ambassadorTasksArray = r)
	}, [])
	const onHandleClick = () => {
		setSitemap(null)
		setLoading(true)
		axios.get("/api/sitemap", {params: {token: "72ZqJ8UF49hqf1ts"}}).then(r => {
			if (r.data.status) {
				setSitemap(r.data)
				setLoading(false)
			}
		})
	}
	return (
		<>
			<Seo title="Admin panel"/>
			<AdminWrapper title="Admin panel">
				<Wrapper>
					<button onClick={onHandleClick} disabled={loading} className="generate_sitemap">Generate Sitemap</button>
					{sitemap && (
						<div className="sitemap_notification">
							<Title><h4>Sitemap successfully generated:</h4></Title>
							<ul>
								<li>Total pages: <strong>{numberFormat(sitemap?.pages)}</strong> (<a href="https://choise.com/sitemap.xml" target="_blank" rel="noreferrer">https://choise.com/sitemap.xml</a>)</li>
								<li>Total blog pages: <strong>{numberFormat(sitemap?.blog)}</strong> (<a href="https://choise.com/blog.xml" target="_blank" rel="noreferrer">https://choise.com/blog.xml</a>)</li>
							</ul>
						</div>
					)}
					<AdminPanelBitDriven/>
				</Wrapper>
			</AdminWrapper>
		</>
	)
}

const Wrapper = styled.div`
	.generate_sitemap{
		width: auto;
		height: 56px;
		border-radius: 40px;
		padding: 16px 40px;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		background: #191B20;
		color: #fff;
		&:disabled{
			cursor: default;
			opacity: .4;
			&:hover{
				background: #191B20;
				color: #fff;
			}
		}
		&:hover{
			background: #FFFB1F;
			color: #191B20;
		}
	}
	.sitemap_notification{
		margin-top: 20px;
		padding: 20px;
		background: #F7F7F7;
		border-radius: 24px;
		a{
			text-decoration: underline;
			color: #0285FD;
		}
		ul{
			margin-top: 20px;
			li{
				margin-bottom: 15px;
				font-size: 18px;
				line-height: 150%;
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
	}
`
