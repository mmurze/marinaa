import styled from "styled-components";
import {useEffect, useState} from "react";
import {getBanners} from "utils/functions";
import Image from "next/image";
import Responsive from "helpers/Responsive";
import moment from "moment/moment";
import {useRouter} from "next/router";

export default function MainBanner() {
	const {asPath} = useRouter()
	const [active, setActive] = useState(false)
	const [data, setData] = useState(null)
	useEffect(() => {
		getBanners().then(r => {
			if (r) {
				setData(r)
				let showBanner = true
				if (r.do_not_show && r.do_not_show.length) {
					const slug = `https://choise.com${asPath.split("?")[0]}`
					if (r.do_not_show.find(item => item === slug)) showBanner = false
				}
 				const date = moment().unix()
				const newDate = moment().add(1, "day").unix()
				const cookieDate = localStorage.getItem("banner_date")
				if (cookieDate) {
					const checkDiffDate = moment().diff(date, 'days')
					if (checkDiffDate <= 0) {
						localStorage.setItem("banner_date", newDate.toString())
						if (showBanner) setActive(true)
					}
				} else {
					localStorage.setItem("banner_date", newDate.toString())
					if (showBanner) setActive(true)
				}
			}
		})
	}, [])
	const onHandleClick = () => {
		setActive(false)
	}
	return (
		active ? (
			<Wrapper>
				<Responsive width={600} mobile={
					<div className="modal">
						<button type="button" className="close_modal" onClick={onHandleClick}>
							<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6.48949 5.58574L11.4395 0.635742L12.8535 2.04974L7.90349 6.99974L12.8535 11.9497L11.4395 13.3637L6.48949 8.41374L1.53949 13.3637L0.125488 11.9497L5.07549 6.99974L0.125488 2.04974L1.53949 0.635742L6.48949 5.58574Z"/>
							</svg>
						</button>
						<div className="mobile_wrapper">
							<a href={data.slug}>{data.title}</a>
							<Image
								src={`${process.env.DIRECTUS_IMAGE}/${data.mobile_image.filename_disk}`}
								width={data.image.width}
								height={data.image.height}
								alt={data.title}
							/>
						</div>
					</div>
				}>
					<div className="modal">
						<button type="button" className="close_modal" onClick={onHandleClick}>
							<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6.48949 5.58574L11.4395 0.635742L12.8535 2.04974L7.90349 6.99974L12.8535 11.9497L11.4395 13.3637L6.48949 8.41374L1.53949 13.3637L0.125488 11.9497L5.07549 6.99974L0.125488 2.04974L1.53949 0.635742L6.48949 5.58574Z"/>
							</svg>
						</button>
						<a href={data.slug}>{data.title}</a>
						<Image
							src={`${process.env.DIRECTUS_IMAGE}/${data.image.filename_disk}`}
							width={data.image.width}
							height={data.image.height}
							alt={data.title}
						/>
					</div>
				</Responsive>
				<div className="overlay"/>
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 99999;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	.overlay{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0.3);
	}
	.modal{
		z-index: 20;
		border-radius: 20px;
		position: relative;
		overflow: hidden;
		max-width: 1200px;
		width: 100%;
		a{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
			font-size: 0;
		}
	}
	.mobile_wrapper{
		overflow-y: auto;
		position: relative;
		height: 90vh;
	}
	.close_modal {
		position: absolute;
		width: 30px;
		height: 30px;
		right: 30px;
		top: 30px;
		background: #E4E4E4;
		line-height: 0;
		border-radius: 50%;
		transition: all .3s ease-in-out;
		z-index: 30;
		@media only screen and (max-width: 600px) {
			right: 20px;
			top: 20px;
		}
		svg {
			fill: #191B20;
			transition: all .3s ease-in-out;
		}
		&:hover {
			transition: all .3s ease-in-out;
			background: #1A1B20;
			svg{
				fill: #F9F9F9;
				transition: all .3s ease-in-out;
			}
		}
	}
`
