import styled from "styled-components";

export default function YoutubeVideo({embedSrc, autoplay = false}) {
	return (
		<Wrapper className="youtube_video">
			<iframe width="560" height="315" src={`${embedSrc}?autoplay=${autoplay ? "1" : "0"}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	padding-top: 56.25%;
	border-radius: 20px;
	overflow: hidden;
	iframe {
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		margin: 0;
		top: 0;
		left: 0;
		border: none;
	}
`