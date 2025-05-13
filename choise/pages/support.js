import Seo from "helpers/Seo";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import SupportStep0 from "layouts/Support/SupportStep0";
import SupportStep1 from "layouts/Support/SupportStep1";
import SupportStep2 from "layouts/Support/SupportStep2";
import SupportStep3 from "layouts/Support/SupportStep3";
import SupportStep4 from "layouts/Support/SupportStep4";
import SupportStep5 from "layouts/Support/SupportStep5";
import SupportFinal from "layouts/Support/SupportFinal";
import CenterBlock from "helpers/CenterBlock";
import Header from "components/Header";
import Footer from "components/Footer";
import {useRouter} from "next/router";

export default function Support({social, encryptedKey, business}){
	const [step, setStep] = useState(0);
	const [step1, setStep1] = useState({value: '', index: null});
	const [step2, setStep2] = useState({value: '', index: null});
	const [step3, setStep3] = useState({value: '', index: null});
	const [step4, setStep4] = useState({value: '', index: null});
	const [email, setEmail] = useState({value: '', index: null});
	const [phone, setPhone] = useState('');
	const [files, setFiles] = useState([]);
	const [success, setSuccess] = useState(false);
	
	useEffect(() => {
		if (step === 6) {
			getRequest().then(r => {
				console.log(r)
				if (r.status) setSuccess(true)
			})
		}
	}, [step])
	
	const getRequest = async () => {
		const message = `<p>{t.platform} ${step1.value}</p><p>{t.request} ${step2.value}</p><p>{t.problem} ${step3.value.length ? step3.value : '-'}</p><p>{t.describe} ${step4.value}</p><p>{t.email} ${email.value}</p><p>{t.phone ${phone.length ? phone : ''}</p><p>{t.business} ${business ? t.true : ""}</p><p>{t.channel} ${social ? t.true : ""}</p><p>71021RU: ${encryptedKey ? t.true : ""}</p>`
		return (await axios.post("/api/support-message", {email: email.value, message})).data
	}
	
	const renderSteps = () => {
		switch (step){
			case 0: return <SupportStep0 onClick={() => setStep(1)} t={t.step0}/>
			case 1: return <SupportStep1 value={step1} onChange={(e) => setStep1(e)} onClick={(e) => setStep(e)} t={t.step1} />
			case 2: return (
				<SupportStep2
					value={step2}
					onChange={(e) => setStep2(e)}
					onClick={(e) => setStep(e)}
					initValue={(e) => setStep3(e)}
					t={t.step2}
				/>
			)
			case 3: return (
				<SupportStep3
					step2={step2}
					value={step3}
					onChange={(e) => setStep3(e)}
					onClick={(e) => setStep(e)}
					t={t.step3}
				/>
			)
			case 4: return (
				<SupportStep4
					step2={step2}
					value={step4}
					files={files}
					uploadFiles={(e) => setFiles(e)}
					onChange={(e) => setStep4(e)}
					onClick={(e) => setStep(e)}
					t={t.step4}
				/>
			)
			case 5: return (
				<SupportStep5
					email={email.value}
					phone={phone}
					onChange={(e) => setEmail(e)}
					onChangePhone={(e) => setPhone(e)}
					onClick={(e) => setStep(e)}
					t={t.step5}
				/>
			)
			case 6: return <SupportFinal t={t.step_final} success={success}/>
		}
	}
	
	const steps = [step1, step2, step3, step4, email]
	
	const {locale} = useRouter()
	const t = require(`locale/page-support/${locale}.json`)
	
	return (
		<>
			<Seo
				title={t.seo.title}
				description={t.seo.description}
			/>
			<Header/>
			<main>
				{step > 0 && step !== 6 && (
					<Wrapper>
						<CenterBlock>
							<ul>
								{
									steps.map((item, index) => {
										return (
											<li key={index}>
												<button
													disabled={!item.index}
													className={step === index + 1 ? 'active' : ''}
													onClick={() => setStep(index + 1)}
												>{t.step} #{index + 1}</button>
											</li>
										)
									})
								}
							</ul>
						</CenterBlock>
					</Wrapper>
				)}
				{renderSteps()}
			</main>
			<Footer/>
		</>
	)
}

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 100px;
	}
	ul {
		display: flex;
		justify-content: center;
		li {
			margin: 0 20px;
			@media only screen and (max-width: 600px) {
				margin: 0 10px;
			}
			&:first-child {
				margin: 0 20px 0 0;
				@media only screen and (max-width: 600px) {
					margin: 0 10px 0 0;
				}
			}
			&:last-child {
				margin: 0 0 0 20px;
				@media only screen and (max-width: 600px) {
					margin: 0 0 0 10px;
				}
			}
			button {
				width: auto;
				font-size: 14px;
				line-height: 18px;
				&:disabled {
					color: #CACFE2;
					cursor: default;
				}
				&.active {
					color: #2992FA !important;
				}
			}
		}
	}
`

export async function getServerSideProps(ctx) {
	return {
		props: {
			business: ctx.query.b ? ctx.query.b : false,
			social: ctx.query.social ? ctx.query.social : false,
			encryptedKey: ctx.query['71021RU'] ? ctx.query['71021RU']: false
		}
	}
}