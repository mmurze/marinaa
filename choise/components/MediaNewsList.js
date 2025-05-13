import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Image from "next/image";
import {useRouter} from "next/router";

export default function MediaNewsList({array, title}) {
	const {locale} = useRouter()
	const {media_news_list} = require(`locale/components/${locale}.json`)
	
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{title ? title : media_news_list.title}</h2></Title>
			</CenterBlock>
			<div className="list">
				{
					array.map((item, index) => {
						return (
							<div className="item" key={index}>
								<a href={item.slug} target="_blank" rel="noreferrer">{item.title}</a>
								<div className="image">
									<Image src={item.image} layout="fill" objectPosition="center" objectFit="cover" alt={item.title} priority={true}/>
								</div>
								<div className="content">
									<div className="top">
										<div className="company">{item.company}</div>
										<h3>{item.title}</h3>
									</div>
									<div className="link">
										<span className="arrow">
											<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M10.95 0.928881L17.3139 7.29284C17.7045 7.68337 17.7044 8.31653 17.3139 8.70706L10.95 15.071C10.5594 15.4615 9.92627 15.4615 9.53575 15.071C9.14523 14.6805 9.14523 14.0473 9.53575 13.6568L14.1926 8.99995L1.39307 8.99995C0.840781 8.99995 0.393066 8.55223 0.393066 7.99995C0.393066 7.44766 0.840781 6.99995 1.39307 6.99995L14.1926 6.99995L9.53575 2.34309C9.14523 1.95257 9.14523 1.3194 9.53575 0.92888C9.92628 0.538356 10.5594 0.538356 10.95 0.928881Z" fill="#191B20"/>
										</svg>
										</span>
										<p>{media_news_list.link}</p>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 60px;
	}
	.title{
		text-align: center;
	}
	.list{
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
		margin: 80px 0 -20px 0;
		padding: 0 20px 20px 20px;
		&::-webkit-scrollbar { width: 3px; height: 10px;}
		&::-webkit-scrollbar-button {  display: none }
		&::-webkit-scrollbar-track {  background-color: #0285FD;}
		&::-webkit-scrollbar-track-piece { background-color: #EEEFF2;}
		&::-webkit-scrollbar-thumb { height: 10px; background-color: #0285FD; border-radius: 10px;}
		&::-webkit-scrollbar-corner { background-color: #0285FD;}
		&::-webkit-resizer { background-color: #0285FD;}
	}
	.image{
		height: 180px;
		position: relative;
	}
	.item{
		width: 370px;
		margin-right: 20px;
		flex: 0 0 auto;
		position: relative;
		border: 1px solid #EBEBEB;
		border-radius: 10px;
		overflow: hidden;
		transition: all .3s ease-in-out;
		@media only screen and (max-width: 600px) {
			width: 306px;
		}
		&:hover{
			background: #FFFB1F;
			transition: all .3s ease-in-out;
			.link{
				border-top: 1px solid #191B20;
				transition: all .3s ease-in-out;
			}
			.arrow{
				background: #F9F9F9;
				transition: all .3s ease-in-out;
			}
		}
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
	.link{
		display: flex;
		align-items: center;
		margin-top: 30px;
		padding-top: 15px;
		border-top: 1px solid #EBEBEB;
		transition: all .3s ease-in-out;
		p{
			width: calc(100% - 40px);
			padding-left: 10px;
		}
	}
	.arrow{
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		line-height: 0;
		background: #FFFB1F;
		border-radius: 50%;
		transition: all .3s ease-in-out;
	}
	.content{
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: calc(100% - 180px);
	}
	h3{
		font-weight: 500;
		font-size: 20px;
		line-height: 130%;
		margin-top: 15px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow-y: hidden;
	}
	.company{
		font-size: 16px;
		line-height: 130%;
		color: #80889C;
		text-transform: uppercase;
	}
`