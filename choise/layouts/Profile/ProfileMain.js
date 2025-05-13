import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import ProfileForm from "layouts/Profile/ProfileForm";
import ProfileAmbassador from "layouts/Profile/ProfileAmbassador";
import ProfileMintedTotal from "layouts/Profile/ProfileMintedTotal";

export default function Profile() {
	return (
		<Wrapper>
			<CenterBlock width={1140}>
				<ProfileForm/>
				<div className="list">
					<ProfileAmbassador/>
					<ProfileMintedTotal/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	.list{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
		}
		.item{
			width: calc(50% - 5px);
			@media only screen and (max-width: 820px) {
				width: 100%;
				margin-bottom: 10px;
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
	}
`