import styled from "styled-components";
import Image from "next/image";
import numberFormat from "helpers/numberFormat";

export default function ProfileCharismBetaItem({id}) {
	const renderToken = () => {
		if (+id === 1 || id <= 5) return {
			"image": "/pic/charism/charism-nft-profile-1.png",
			"title": "Mystical"
		}
		if (id > 5 && id <= 15) return {
			"image": "/pic/charism/charism-nft-profile-2.png",
			"title": "Rare"
		}
		if (id > 15 && id <= 50) return {
			"image": "/pic/charism/charism-nft-profile-3.png",
			"title": "Uncommon"
		}
		if (id > 50 && id <= 100) return {
			"image": "/pic/charism/charism-nft-profile-4.png",
			"title": "Common"
		}
	}
	const data = renderToken()
	return (
		<Wrapper className="item">
			<div className="image">
				<Image src={data.image} width={260} height={264} priority={true} alt={data.title}/>
			</div>
			<ul className="content">
				<li><span>Category</span><p>{data.title}</p></li>
				<li><span>Token ID</span><p>{numberFormat(id)}</p></li>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	padding-bottom: 80px;
	.image{
		position: relative;
		z-index: 10;
	}
	.content{
		width: 100%;
		background: #F6F7F8;
		border-radius: 200px 200px 15px 15px;
		height: 237px;
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 20px 25px;
		@media only screen and (max-width: 600px) {
			width: 85%;
		}
		li{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 5px;
			span{
				font-size: 16px;
				line-height: 150%;
				color: #80889C;
			}
			p{
				font-weight: 700;
				font-size: 16px;
				line-height: 150%;
				text-align: right;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
`