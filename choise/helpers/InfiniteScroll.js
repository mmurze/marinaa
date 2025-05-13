import {useState} from "react";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";
import LoadingAnimation from "components/LoadingAnimation";

export default function InfiniteScroll({page, total, onCallBack}) {
	const [loading, setLoading] = useState(false)


	const onChange = (e) => {
		if (page < total) {
			if (e) {
				setLoading(true)
				setTimeout(() => {
					setLoading(false)
					onCallBack(page + 1)
				}, 800)
			}
		}
	}

	return (page < total && (
			<VisibilitySensor active={page < total} offset={
				{ bottom: 200 }} onChange={onChange}>
				{loading ? <LoadingAnimation/> : <p>&nbsp;</p>}
			</VisibilitySensor>)
	)
}

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  position: relative;
  top: 40px;
  &.active{
    top: 0;
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  p{
    margin: 0;
    &:first-child{
      line-height: 0;
      animation: circle infinite 2s linear;
    }
    &:last-child{
      font-weight: bold;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-left: 9px;
    }
  }
  @keyframes circle
  {
    0% {transform: rotate(0)}
    100% {transform: rotate(360deg)}
  }
`
