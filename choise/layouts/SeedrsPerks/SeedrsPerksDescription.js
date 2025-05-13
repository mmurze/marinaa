import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Link from "next/link";
import htmlContent from "helpers/htmlContent";
export default function SeedrsPerksDescription({t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="list">
					{
						t.first_part_list.map((item, index) =>{
							return(
								<p key={index}>{htmlContent(item)}</p>
							)
						})
					}
					<p>{t.link_with_desc} <Link href="/help/360005368120/360021073719">https://choise.com/help/categories/article/360021073719</Link>
					</p>
					{
						t.second_part_list.map((item, index) =>{
							return(
								<p key={index}>{htmlContent(item)}</p>
							)
						})
					}
				</div>
				<div className="list disclaimer">
					<p>{t.disclaimer_title}</p>
					<p>{t.disclaimer_description}</p>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 60px;
	@media only screen and (max-width: 600px) {
		margin-top: 45px;
	}
	.list{
		&.disclaimer{
			margin-top: 25px;
		}
		p{
			font-size: 14px;
			line-height: 150%;
			color: #80889C;
			margin-bottom: 5px;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 150%;
			}
			&:last-child{
				margin-bottom: 0;
			}
		}
		a{
			color: #80889C;
			text-decoration: underline;
			&:hover{
				color: #191B20;
			}
		}
	}
`