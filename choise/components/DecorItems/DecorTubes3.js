import Image from "next/image";

export default function DecorTubes3({alt, className}) {
	return (
		<div className={`${className ? className : ""} decor_tube_3`}>
			<Image src="/pic/decor/decor-3.png" width={147} height={162} priority={true} alt={alt}/>
		</div>
	)
}