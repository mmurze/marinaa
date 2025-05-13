import styled from "styled-components";
import {
	FacebookShareButton,
	TelegramShareButton,
	TwitterShareButton,
} from "react-share";
import {useRouter} from "next/router";

export default function ShareButtons({title}) {
	const {asPath} = useRouter()
	const link = `https://choise.com${asPath}`
	
	return (
		<Wrapper>
			<TwitterShareButton url={link} title={`${title} - Twitter`}>
				<img src="/pic/share/twitter.svg" alt={title}/>
			</TwitterShareButton>
			<TelegramShareButton url={link} title={title}>
				<img src="/pic/share/telegram.svg" alt={`${title} - Telegram`}/>
			</TelegramShareButton>
			<FacebookShareButton url={link}>
				<img src="/pic/share/facebook.svg" alt={`${title} - Facebook`}/>
			</FacebookShareButton>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	margin-top: 30px;
	button{
		width: 38px;
		height: 38px;
		background: #7B8199 !important;
		border-radius: 50%;
		margin-right: 15px;
		&:hover{
			background: #0088FF !important;
		}
		&:last-child{
			margin-right: 0;
		}
	}
`