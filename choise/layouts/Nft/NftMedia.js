import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaSliderItem from "components/Nft/MediaSliderItem";
import {useRef} from "react";

export default function NftMedia({t}) {
	const SliderRef = useRef(null)
	const settings = {
		dots: false,
		speed: 1000,
		arrows: false,
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					variableWidth: false
				}
			},
		]
	};
	
	const onHandleClick = (e) => {
		if (e === "prev") {
			SliderRef.current.slickPrev()
		} else SliderRef.current.slickNext()
	}
	
	return (
		<Wrapper id="reviews">
			<div className="rev_slider">
				<Slider ref={SliderRef} {...settings}>
					{
						t.array.map((item, index) => {
							return (
								<MediaSliderItem
									count={index + 1}
									total={t.array.length}
									onCallBack={onHandleClick}
									item={item}
									key={index}
								/>
							)
						})
					}
				</Slider>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #F7F7F7;
	margin-top: 100px;
	padding: 120px 0 95px 0;
	@media only screen and (max-width: 600px) {
		padding: 40px 0;
	}
	.featured_media{
		margin-top: 70px;
	}
	.rev_slider{
		position: relative;
		height: 340px;
		@media only screen and (max-width: 600px) {
			height: auto;
		}
	}
`