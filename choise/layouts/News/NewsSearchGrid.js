import styled from "styled-components";
import {useEffect, useState} from "react";
import Title from "components/Title";
import {searchPost} from "utils/news";
import LoadingAnimation from "components/LoadingAnimation";
import NewsCardItem from "layouts/News/NewsCardItem";

export default function NewsSearchGrid({array, search}) {
	return (
		<Wrapper className="news_content">
			<Title><h1>{search}</h1></Title>
			{
				array ? (
					array.length ? (
						<div className="list">
							{
								array.map(item => {
									return <NewsCardItem item={item} key={item.id}/>
								})
							}
						</div>
					) : <div className="not_found">Nothing found</div>
				) : <LoadingAnimation/>
			}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.title h1{
		font-size: 32px;
		line-height: 100%;
		text-transform: lowercase;
	}
	.loading_animation{
		margin-top: 54px;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		margin-right: -30px;
		margin-bottom: -30px;
		margin-top: 54px;
		@media only screen and (max-width: 820px) {
			margin-top: 30px;
		}
		@media only screen and (max-width: 600px) {
			margin-right: 0;
		}
	}
	.not_found{
		margin-top: 54px;
		font-size: 20px;
	}
	.item{
		width: calc(100% / 3 - 30px);
		margin-right: 30px;
		margin-bottom: 30px;
		@media only screen and (max-width: 1024px) {
			width: calc(100% / 2 - 30px);
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-right: 0;
		}
	}
`