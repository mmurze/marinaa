import styled from "styled-components";
import {useEffect, useState} from "react";
import Modal from "components/Modal";
import {getAvailableCountries} from "utils/functions";
import {useRouter} from "next/router";

export default function AvailableCountriesModal() {
	const {locale} = useRouter()
	const {check_countries_modal} = require(`locale/components/${locale}.json`)
	const [visible, setVisible] = useState(false)
	const [array, setArray] = useState([])
	useEffect(() => {
		getAvailableCountries().then(r => setArray(r))
	}, [])
	return (
		<Wrapper>
			<Modal active={visible} onCallBack={setVisible}>
				<ul className="continent_list">
					{
						array.map((item, index) => {
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			</Modal>
			<button className="check_countries" onClick={() => setVisible(!visible)}>{check_countries_modal}</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	color: #191B20;
	.continent_list{
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
		li{
			width: calc(50% - 10px);
			margin-bottom: 7px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.check_countries{
		background: #FFFB1F;
		border-radius: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		height: 56px;
		width: auto;
		padding: 16px 40px;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			margin-top: 40px;
		}
		@media only screen and (max-width: 600px) {
			margin-top: 20px;
		}
	}
`
