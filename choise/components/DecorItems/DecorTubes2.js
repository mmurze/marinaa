import Image from "next/image";

export default function DecorTubes2({alt, className}) {
	return (
		<div className={`${className ? className : ""} decor_tube_2`}>
			<Image src="/pic/decor/decor-2.png" width={157} height={125} priority={true} alt={alt}/>
		</div>
	)
}