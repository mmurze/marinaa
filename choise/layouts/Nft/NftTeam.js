import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import TeamItem from "components/TeamItem";

export default function NftTeam({t}) {
	return (
		<Wrapper id="team">
			<CenterBlock>
				<h2>{t.title}</h2>
				<div className="list">
					{
						t.array.map((item, index) => {
							return <TeamItem nft={true} item={item} key={index}/>
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 100px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	h2{
		font-size: 48px;
		line-height: 100%;
		text-align: center;
		@media only screen and (max-width: 600px) {
			font-size: 30px;
			line-height: 100%;
		}
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 70px;
		@media only screen and (max-width: 600px) {
			flex-wrap: nowrap;
			overflow-x: auto;
			margin: 70px -20px -40px -20px;
			padding: 0 20px 40px 20px;
		}
	}
	.item{
		width: calc(100% / 3 - 48px);
		margin-right: 0;
		@media only screen and (max-width: 600px) {
			width: 240px;
			flex: 0 0 auto;
			margin-right: 30px;
			margin-bottom: 0;
		}
	}
`