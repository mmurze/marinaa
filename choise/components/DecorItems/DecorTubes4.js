import Image from "next/image";

export default function DecorTubes4({alt, className}) {
	return (
		<div className={`${className ? className : ""} decor_tube_4`}>
			<Image src="/pic/decor/decor-4.png" width={182} height={163} priority={true} alt={alt}/>
		</div>
	)
}