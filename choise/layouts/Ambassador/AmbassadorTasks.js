import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import AmbassadorTaskItem from "layouts/Ambassador/AmbassadorTaskItem";
import {useEffect, useState} from "react";
import {renderTasksArray} from "utils/ambassador";

export default function AmbassadorTasks({t}) {
	const [array, setArray] = useState([])
	useEffect(() => {
		renderTasksArray().then((r) => setArray(r))
		setArray([])
	}, [])
	return (
		array.length ? (
			<Wrapper id="task_list">
				<CenterBlock>
					<Title><h2>{t.title}</h2></Title>
					<div className="list">
						{
							array.map(item => {
								return item.visible ? <AmbassadorTaskItem item={item} key={item.id} t={t.item}/> : null
							})
						}
					</div>
				</CenterBlock>
			</Wrapper>
		) : (
			<EmptyBlock className="empty_block"/>
		)
	)
}

const EmptyBlock = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
`

const Wrapper = styled.section`
	margin-top: 120px;
	padding: 50px 0 120px 0;
	background: #F6F7F8;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
		padding: 50px 0;
	}
	.list{
		display: grid;
		margin-top: 60px;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 16px 20px;
		@media only screen and (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media only screen and (max-width: 768px) {
			display: flex;
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 50px -20px -20px -20px;
			padding: 0 20px 20px 20px;
			scroll-snap-type: x mandatory;
			scroll-padding: 20px;
			grid-gap: 0;
		}
	}
	.loading_block{
		display: flex;
		justify-content: center;
		padding: 80px 0;
	}
	.item{
		@media only screen and (max-width: 768px) {
			width: calc(100% - 20px);
			margin-right: 20px;
			flex: 0 0 auto;
			scroll-snap-align: start;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.title{
		@media only screen and (max-width: 600px) {
			text-align: center;
		}
	}
`