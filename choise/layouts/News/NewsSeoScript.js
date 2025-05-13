import Head from "next/head";
import {directusImage} from "utils/news";
import stringTrim from "helpers/stringTrim";
export default function NewsSeoScript({data}) {
	return (
		<Head>
			<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{
				  "@context": "https://schema.org",
				  "@type": "Article",
				  "mainEntityOfPage": {
				    "@type": "WebPage",
				    "@id": "https://choise.com/news/${data.category.slug}/${data.slug}"
				  },
				  "headline": "${data.seo_title ? data.seo_title : data.title}",
				  "description": "${data.seo_description ? data.seo_description : data.short_description}",
				  "image": "${data.seo_image ? directusImage(data.seo_image) : data.image ? directusImage(data.image) : data.old_image}",
				  "author": {
				    "@type": "Organization",
				    "name": "Choise.com team"
				  },
				  "publisher": {
				    "@type": "Organization",
				    "name": "Choise.com",
				    "logo": {
				      "@type": "ImageObject",
				      "url": "https://choise.com/pic/logo.svg"
				    }
				  },
				  "datePublished": "${data.date_created}",
				  "dateModified": "${data.date_updated ? data.date_updated : data.date_created}"
				}
`}}/>
			<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Choise.com",
    "item": "https://choise.com"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "${data.category.title}",
    "item": "https://choise.com/news/${data.category.slug}"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "${data.title}",
    "item": "https://choise.com/news/${data.category.slug}/${data.slug}"
  }]
}
`}}/>
		</Head>
	)
}