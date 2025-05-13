import Image from "next/image";

export default function DecorTubes1({alt, className}) {
	return (
		<div className={`${className ? className : ""} decor_tube_1`}>
			<Image src="/pic/decor/decor-1.png" width={171} height={153} priority={true} alt={alt}/>
		</div>
	)
}