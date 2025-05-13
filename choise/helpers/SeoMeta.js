import Head from "next/head";

export default function SeoMeta ({image = "https://choise.com/pic/logo.svg", name = "Choise.com"}){
	const reviews = [
		{
			author: { name: "Eric Rid" },
			datePublished: "2021-12-20",
			reviewBody:
				"Very good product. Continue like this. I started investigating the crypto universe with you 4 years ago. Always believing you are a capable team.",
		},
		{
			author: { name: "Dan" },
			datePublished: "2021-03-19",
			reviewBody:
				"So far so good! Easy to load money and buy crypto. Identity check was fast and simple. Savings account opened with an impressive rate too",
		},
	];
	
	return (
		<Head>
			<script type="application/ld+json">
				{JSON.stringify([
					{
						"@context": "http://schema.org",
						"@type": "LocalBusiness",
						name,
						image,
						address: {
							"@type": "PostalAddress",
							streetAddress: "Beachmont Business Centre, Suite 336",
							addressLocality: "Kingstown",
							addressCountry: "Saint Vincent and the Grenadines",
						},
						url: "https://crypterium.onelink.me/jtmZ/choisesiteheader",
						review: reviews.map((review) => ({
							"@type": "Review",
							author: review.author,
							datePublished: review.datePublished,
							reviewBody: review.reviewBody,
						})),
					},
				])}
			</script>
		</Head>
	);
};