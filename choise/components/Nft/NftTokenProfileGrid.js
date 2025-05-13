import styled from "styled-components";

export default function NftTokenProfileGrid({children, type, profile = false}) {
	return (
		<Wrapper className={`token_list ${type} ${profile ? "profile" : ""}`}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -10px;
	margin-bottom: 60px;
	@media only screen and (max-width: 500px) {
		margin-right: 0;
	}
	&.platinum{
		.token_item{
			width: calc(100% / 5 - 10px);
		}
	}
	.token_item{
		width: calc(100% / 4 - 10px);
		margin-right: 10px;
		@media only screen and (max-width: 1024px) {
			width: calc(100% / 3 - 10px);
		}
		@media only screen and (max-width: 600px) {
			width: calc(100% / 2 - 10px);
		}
		@media only screen and (max-width: 500px) {
			width: 100%;
			margin-right: 0;
		}
	}
	&.profile{
		.token_item{
			width: calc(100% / 4 - 10px);
			margin-right: 10px;
			@media only screen and (max-width: 1024px) {
				width: calc(100% / 3 - 10px);
			}
			@media only screen and (max-width: 600px) {
				width: calc(100% / 2 - 10px);
			}
			@media only screen and (max-width: 500px) {
				width: 100%;
				margin-right: 0;
			}
		}
	}
`