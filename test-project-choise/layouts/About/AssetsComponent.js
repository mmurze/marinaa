import styled from "styled-components";
export default function AssetsComponent({t}) {
	return (
		<Wrapper className="component">
			<ul className="icons">
				{
					t.list.map((item, index) => {
						return(
							<li key={index}><img src={item.slug} alt={item.alt}/></li>
						)
					})
				}
				<li className="plus"><img src="/pic/about/assets/plus.svg" alt="plus"/></li>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	ul{
		display: flex;
		border-radius: 30px;
		border: 1px solid #DDDFE4;
		width: fit-content;
		padding: 10px;
		gap: 10px;
		@media only screen and (max-width: 600px) {
			margin: 0 auto;
		}
		li{
			border-radius: 30px;
			background: #FFFB1F;
			position: relative;
			box-sizing: border-box;
			width: 40px;
			height: 40px;
			&.plus{
				background: #7EE3B3;
			}
			img{
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				position: absolute;
			}
		}
	}
`