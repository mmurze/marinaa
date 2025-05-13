import styled from "styled-components";
import Link from "next/link";
export default function NewsBreadcrumbs({categoryName, categorySlug, title}) {
	return (
		<Wrapper>
			<li><Link href="/news">News</Link></li>
			<li><Link href={`/news/${categorySlug}`}>{categoryName}</Link></li>
			<li><span>{title}</span></li>
		</Wrapper>
	)
}

const Wrapper = styled.ul`
	display: flex;
	padding: 0;
	margin: 0;
	list-style: none;
	flex-wrap: wrap;
	a{
		color: #0285FD;
		text-decoration: underline;
	}
	li{
		font-size: 14px;
		line-height: 1.4;
		span{
			display: block;
			max-width: 320px;
			width: 100%;
			white-space: nowrap;
			overflow-x: hidden;
			text-overflow: ellipsis;
		}
		&:after{
			content: "/";
			margin: 0 7px;
		}
		&:last-child{
			margin-right: 0;
			&:after{
				display: none;
			}
		}
	}
`