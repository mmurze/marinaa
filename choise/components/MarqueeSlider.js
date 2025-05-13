import Marquee from "react-fast-marquee";

export default function MarqueeSlider({children}) {
	return (
		<Marquee pauseOnHover={true} gradient={false}>
			{children}
		</Marquee>
	)
}