import styled from "styled-components";

export default function NftTokenGrid({children, type}) {
	return (
		<Wrapper className={`token_list ${type}`}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -10px;
	margin-bottom: -60px;
	@media only screen and (max-width: 1024px) {
		flex-wrap: nowrap;
		overflow-x: auto;
		margin-right: -20px;
		margin-left: -20px;
		padding: 0 20px;
	}
	&.platinum{
		@media only screen and (max-width: 1180px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin-right: -40px;
			margin-left: -40px;
			padding: 0 40px;
		}
		@media only screen and (max-width: 1024px) {
			margin-right: -20px;
			margin-left: -20px;
			padding: 0 20px;
		}
		.token_item{
			width: calc(100% / 5 - 10px);
			@media only screen and (max-width: 1180px) {
				width: calc(100% / 4 - 10px);
				flex: 0 0 auto;
				margin-right: 20px;
			}
			@media only screen and (max-width: 1024px) {
				width: 277px;
			}
		}
	}
	.token_item{
		width: calc(100% / 4 - 10px);
		margin-right: 10px;
		margin-bottom: 60px;
		@media only screen and (max-width: 1024px) {
			width: 277px;
			flex: 0 0 auto;
			margin-right: 20px;
		}
	}
`