import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";

export default function ProfileTabs({onClick, tab}) {
	const array = [
		{
			"title": "NFT holders",
			"value": "nft"
		},
		{
			"title": "Ambassadors",
			"value": "ambassadors"
		}
	]
	return (
		<Wrapper>
			<CenterBlock width={1140}>
				<ul>
					{
						array.map((item, index) => {
							return (
								item.soon ? (
									<li className="soon" key={index}>{item.title} <span>soon</span></li>
								) : (
									<li className={tab === item.value ? "active" : ""} key={index} onClick={() => onClick(item.value)}>{item.title}</li>
								)
							)
						})
					}
				</ul>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 80px;
	ul{
		display: flex;
		border-bottom: 2px solid #EEEFF2;
		li{
			margin-right: 30px;
			margin-bottom: 15px;
			font-weight: 500;
			font-size: 20px;
			line-height: 150%;
			position: relative;
			cursor: pointer;
			transition: .3s ease-in-out;
			&.soon{
				cursor: default;
				color: #C7CBD3;
				span{
					background: #0285FD;
					border-radius: 100px;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					font-size: 12px;
					color: #F9F9F9;
					margin-left: 5px;
					padding: 5px 10px;
					height: 25px;
				}
			}
			&:before{
				content: "";
				position: absolute;
				bottom: -17px;
				left: 0;
				width: 100%;
				background: #0285FD;
				border-radius: 100px;
				height: 5px;
				opacity: 0;
				transition: .3s ease-in-out;
			}
			&.active{
				color: #0285FD;
				transition: .3s ease-in-out;
				&:before{
					transition: .3s ease-in-out;
					opacity: 1;
				}
			}
			&:last-child{
				margin-right: 0;
			}
		}
	}
`