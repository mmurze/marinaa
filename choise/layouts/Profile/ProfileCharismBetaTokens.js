import styled from "styled-components";
import NftLoadingNotFound from "components/NftLoadingNotFound";
import {useSnapshot} from "valtio";
import {state} from "state";
import ProfileCharismBetaItem from "layouts/Profile/ProfileCharismBetaItem";

export default function ProfileCharismBetaTokens({children}) {
	const snap = useSnapshot(state);
	return (
		<Wrapper>
			<div className="top_filters">
				{children}
			</div>
			{
				snap.ownerCharismBetaNft ? (
					snap.ownerCharismBetaNft.length > 0 ? (
						<div className="list">
							{
								snap.ownerCharismBetaNft.map((item, index) => {
									return <ProfileCharismBetaItem key={index} id={item}/>
								})
							}
						</div>
					) : <NftLoadingNotFound loading={false}/>
				) : <NftLoadingNotFound loading={true}/>
			}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 68px;
	@media only screen and (max-width: 600px) {
		margin-top: 40px;
	}
	.top_filters{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		position: relative;
		z-index: 20;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.list{
		margin-top: 80px;
		display: flex;
		flex-wrap: wrap;
		margin-right: -30px;
		margin-bottom: -30px;
		@media only screen and (max-width: 600px) {
			margin-right: 0;
		}
	}
	.item{
		width: calc(100% / 4 - 30px);
		margin-right: 30px;
		margin-bottom: 30px;
		@media only screen and (max-width: 1024px) {
			width: calc(100% / 3 - 30px);
		}
		@media only screen and (max-width: 820px) {
			width: calc(100% / 2 - 30px);
		}
		@media only screen and (max-width: 600px) {
			width: 100%;
			margin-right: 0;
		}
	}
`