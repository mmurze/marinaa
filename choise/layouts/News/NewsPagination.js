import styled from "styled-components";
import Pagination from 'rc-pagination';
import Responsive from "helpers/Responsive";
import Router from "next/router";
export default function NewsPagination({total, page, slug}) {
	const onHandleChange = (itemPage) => {
		if (itemPage !== page) {
			if (slug !== "all") {
				Router.push(`/news/${slug}?page=${itemPage}`)
			} else Router.push(`/news?page=${itemPage}`)
		}
	}

	const onHandleClick = () => {
		if (slug !== "all") {
			Router.push(`/news/${slug}?page=${+page + 1}`)
		} else Router.push(`/news?page=${+page + 1}`)
	}
	
	return (
		total !== 1 ? (
			<Wrapper className="pagination">
				<Responsive mobile={
					<div className="mobile_more">
						<button>First page</button>
						<button onClick={onHandleClick}>Show more</button>
						<button>Last page</button>
					</div>
				}>
					<Pagination
						defaultCurrent={+page}
						total={total}
						defaultPageSize={1}
						pageSize={1}
						current={+page}
						locale="en_En"
						showSizeChanger={false}
						onChange={onHandleChange}
						prevIcon={
							<>
								<button
									className="prev"
									disabled={total !== page}
								>
									<svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M3.82843 7.53568L0.646446 4.3537C0.451185 4.15844 0.451185 3.84186 0.646446 3.6466L3.82843 0.464615C4.02369 0.269353 4.34027 0.269353 4.53553 0.464615C4.7308 0.659877 4.7308 0.97646 4.53553 1.17172L2.20711 3.50015L21 3.50015C21.2761 3.50015 21.5 3.72401 21.5 4.00015C21.5 4.27629 21.2761 4.50015 21 4.50015L2.20711 4.50015L4.53553 6.82858C4.7308 7.02384 4.7308 7.34042 4.53553 7.53568C4.34027 7.73094 4.02369 7.73094 3.82843 7.53568Z"/>
									</svg>
									Previous
								</button>
							</>
						}
						nextIcon={
							<>
								<button
									className="next"
									disabled={total === page}>
									Next
									<svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M18.1716 0.464318L21.3536 3.6463C21.5488 3.84156 21.5488 4.15814 21.3536 4.3534L18.1716 7.53539C17.9763 7.73065 17.6597 7.73065 17.4645 7.53539C17.2692 7.34012 17.2692 7.02354 17.4645 6.82828L19.7929 4.49985H1C0.723858 4.49985 0.5 4.27599 0.5 3.99985C0.5 3.72371 0.723858 3.49985 1 3.49985H19.7929L17.4645 1.17142C17.2692 0.976162 17.2692 0.65958 17.4645 0.464318C17.6597 0.269056 17.9763 0.269056 18.1716 0.464318Z"/>
									</svg>
								</button>
							</>
						}
					/>
				</Responsive>
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 60px;
	button{
		width: auto;
		font-size: 16px;
		line-height: 100%;
		color: #0285FD;
		&:disabled{
			cursor: default;
			color: #191B20;
			svg{
				fill: #191B20;
			}
		}
		svg{
			fill: #0285FD;
		}
		&.prev{
			margin-right: 30px;
			svg{
				margin-right: 10px;
			}
		}
		&.next{
			margin-left: 30px;
			svg{
				margin-left: 10px;
			}
		}
	}
	ul{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	li{
		margin: 0 7px;
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 50%;
		font-size: 14px;
		line-height: 0;
		cursor: pointer;
		&.rc-pagination-item-active{
			cursor: default;
			background: #191B20;
			a{
				color: #F9F9F9;
			}
		}
	}
	.rc-pagination-next, .rc-pagination-prev{
		width: auto;
		&.rc-pagination-disabled{
			cursor: default;
		}
	}
	.rc-pagination-options{
		display: none;
	}
	.rc-pagination-jump-prev, .rc-pagination-jump-next{
		cursor: default;
		&:before{
			content: "..."
		}
		button{
			display: none;
		}
	}
	.mobile_more{
		display: flex;
		justify-content: space-between;
		width: 100%;
		button{
			width: auto;
			margin: 0 10px;
		}
	}
`