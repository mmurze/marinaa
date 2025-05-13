import styled from "styled-components";

export default function SupportFileAttach({onChange, files}) {
	return (
		<Wrapper className="file_upload">
			<input type="file" multiple={true} onChange={onChange}/>
			<div className="attach_file">
				<img src={files.length ? '/pic/file-attach-active.svg' : '/pic/file-attach.svg'} alt="attach file"/>
				{files.length ? <p>File attached</p> : null}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.label`
	input{
		display: none;
	}
	.attach_file{
		display: flex;
		align-items: center;
		p{
			margin: 0 0 0 10px;
			font-size: 12px;
			line-height: 15px;
			text-align: right;
			color: #ABB1CC;
		}
	}
`
