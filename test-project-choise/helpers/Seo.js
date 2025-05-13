import {NextSeo} from 'next-seo';
import {useRouter} from "next/router";
import Head from "next/head";

export default function Seo({title = "", description = "", image = null, type = 'website', keywords = "", noindex = false, nofollow = false}) {
	const {asPath} = useRouter()
	const slug = "https://nto.choise.com"
	const titleHead = 'Chobies NFT'
	return (
		<>
			<Head>
				<meta name="keywords" content={keywords}/>
			</Head>
			<NextSeo
				title={`${titleHead} | ${title}`}
				description={description}
				noindex={noindex}
				nofollow={nofollow}
				openGraph={{
					url: `${slug}${asPath}`,
					title: `${titleHead} | ${title}`,
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
