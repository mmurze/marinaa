import styled from "styled-components";
import BusinessForm from "layouts/Business/BusinessForm";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function BusinessFormModal() {
	const snap = useSnapshot(state);
	return (
		<Wrapper className={snap.businessFormModal ? "active" : ""}>
			<div className="modal">
				<button
					onClick={() => state.businessFormModal = false}
					className="success_close">
					<img src="/pic/business/success-close.svg" alt="Success close"/>
				</button>
				<BusinessForm modal={true}/>
			</div>
			<div className="overlay"/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999;
	align-items: center;
	justify-content: center;
	display: none;
	&.active{
		display: flex;
	}
	.modal{
		position: relative;
		max-width: 990px;
		width: calc(100% - 40px);
		background: #272A32;
		color: #fff;
		overflow-y: auto;
		z-index: 20;
		border-radius: 30px;
		@media only screen and (max-width: 600px) {
			max-height: 90vh;
		}
	}
	.success_close{
		position: absolute;
		top: 30px;
		right: 30px;
		width: 30px;
		height: 30px;
		background: #454A58;
		border-radius: 50%;
		z-index: 10;
	}
	.overlay{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		background: rgba(0, 0, 0, .4);
	}
	.form_block h2{
		padding-right: 40px;
	}
`