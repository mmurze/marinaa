import styled from "styled-components";
import Link from "next/link";
import {useRouter} from "next/router";

export default function AdminPanelNav() {
	const {asPath} = useRouter()
	const array = [
		{
			"title": "Admin panel",
			"slug": "/admin-panel"
		},
		{
			"title": "Ambassador Levels",
			"slug": "/admin-panel/ambassador-level"
		},
		{
			"title": "Ambassador Users",
			"slug": "/admin-panel/ambassador-users"
		},
		{
			"title": "Ambassador Tasks",
			"slug": "/admin-panel/ambassador-tasks"
		},
		{
			"title": "Ambassador Rewards",
			"slug": "/admin-panel/ambassador-rewards"
		},
		{
			"title": "Short Links",
			"slug": "/admin-panel/short-links"
		}
	]
	const checkActiveMenu = (slug) => {
		if (asPath === "/admin-panel" && slug === "/admin-panel") return true
		return asPath.includes(slug.split("/admin-panel/")[1]);
	};
	
	return (
		<Wrapper>
			{
				array.map((item, index) => {
					return (
						<li className={checkActiveMenu(item.slug) ? "active" : ""} key={index}>
							<Link href={item.slug}>
								{item.title}
							</Link>
						</li>
					)
				})
			}
		</Wrapper>
	)
}

const Wrapper = styled.ul`
	li{
		margin-bottom: 15px;
		&.active a{
			color: #0885FD;
		}
		&:last-child{
			margin-bottom: 0;
		}
	}
`