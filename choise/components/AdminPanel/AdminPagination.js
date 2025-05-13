import styled from "styled-components";
import { animateScroll as scroll } from 'react-scroll'

export default function AdminPagination({total, page, onClick}) {
	const pagination = total ? Array.from({ length: total }, (v, i) =>  i + 1) : []
	const onHandleClick = (page) => {
		onClick(page)
		scroll.scrollTo(30);
	}
	return (
		total && total > 1 ? (
			<Wrapper>
				{
					pagination.length && pagination.map(item => {
						return (
							<li
								onClick={() => onHandleClick(item)}
								className={+page === item || (!page && item === 1) ? "active" : ""}
								key={item}
							>{item}
							</li>
						)
					})
				}
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.ul`
	display: flex;
	justify-content: center;
	margin-top: 40px;
	flex-wrap: wrap;
	margin-bottom: -10px;
	li{
		margin: 0 5px 10px 5px;
		border-radius: 5px;
		width: 30px;
		padding: 5px;
		border: 1px solid #191B20;
		font-size: 14px;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		cursor: pointer;
		&.active{
			background: #191B20;
			color: #F9F9F9;
		}
	}
`