import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useState} from "react";
import Input from "components/Forms/Input";
import Router, {useRouter} from "next/router";
import Title from "components/Title";

export default function HelpSearch({main = false, value = ""}) {
	const {locale} = useRouter()
	const {helpSearch} = require(`locale/components/${locale}.json`)
	
	const [search, setSearch] = useState(value)
	const onHandleSubmit = (e) => {
		e.preventDefault()
		Router.push(`/help/search?s=${search}`)
	}
	
	return (
		<Wrapper className={main ? "main" : ""}>
			<CenterBlock>
				<Title><h1>{helpSearch.title}</h1></Title>
				<form onSubmit={onHandleSubmit}>
					<Input value={search} onChange={setSearch} placeholder="Ask a question..." required={true}/>
					<button disabled={!search.length}>
						<img src="/pic/search-icon.svg" alt="Search"/>
						{helpSearch.title_button}
					</button>
				</form>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	&.main {
		form{
			margin: 60px auto 0 auto;
		}
		.title{
			text-align: center;
		}
	}
	form{
		position: relative;
		margin-top: 60px;
		max-width: 768px;
		width: 100%;
	}
	input{
		border: 1px solid #DDDFE4;
		border-radius: 30px;
	}
	button{
		width: auto;
		position: absolute;
		top: 3px;
		right: 3px;
		background: #0285FD;
		border-radius: 30px;
		height: 50px;
		padding: 16px 30px;
		font-weight: 450;
		font-size: 18px;
		line-height: 100%;
		color: #F9F9F9;
		&:disabled{
			cursor: default;
			opacity: .7;
			&:hover{
				background: #0285FD;
			}
		}
		&:hover{
			background: #191B20;
		}
		img{
			line-height: 0;
			margin-right: 11px;
		}
	}
`