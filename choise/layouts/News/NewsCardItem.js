import styled from "styled-components";
import {renderDate} from "utils/news";
import Link from "next/link";
import {state} from "state";
import DirectusImage from "helpers/DirectusImage";
import stringTrim from "helpers/stringTrim";
export default function NewsCardItem({item, page}) {
	return (
		<Wrapper className="item">
			<div className="top_content">
				<Link href={`/news/${item.category.slug}/${item.slug}`} onClick={() => state.newsBackPage = page}>
					{item.title}
				</Link>
				<div className="image">
					<DirectusImage
						data={item}
						alt={item.title}
						width={400}
						height={400}
					/>
				</div>
				<div className="card_content">
					<h3>{item.title}</h3>
					<p>{item.short_content}</p>
				</div>
			</div>
			<ul className="time_date">
				<li>{renderDate(item.date_created).date}</li>
				<li>{renderDate(item.date_created).time}</li>
				<li>2 min reading</li>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.article`
	position: relative;
	border-radius: 10px;
	overflow: hidden;
	border: 1px solid #EBEBEB;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.card_content{
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.image{
		position: relative;
		height: 180px;
		width: 100%;
		.directus_image{
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
	h3{
		font-size: 20px;
		line-height: 130%;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow-y: hidden;
		min-height: 80px;
		@media only screen and (max-width: 600px) {
			min-height: auto;
		}
	}
	p{
		font-size: 16px;
		line-height: 150%;
		margin-top: 20px;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow-y: hidden;
	}
	a{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		font-size: 0;
	}
	.time_date{
		display: flex;
		align-items: center;
		margin-top: 30px;
		padding: 0 20px 20px 20px;
		li{
			font-size: 12px;
			line-height: 16px;
			color: #7B8199;
			display: flex;
			align-items: center;
			&:last-child:after{
				display: none;
			}
			&:after{
				content: "";
				width: 2px;
				height: 2px;
				margin: 0 10px;
				background: #7B8199;
				border-radius: 3px;
				display: block;
			}
		}
	}
`