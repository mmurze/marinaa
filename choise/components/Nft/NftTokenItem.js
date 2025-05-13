import styled from "styled-components";
import Image from "next/image";
import {renderNftImage} from "utils/nft";
import {useSnapshot} from "valtio";
import {state} from "state";
import NftTraits from "components/Nft/NftTraits";

export default function NftTokenItem({item, sale = false, profile= false}) {
	const snap = useSnapshot(state);
	return (
		<Wrapper className="token_item">
			{snap.phone.length ? (
				<button
					onClick={() => state.claimModalData = item}
					className="resolve_claim">Resolve Claim
				</button>
			) : null}
			<div className="token_image">
				<Image src={renderNftImage(item.tokenType)} width={600} height={576.18} alt={`${item.traits.token_category} ${item.pieces}`}/>
			</div>
			<div className="token_content">
				<div className="type">{item.traits.token_category.toLowerCase()}</div>
				{sale && (
					<div className="sale">
						<span className="sale_title">CHO NFT Sale</span>
						{!profile && <span className="sale_pieces">{item.pieces} pieces</span>}
					</div>
				)}
				<NftTraits item={item}/>
			</div>
			{item.tokenId && (
				<div className="token_id_block">
					<span>Token #{item.tokenId} - {item.traits.token_category}</span>
				</div>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-bottom: 60px;
	position: relative;
	.resolve_claim{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		font-size: 0;
	}
	.token_content{
		padding: 30px 20px;
		letter-spacing: -0.03em;
		background: #F7F7F7;
		border-radius: 0 0 8px 8px;
		min-height: 190px;
	}
	.type{
		font-size: 12px;
		line-height: 100%;
		color: #7B8199;
	}
	.token_id_block{
		display: flex;
		justify-content: center;
		position: relative;
		z-index: 10;
		span{
			background: #F9F9F9;
			border: 1px solid #EBEBEB;
			border-radius: 500px;
			padding: 2px 16px;
			margin: 60px auto 0 auto;
			text-align: center;
		}
	}
	.sale{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.sale_title{
		font-weight: 700;
		font-size: 12px;
		line-height: 120%;
		text-transform: uppercase;
	}
	.sale_pieces{
		background: #191B20;
		border-radius: 100px;
		padding: 4px 12px;
		height: 22px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #F9F9F9;
		font-weight: 500;
		font-size: 12px;
		line-height: 14px;
	}
`