import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";

export default function WalletSendMap({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<ul>
					{
						t.array.map((item, index)=>{
							return(
								<li key={index}>{item}</li>
							)
						})
					}
				</ul>
				<div className="image">
					<Image src="/pic/wallet/send-map.jpg" width={1201} height={672.29} priority={true} alt="Send Map"/>
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
	ul{
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		li{
			margin: 0 5px;
			background: #5CEE9C;
			border-radius: 100px;
			padding: 8px 24px;
			font-size: 20px;
			line-height: 24px;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 17px;
			}
		}
	}
	.image{
		margin-top: 50px;
	}
`