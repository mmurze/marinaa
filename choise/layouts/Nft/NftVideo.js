import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useState} from "react";
import Image from "next/image";
import ReactPlayer from 'react-player'

export default function NftVideo({t}) {
	const [visible, setVisible] = useState(false)
	const [showVideo, setShowVideo] = useState(false)
	
	const closeModal = () => {
		setVisible(false)
		setTimeout(() => {
			setShowVideo(false)
		}, 300)
	}
	
	const onHandleClick = () => {
		setVisible(true)
		setShowVideo(true)
	}
	
	return (
		<Wrapper>
			<div className={`video_modal ${visible ? "active" : ""}`}>
				<div className="modal">
					<button className="close_button" onClick={closeModal}>
						<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.98021 5.2L11.9302 0.25L13.3442 1.664L8.39421 6.614L13.3442 11.564L11.9302 12.978L6.98021 8.028L2.03021 12.978L0.616211 11.564L5.56621 6.614L0.616211 1.664L2.03021 0.25L6.98021 5.2Z" fill="white"/>
						</svg>
					</button>
					<h3>{t.title}</h3>
					{
						showVideo ? (
							<div className="video">
								<ReactPlayer
									height="100%"
									width="100%"
									controls={true}
									stopOnUnmount={visible}
									playing={visible}
									url='https://www.youtube.com/watch?v=vLZblFUcf00'
								/>
							</div>
						) : null
					}
				</div>
				<div className="overlay" onClick={closeModal}/>
			</div>
			<CenterBlock>
				<div className="banner">
					<h2>{t.title}</h2>
					<button className="play_button" onClick={onHandleClick}>
						<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.9023 7.37492L6.22977 0.680753C5.59816 0.316029 4.88127 0.124965 4.15191 0.126969C3.42256 0.128972 2.70673 0.323971 2.07712 0.692159C1.44752 1.06035 0.926582 1.58861 0.567213 2.22328C0.207844 2.85796 0.0228496 3.57644 0.0310212 4.30575V17.7424C0.0310212 18.8384 0.466408 19.8895 1.2414 20.6645C2.0164 21.4395 3.06751 21.8749 4.16352 21.8749C4.88905 21.8737 5.60154 21.682 6.22977 21.3191L17.9023 14.6249C18.5295 14.2619 19.0502 13.7404 19.4122 13.1126C19.7742 12.4848 19.9647 11.7729 19.9647 11.0483C19.9647 10.3236 19.7742 9.61166 19.4122 8.98389C19.0502 8.35612 18.5295 7.83458 17.9023 7.47159V7.37492ZM16.6939 12.4378L5.02144 19.2287C4.75982 19.3769 4.46424 19.4549 4.16352 19.4549C3.86281 19.4549 3.56723 19.3769 3.3056 19.2287C3.04472 19.078 2.82809 18.8614 2.67749 18.6005C2.52689 18.3396 2.44764 18.0437 2.44769 17.7424V4.25742C2.44764 3.95618 2.52689 3.66023 2.67749 3.39934C2.82809 3.13844 3.04472 2.92179 3.3056 2.77117C3.5683 2.62515 3.86301 2.54629 4.16352 2.54159C4.46383 2.54775 4.75819 2.62652 5.02144 2.77117L16.6939 9.51367C16.9549 9.66423 17.1716 9.88085 17.3223 10.1417C17.473 10.4026 17.5524 10.6986 17.5524 10.9999C17.5524 11.3012 17.473 11.5972 17.3223 11.8581C17.1716 12.119 16.9549 12.3356 16.6939 12.4862V12.4378Z" fill="#191B20"/>
						</svg>
					</button>
					<div className="image">
						<Image src="/pic/nft/video-banner.jpg" width={456} height={261} alt="how to mint an nft from cho metafi collection" priority={true}/>
					</div>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	.video_modal{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		visibility: hidden;
		transition: all .3s ease-in-out;
		&.active{
			opacity: 1;
			visibility: visible;
			transition: all .3s ease-in-out;
		}
		.overlay{
			background: rgba(0, 0, 0, 0.8);
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 10;
		}
		.close_button{
			position: absolute;
			right: 20px;
			top: 0;
			background: rgba(150, 150, 150, 0.2);
			width: 30px;
			height: 30px;
			border-radius: 50%;
		}
		.modal{
			max-width: 1024px;
			width: 100%;
			position: relative;
			z-index: 20;
			padding: 0 20px;
		}
		.video{
			margin-top: 26px;
			border-radius: 30px;
			overflow: hidden;
			position: relative;
			padding-top: 56.25%;
			iframe{
				position: absolute;
				top: 0;
				left: 0;
			}
		}
		h3{
			color: #F9F9F9;
			font-size: 18px;
			line-height: 100%;
			width: calc(100% - 30px);
			padding-right: 20px;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
			}
		}
	}
	.banner{
		background: #F7F7F7;
		border-radius: 24px;
		padding: 70px 0 70px 80px;
		@media only screen and (max-width: 600px) {
			min-height: 450px;
			padding: 30px 40px;
		}
	}
	h2{
		font-size: 48px;
		line-height: 110%;
		max-width: 406px;
		width: 100%;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 600px) {
			max-width: 100%;
			text-align: center;
			font-size: 30px;
			line-height: 110%;
		}
	}
	.image{
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.play_button{
		width: 70px;
		height: 70px;
		background: #FFFB1F;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10;
		transform: translate(-50%, -50%);
		@media only screen and (max-width: 1024px) {
			margin-left: 80px;
		}
		@media only screen and (max-width: 820px) {
			margin-left: 140px;
		}
		@media only screen and (max-width: 600px) {
			position: relative;
			transform: none;
			top: auto;
			left: auto;
			margin: 55px auto 0 auto;
		}
		&:hover{
			width: 80px;
			height: 80px;
			background: #5CEE9C;
		}
	}
`