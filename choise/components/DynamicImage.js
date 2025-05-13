import Image from "next/image";

export default function DynamicImage({image, priority = true, alt, width = null, height = null, quality = 80}) {
	return (
		image ? (
			<Image
				quality={quality}
				src={image.node.sourceUrl}
				width={width ? width : image.node.mediaDetails.width}
				height={height ? height :image.node.mediaDetails.height}
				priority={priority}
				alt={alt ? alt : ""}
			/>
			) : (
			<img src="" alt={alt}/>
		)
	)
}