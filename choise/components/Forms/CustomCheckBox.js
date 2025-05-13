import styled from "styled-components";

export default function CustomCheckBox({checked = false, onClick, children}) {
	return (
		<Wrapper className="form_input custom_checkbox">
			<span onClick={() => onClick(!checked)} className={checked ? "active" : ""}>
				<svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M6.17549 1.0699L2.83508 4.41032C2.7413 4.50409 2.61411 4.55677 2.4815 4.55676C2.34888 4.55675 2.22169 4.50406 2.12793 4.41027L0.0405273 2.32238L0.747717 1.61536L2.48157 3.34961L5.46839 0.362793L6.17549 1.0699Z"/>
				</svg>
			</span>
			<p>{children}</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: relative;
	padding-left: 30px;
	display: flex;
	align-items: center;
	width: 100%;
	span{
		border: 1px solid #F9F9F9;
		background: #F9F9F9;
		border-radius: 4px;
		transition: all .3s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
		width: 18px;
		height: 18px;
		position: absolute;
		left: 0;
		cursor: pointer;
		svg{
			transition: all .3s ease-in-out;
			fill: #F9F9F9;
		}
		&.active{
			svg{
				transition: all .3s ease-in-out;
				fill: #191B20;
			}
		}
	}
	a{
		color: #0285FD;
		text-decoration: underline;
		@media only screen and (max-width: 600px) {
			display: block;
		}
	}
	p{
		font-size: 16px;
		line-height: 120%;
		letter-spacing: -0.03em;
		text-align: left;
	}
`