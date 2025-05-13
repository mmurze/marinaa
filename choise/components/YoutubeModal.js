import styled from "styled-components";
import {useState} from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

export default function YoutubeModal({link, image, imageWidth, imageHeight}) {
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
					{
						showVideo ? (
							<div className="video">
								<ReactPlayer
									height="100%"
									width="100%"
									controls={true}
									stopOnUnmount={visible}
									playing={visible}
									url={`https://www.youtube.com/watch?v=${link}`}
								/>
							</div>
						) : null
					}
				</div>
				<div className="overlay" onClick={closeModal}/>
			</div>
			<div className="video_block">
				<button className="play_video" onClick={onHandleClick}>
					<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.9028 7.37492L6.23026 0.680753C5.59864 0.316029 4.88175 0.124965 4.1524 0.126969C3.42305 0.128972 2.70721 0.323971 2.07761 0.692159C1.44801 1.06035 0.92707 1.58861 0.567701 2.22328C0.208332 2.85796 0.0233379 3.57644 0.0315094 4.30575V17.7424C0.0315094 18.8384 0.466896 19.8895 1.24189 20.6645C2.01688 21.4395 3.068 21.8749 4.16401 21.8749C4.88954 21.8737 5.60203 21.682 6.23026 21.3191L17.9028 14.6249C18.53 14.2619 19.0507 13.7404 19.4127 13.1126C19.7747 12.4848 19.9652 11.7729 19.9652 11.0483C19.9652 10.3236 19.7747 9.61166 19.4127 8.98389C19.0507 8.35612 18.53 7.83458 17.9028 7.47159V7.37492ZM16.6944 12.4378L5.02193 19.2287C4.76031 19.3769 4.46472 19.4549 4.16401 19.4549C3.8633 19.4549 3.56771 19.3769 3.30609 19.2287C3.04521 19.078 2.82858 18.8614 2.67798 18.6005C2.52738 18.3396 2.44812 18.0437 2.44818 17.7424V4.25742C2.44812 3.95618 2.52738 3.66023 2.67798 3.39934C2.82858 3.13844 3.04521 2.92179 3.30609 2.77117C3.56879 2.62515 3.86349 2.54629 4.16401 2.54159C4.46432 2.54775 4.75867 2.62652 5.02193 2.77117L16.6944 9.51367C16.9554 9.66423 17.1721 9.88085 17.3228 10.1417C17.4735 10.4026 17.5529 10.6986 17.5529 10.9999C17.5529 11.3012 17.4735 11.5972 17.3228 11.8581C17.1721 12.119 16.9554 12.3356 16.6944 12.4862V12.4378Z" fill="#191B20"/>
					</svg>
				</button>
				<div className="image">
					<Image src={image} width={imageWidth} height={imageHeight} priority={true} alt="Modal video"/>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
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
			top: -20px;
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
	}
	.video_block{
		width: 100%;
		position: relative;
		overflow: hidden;
	}
	.play_video{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 30;
		background: #FFFB1F;
		border-radius: 50%;
		width: 70px;
		height: 70px;
		line-height: 0;
	}
`