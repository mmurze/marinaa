import Image from "next/image"

export default function DirectusImage({data, priority = true, width, height, alt, className}) {
	return (
		<Image
			className={`directus_image ${className ? className : ""}`}
			src={data.image ? `${process.env.DIRECTUS_IMAGE}/${data.image.filename_disk}` : data.old_image}
			title={data.title}
			priority={priority}
			width={data.image?.width ? data.image.width : width}
			height={data.image?.height ? data.image.height : height}
			alt={alt ? alt : data.title}
		/>
	)
}