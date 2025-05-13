import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import numberFormat from "helpers/numberFormat";
import moment from "moment";

export default function CrptToken({array, max, t}) {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>{t.title}</h2></Title>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<Item height={(item.burn / max) * 100} className="item" key={index}>
									<div className="line"><span/></div>
									<p className="value">{numberFormat(item.burn, ",", ",")}</p>
									<p className="date">{moment(item.date).format("MMM | YYYY")}</p>
								</Item>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Item = styled.div`
	position: relative;
	width: 90px;
	margin-right: 20px;
	flex: 0 0 auto;
	&:last-child{
		margin-right: 0;
	}
	.date{
		height: 20px;
		padding: 4px 8px;
		background: #DDDFE4;
		border-radius: 100px;
		font-weight: 500;
		font-size: 10px;
		line-height: 12px;
		color: #80889C;
		text-align: center;
		margin-top: 5px;
	}
	.value{
		font-weight: 700;
		font-size: 20px;
		line-height: 100%;
		margin-top: 10px;
	}
	.line{
		position: relative;
		width: 10px;
		height: 200px;
		span{
			width: 100%;
			position: absolute;
			height: ${p => p.height}%;
			background: #5CEE9C;
			border-radius: 20px;
			bottom: 0;
		}
	}
`

const Wrapper = styled.section`
	margin-top: 120px;
	@media only screen and (max-width: 600px) {
		margin-top: 70px;
	}
	.list{
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
		margin-top: 50px;
		padding-bottom: 20px;
		margin-bottom: -20px;
		&::-webkit-scrollbar { width: 3px; height: 10px;}
		&::-webkit-scrollbar-button {  display: none }
		&::-webkit-scrollbar-track {  background-color: #0285FD;}
		&::-webkit-scrollbar-track-piece { background-color: #DDDFE4;}
		&::-webkit-scrollbar-thumb { height: 50px; background-color: #0285FD; border-radius: 20px;}
		&::-webkit-scrollbar-corner { background-color: #0285FD;}
		&::-webkit-resizer { background-color: #0285FD;}
	}
`