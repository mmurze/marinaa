import styled from "styled-components";
import numberFormat from "helpers/numberFormat";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useEffect, useState} from "react";
import AmbassadorTaskModal from "layouts/Ambassador/AmbassadorTaskModal";
import Link from "next/link";
import {checkSingleTaskReward} from "utils/ambassador";
import htmlContent from "helpers/htmlContent";
import AmbassadorTaskModalWelcome from "layouts/Ambassador/AmbassadorTaskModalWelcome";
import stringTrim from "helpers/stringTrim";
import {stateWeb3} from "state/web3";
import {useRouter} from "next/router";

export default function AmbassadorTaskItem({item, modal = false, t}) {
	const {locale} = useRouter()
	const {task} = require(`locale/page-ambassador/${locale}.json`)
	const {wallet} = useSnapshot(stateWeb3)
	const snap = useSnapshot(state);
	const [visible, setVisible] = useState(false)
	const [disabledSingle, setDisabledSingle] = useState(true)
	
	useEffect(() => {
		if (!item.single) setDisabledSingle(false)
		if (wallet && item.single) makeRequest()
	}, [item.single, wallet])
	
	const makeRequest = () => {
		if (snap.verificatedUser) {
			checkSingleTaskReward({
				userWallet: wallet,
				id: item.id,
				table: "task"
			}).then(r => {
				if (item.single) {
					setDisabledSingle(r)
				} else setDisabledSingle(false)
			})
		}
	}
	
	return (
		<Wrapper className={`item ${modal ? "modal" : ""}`}>
			{
				item.welcome ? (
					<AmbassadorTaskModalWelcome
						item={item}
						visible={visible}
						onCallBack={() => {
							setVisible(false)
							makeRequest()
						}}
					/>
				) : (
					<AmbassadorTaskModal
						item={item}
						onCallBack={() => {
							setVisible(false)
							makeRequest()
						}}
						visible={visible}/>
				)
			}
			<div className="top">
				<div className="card_id">
					<p>{task.item.ID} {item.id}</p>
					<p>{item.single && <p className="single">{task.item.single}</p>}</p>
				</div>
				<h3>{item.title}</h3>
				{
					!modal && (
						<div className="card_description_block">
							<p className="description_full">{htmlContent(item.content)}</p>
							<div className="card_description">
								{stringTrim(item.content, 110)}
							</div>
						</div>
					)
				}
				{!modal && item.tags && (
					<div className="tags_list_block">
						<div className="tags_label">{task.item.tags_label}</div>
						<ul className="tags_list">
							{
								item.tags.map((item, index) => {
									return (
										<li
											className={item.toLowerCase().replace(/[^a-zа-яё]/gi, '')}
											key={index}
										>{item}</li>
									)
								})
							}
						</ul>
					</div>
				)}
			</div>
			<div className="bottom">
				<div className="reward">
					<span>{task.item.reward}</span>
					<p>{numberFormat(item.points, ",", ",")} {task.item.points}</p>
				</div>
				{modal && <div className="modal_description">{item.user_message}</div>}
				{
					!modal ? (
						wallet ? (
							snap.verificatedUser ? (
								<button
									disabled={disabledSingle}
									onClick={() => setVisible(true)}
									className="start_button">{item.welcome ? disabledSingle ? "Complete" : "Claim" : "Complete"}</button>
							) : (
								<Link href="/profile" className="start_button">{task.item.sign_up}</Link>
							)
						) : (
							<button onClick={() => state.walletConnectModal = true} className="start_button">{task.item.connect_wallet}</button>
						)
					) : null
				}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	border: 1px solid #DDDFE4;
	border-radius: 10px;
	background: #F9F9F9;
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&.modal{
		border-radius: 0;
		padding: 5px 0 0 0;
		background: transparent;
		border: none;
		width: 100%;
		h3{
			margin-top: 0;
		}
		.card_id{
			padding-right: 50px;
		}
	}
	.card_id{
		font-size: 16px;
		line-height: 110%;
		color: #80889C;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #F3F3F3;
		padding-bottom: 20px;
	}
	h3{
		margin-top: 15px;
		font-size: 21px;
		line-height: 120%;
		text-transform: lowercase;
	}
	.modal_description{
		margin-top: 10px;
		font-size: 16px;
		line-height: 120%;
		color: #80889C;
		ol{
			list-style-type: none;
			counter-reset: num;
			li{
				position: relative;
				&:before{
					position: absolute;
					left: 0;
					content: counter(num);
					counter-increment: num;
				}
			}
		}
		ul, ol{
			li{
				padding-left: 15px;
				margin-bottom: 10px;
				&:last-child{
					margin-bottom: 0;
				}
				::marker{
					color: transparent;
				}
				list-style: initial;
			}
		}
		a{
			color: #0285FD;
			text-decoration: underline;
		}
		p{
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
		}
	}
	.card_description_block{
		margin-top: 10px;
		position: relative;
		&:hover{
			.description_full{
				opacity: 1;
				visibility: visible;
				transition: .3s ease-in-out;
			}
		}
	}
	.description_full{
		max-width: 326px;
		width: 100%;
		font-size: 14px;
		line-height: 1.5;
		background: rgba(0, 0, 0, 0.8);
		border-radius: 12px;
		top: 0;
		left: 0;
		position: absolute;
		z-index: 10;
		color: #F9F9F9;
		padding: 15px 10px;
		opacity: 0;
		visibility: hidden;
		transition: .3s ease-in-out;
		cursor: default;
		ol{
			list-style-type: none;
			counter-reset: num;
			li{
				position: relative;
				&:before{
					position: absolute;
					left: 0;
					content: counter(num);
					counter-increment: num;
				}
			}
		}
		ul, ol{
			li{
				padding-left: 15px;
				margin-bottom: 10px;
				&:last-child{
					margin-bottom: 0;
				}
				::marker{
					color: transparent;
				}
				list-style: initial;
			}
		}
		a{
			color: #F9F9F9;
			text-decoration: underline;
		}
	}
	.card_description{
		font-size: 16px;
		line-height: 120%;
		color: #80889C;
		ol{
			list-style-type: none;
			counter-reset: num;
			li{
				position: relative;
				&:before{
					position: absolute;
					left: 0;
					content: counter(num);
					counter-increment: num;
				}
			}
		}
		ul, ol{
			li{
				padding-left: 15px;
				margin-bottom: 10px;
				&:last-child{
					margin-bottom: 0;
				}
				::marker{
					color: transparent;
				}
				list-style: initial;
			}
		}
		a{
			color: #0285FD;
			text-decoration: underline;
		}
	}
	.reward{
		margin-top: 20px;
		span{
			font-size: 16px;
			line-height: 150%;
			display: block;
			color: #80889C;
		}
		p{
			font-weight: 700;
			font-size: 18px;
			line-height: 120%;
			color: #0285FD;
			margin-top: 6px;
		}
	}
	.start_button{
		padding: 16px 65px;
		height: 56px;
		border-radius: 40px;
		border: 1px solid #C6CAD3;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		margin-top: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		&:disabled{
			opacity: .4;
			cursor: default;
			&:hover{
				border: 1px solid #C6CAD3;
				background: transparent;
			}
		}
		&:hover{
			background: #FFFB1F;
			border: 1px solid #FFFB1F;
		}
	}
	.tags_list_block{
		margin-top: 20px;
	}
	.tags_label{
		font-size: 16px;
		line-height: 150%;
		color: #80889C;
	}
	.tags_list{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: -5px;
		margin-top: 5px;
		li{
			margin-right: 5px;
			background: #EEEFF2;
			border-radius: 100px;
			font-size: 16px;
			line-height: 19px;
			color: #80889C;
			padding: 5px 15px;
			margin-bottom: 5px;
			&.everyone{
				background: #EEEFF2;
				color: #80889C;
			}
			&.bloggers{
				background: #FFDA15;
				color: #191B20;
			}
			&.influencers{
				background: #A55ADF;
				color: #F9F9F9;
			}
			&.communityowners{
				background: #24BE74;
				color: #F9F9F9;
			}
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.soon{
		padding: 16px 65px;
		height: 56px;
		border-radius: 40px;
		border: 1px solid #C6CAD3;
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		margin-top: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		opacity: .4;
		cursor: default;
	}
`