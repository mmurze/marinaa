import styled from "styled-components";
import AmbassadorHistoryPoints from "layouts/Profile/AmbassadorHistoryPoints";
import AmbassadorHistoryTasks from "layouts/Profile/AmbassadorHistoryTasks";
import AmbassadorHistoryRewards from "layouts/Profile/AmbassadorHistoryRewards";

export default function ProfileAmbassadorHistory() {
	return (
		<Wrapper>
			<AmbassadorHistoryPoints/>
			<AmbassadorHistoryTasks/>
			<AmbassadorHistoryRewards/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 60px;
	.history_item{
		margin-bottom: 60px;
		&:first-child{
			@media only screen and (max-width: 700px) {
				.history_table{
					display: flex;
					flex-wrap: nowrap;
					overflow-x: auto;
					margin: 30px -20px -20px -20px;
					padding: 0 20px 20px 20px;
					scroll-snap-type: x mandatory;
					scroll-padding: 20px;
				}
				table{
					@media only screen and (max-width: 700px) {
						width: 700px;
						margin-right: 20px;
						flex: 0 0 auto;
						scroll-snap-align: start;
					}
				}
			}
		}
		&:nth-child(2), &:nth-child(3){
			@media only screen and (max-width: 1000px) {
				.history_table{
					display: flex;
					flex-wrap: nowrap;
					overflow-x: auto;
					margin: 30px -20px -20px -20px;
					padding: 0 20px 20px 20px;
					scroll-snap-type: x mandatory;
					scroll-padding: 20px;
				}
			}
			table{
				@media only screen and (max-width: 1000px) {
					width: 1100px;
					margin-right: 20px;
					flex: 0 0 auto;
					scroll-snap-align: start;
				}
			}
		}
		&:last-child{
			margin-bottom: 0;
		}
	}
	.history_table{
		margin-top: 30px;
	}
	table{
		width: 100%;
	}
	thead{
		td{
			padding-bottom: 5px;
		}
		span{
			background: #5CEE9C;
			border-radius: 500px;
			padding: 3px 9px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 500;
			font-size: 14px;
			line-height: 120%;
		}
	}
	tbody{
		tr:last-child td{
			border-bottom: none;
			padding: 15px 0 0 0;
		}
		td{
			padding: 15px 0;
			border-bottom: 1px solid #EEEFF2;
			font-size: 16px;
			line-height: 140%;
			color: #7B8199;
		}
	}
	.show_more_history{
		margin: 60px auto 0 auto;
		width: auto;
		padding: 16px 40px;
		height: 56px;
		border: 1px solid #DDDFE4;
		border-radius: 40px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		&:hover{
			background: #191B20;
			color: #F9F9F9;
		}
	}
	.block_title{
		font-weight: 700;
		font-size: 25px;
		line-height: 100%;
	}
`