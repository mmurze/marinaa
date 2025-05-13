import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function NewsWrapper({children, fullPost = false}) {
	return (
		<Wrapper className={fullPost ? "full_post" : ""}>
			<CenterBlock>
				{children}
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 80px;
	@media only screen and (max-width: 820px) {
		margin-top: 40px;
	}
	&.full_post{
		margin-top: 120px;
		@media only screen and (max-width: 820px) {
			margin-top: 100px;
		}
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
	}
	.categories{
		width: 160px;
		margin-top: 12px;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	.news_content{
		width: calc(100% - 160px);
		padding-left: 50px;
		@media only screen and (max-width: 820px) {
			width: 100%;
			padding-left: 0;
			margin-top: 20px;
		}
	}
`