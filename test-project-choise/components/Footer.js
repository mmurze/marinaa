import styled from "styled-components";
import Button from "components/Button";
import Title from "helpers/Title";
import CenterBlock from "helpers/CenterBlock";
// import array from "/public/data/footer_name_links.json"
import htmlContent from "helpers/htmlContent";
import {useRouter} from "next/router";
export default function Footer() {
	const {locale}=useRouter()
	const t = require(`locale/components/footer/${locale}.json`)
	return (
		<Wrapper>
			<CenterBlock>
				<div className="container">
					<div className="left">
						<img src="/pic/logo.jpg" alt="logo" />
					</div>
					<div className="right">
						<Title><h4>{t.title}</h4></Title>
						<form>
							<input type="email" placeholder={t.placeholder}/>
							<Button className="border">{t.button_name}</Button>
						</form>
						<p className="form_description">{t.form_description}</p>
						<div className="text">
							{
								htmlContent(t.container_text.text)
							}
						</div>
						<div className='documents'>
							<ul className="left_links">
								{
									t.documents.left.map((item, index) => {
										return (
											<li key={index}>
												<a href="#" target="_blank" rel="noreferrer">
													{item.name}
												</a>
											</li>
										)
									})
								}
							</ul>
							<ul className="right_links">
								{
									t.documents.right.map((item, index) => {
										return (
											<li key={index}>
												<a href="#" target="_blank" rel="noreferrer"><img src={item.slug} alt={item.name}/></a>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</div>
				<div className="links">
					<ul className="left_links">
						{
							t.links.left.map((item, index) => {
								return (
									<li key={index}>
										<a href="#" target="_blank" rel="noreferrer" className="border">
											{item.name}
										</a>
									</li>
								)
							})
						}
					</ul>
					<ul className="right_links">
						<li>
							<a  href="#" target="_blank" rel="noreferrer" className="border">
								<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.8464 9.04057C12.8266 6.89287 14.65 5.84801 14.7334 5.79937C13.7007 4.33137 12.1001 4.13079 11.5376 4.1148C10.1933 3.97686 8.88924 4.89911 8.20442 4.89911C7.50593 4.89911 6.45137 4.12813 5.31479 4.15078C3.8522 4.17277 2.48393 4.9984 1.73351 6.28048C0.184806 8.89463 1.33984 12.7362 2.82361 14.8493C3.56584 15.8841 4.43314 17.0396 5.56835 16.999C6.67896 16.9543 7.09381 16.3086 8.43406 16.3086C9.762 16.3086 10.1516 16.999 11.3093 16.973C12.5013 16.9543 13.2517 15.9334 13.968 14.8892C14.8257 13.7031 15.1701 12.535 15.1838 12.475C15.1558 12.4657 12.869 11.6147 12.8464 9.04057Z" />
									<path d="M10.6594 2.72476C11.2567 1.99643 11.6654 1.00554 11.552 0C10.6874 0.0373164 9.60618 0.583069 8.98355 1.29541C8.43269 1.92313 7.94061 2.95199 8.06773 3.91956C9.03891 3.99019 10.0361 3.44177 10.6594 2.72476Z"/>
								</svg>
								App Store
							</a>
						</li>
						<li>
							<a  href="#" target="_blank" rel="noreferrer" className="border">
								<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.10797 0.20738L11.452 5.38426L8.75039 8.0183L0.777565 0.247136C1.07419 -0.0568822 1.5579 -0.0935192 2.10797 0.20738ZM0.000244141 1.60438C0.000244141 1.21773 0.108978 0.919169 0.296866 0.727404L0.343238 0.682192L8.26968 8.40736V8.58978L0.343238 16.3149L0.296866 16.2729C0.108978 16.0811 0.000244141 15.7825 0.000244141 15.3959V1.60438ZM9.22641 8.58954L11.8656 11.1659L11.928 11.1324L15.0573 9.39947C15.9504 8.90369 15.9504 8.09297 15.0573 7.60031L11.928 5.86429L11.8688 5.83077L9.22641 8.40712V8.58954ZM11.452 11.6122L8.75039 8.97819L0.777565 16.7525C1.07419 17.0565 1.5579 17.0931 2.10797 16.7891L11.452 11.6122Z"/>
								</svg>
								Google play
							</a>
						</li>
						<li>
							<Button className="fill_button">{t.open_button}</Button>
						</li>
					</ul>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.footer`
	margin-top: 90px;
	@media only screen and (max-width: 820px) {
		margin-top: 60px;
	}
	.container{
		border-bottom: 1px solid #EEEEEE;
		border-top: 1px solid #EEEEEE;
		display: flex;
		justify-content: space-between;
		padding-top: 70px;
		gap: 15px;
		img{
			height: 25px;
		}
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			padding-top: 30px;
			gap: 25px;
		}
	}
	.left{
		@media only screen and (max-width: 820px) {
			display: flex;
			justify-content: center;
		}
	}
	.right{
		width: 70%;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
	}
	form{
		display: flex;
		margin: 40px 0 10px;
		padding-bottom: 20px;
		border-bottom: 1.5px solid #EEEEEE;
		@media only screen and (max-width: 820px) {
			margin: 20px 0 10px;
			padding-bottom: 10px;
		}
	}
	.form_description{
		color: #656D81;
		margin-bottom: 60px;
		font-weight: 450;
		font-size: 12px;
		line-height: 150%;
	}
	.text{
		font-weight: 450;
		font-size: 12px;
		line-height: 150%;
		color:  #A2A8B7;
		b{
			color: #000;
		}
	}
	.documents{
		display: flex;
		justify-content: space-between;
	}
	.links{
		display: flex;
		justify-content: space-between;
		@media only screen and (max-width: 900px){
			flex-direction: column;
		}
	}
	
	.documents ul{
		display: flex;
		flex-wrap: wrap;
		margin: 40px 0;
		&.left_links{
			justify-content: flex-start;
			white-space: nowrap;
			gap: 8px 40px;
			
			font-weight: 450;
			font-size: 12px;
			line-height: 150%;
		}
		&.right_links{
			justify-content: flex-end;
		}
	}
	.links ul{
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 40px 0;
		&.left_links{
			justify-content: flex-start;
			@media only screen and (max-width: 900px){
				margin-top: 15px;
				margin-bottom: 0;
			}
			@media only screen and (max-width: 520px){
				justify-content: space-evenly;
			}
		}
		&.right_links{
			justify-content: flex-end;
			@media only screen and (max-width: 900px){
				justify-content: flex-start;
				margin: 15px 0;
			}
			@media only screen and (max-width: 520px){
				justify-content: space-evenly;
			}
		}
		svg{
			fill: black;
			margin-right: 5px;
		}
	}
	img{
		margin-right: 5px;
	}
	.border{
		border-radius: 30px;
		border: 1px solid #EEEEEE;
		white-space: nowrap;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 150px;
		height: 48px;
		//padding: 15px 0;
		
		font-weight: 500;
		font-size: 16px;
		line-height: 120%;
		letter-spacing: -0.03em;
	}

	.fill_button{
		white-space: nowrap;
		width: auto;
		background: black;
		color: white;
		padding: 0 20px;
		
		font-size: 14px;
		line-height: 24px;
	}

`