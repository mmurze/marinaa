import styled from "styled-components";
import Image from "next/image";

export default function TeamItem({item, nft = false}) {
	return (
		<Wrapper className="item">
			<div className="image">
				<Image src={item.image} width={200} height={200} alt={item.title} priority={true}/>
				{item.fav && <span className="fav"><img src={nft ? "/pic/fav-nft.svg" : "/pic/fav.svg"} alt={`${item.title} fav`}/></span>}
			</div>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: calc(100% / 4 - 48px);
	@media only screen and (max-width: 820px) {
		width: 240px;
		flex: 0 0 auto;
		margin-right: 20px;
		margin-bottom: 0;
	}
	h3{
		font-size: 20px;
		line-height: 100%;
		margin-top: 40px;
	}
	p{
		font-size: 20px;
		line-height: 100%;
		color: #7B8199;
		margin-top: 10px;
	}
	.image{
		background: #ECF0FB;
		border-radius: 0 99.5px 99.5px 0;
		display: flex;
		justify-content: flex-end;
		position: relative;
		img{
			border-radius: 50%;
		}
	}
	.fav{
		position: absolute;
		width: 50px;
		height: 50px;
		background: #F9F9F9;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
		border-radius: 50%;
		left: 0;
		bottom: 0;
	}
`