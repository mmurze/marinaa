import styled from "styled-components";
import NewsCardItem from "layouts/News/NewsCardItem";
import NewsPagination from "layouts/News/NewsPagination";
import Title from "components/Title";

export default function NewsGrid({data, title, total, page, slug}) {
	return (
		<Wrapper className="news_content" id="news_gallery">
			<div className="heading">
				<Title><h1>{title}</h1></Title>
			</div>
			<div className="list">
				{
					data.map((item, index) => {
						return <NewsCardItem page={page} item={item} key={index}/>
					})
				}
			</div>
			{total > 1 && <NewsPagination total={total} page={page} slug={slug}/>}
		</Wrapper>
	)
}

const Wrapper = styled.div`
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
	.title h1{
		font-size: 32px;
		line-height: 100%;
		text-transform: lowercase;
	}
`