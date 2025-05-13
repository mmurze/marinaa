import {NextSeo} from 'next-seo';
import { useRouter } from "next/router";
import Head from "next/head";

export default function Seo({title, description, image = null, type = 'website', keywords = "", dynamic = true}) {
	const {asPath} = useRouter()
	const slug = "https://choise.com"
	const titleHead = 'Choise.com'
	const renderTitle = dynamic ? `${title} | ${titleHead}` : titleHead
	return (
		<>
			<Head>
				<link rel="canonical" href={`${slug}${asPath}`}/>
			</Head>
			<NextSeo
				title = {renderTitle}
				description = {description}
				keywords = {keywords}
				openGraph = {{
					url: `${slug}${asPath}`,
					title: renderTitle,
					description: description,
					type: type,
					site_name: titleHead,
					images: [
						{
							url: image ? image.search('http') !== -1 ? image : image ? `${slug}${image}` : "" : "",
							width: 1024,
							height: 512,
							alt: title,
						}
					]
				}}
				twitter={{
					cardType: 'summary_large_image',
				}}
			/>
		</>
	)
}
