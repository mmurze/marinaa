import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="apple-touch-icon" sizes="57x57" href="/pic/favicon/apple-icon-57x57.png"/>
					<link rel="apple-touch-icon" sizes="60x60" href="/pic/favicon/apple-icon-60x60.png"/>
					<link rel="apple-touch-icon" sizes="72x72" href="/pic/favicon/apple-icon-72x72.png"/>
					<link rel="apple-touch-icon" sizes="76x76" href="/pic/favicon/apple-icon-76x76.png"/>
					<link rel="apple-touch-icon" sizes="114x114" href="/pic/favicon/apple-icon-114x114.png"/>
					<link rel="apple-touch-icon" sizes="120x120" href="/pic/favicon/apple-icon-120x120.png"/>
					<link rel="apple-touch-icon" sizes="144x144" href="/pic/favicon/apple-icon-144x144.png"/>
					<link rel="apple-touch-icon" sizes="152x152" href="/pic/favicon/apple-icon-152x152.png"/>
					<link rel="apple-touch-icon" sizes="180x180" href="/pic/favicon/apple-icon-180x180.png"/>
					<link rel="icon" type="image/png" sizes="192x192"  href="/pic/favicon/android-icon-192x192.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/pic/favicon/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="96x96" href="/pic/favicon/favicon-96x96.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/pic/favicon/favicon-16x16.png"/>
					<link rel="manifest" href="/pic/favicon/manifest.json"/>
					<meta name="msapplication-TileColor" content="#ffffff"/>
					<meta name="msapplication-TileImage" content="/pic/favicon/ms-icon-144x144.png"/>
					<meta name="theme-color" content="#0E2629"/>
					<meta name="facebook-domain-verification" content="sp367fj2xqofdvkwy3n9rxx7s7o3x3" />
					<script dangerouslySetInnerHTML={{__html: `!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-TPQFGZM",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");`}}/>
					<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{
"@context": "https://schema.org", "@type": "Corporation", "name": "Choise.com", "alternateName": "Choise.com", "url": "https://choise.com/", "logo": "https://choise.com/pic/logo.svg", "sameAs": ["https://www.facebook.com/ChoiseCom/","https://twitter.com/ChoiseCom","https://www.instagram.com/choise_com/?hl=en","https://www.youtube.com/channel/UCSsWxwQR6iG_e9fj-SxStCg","https://www.linkedin.com/groups/5077736/","https://Choise.com"]}`}}/>
				</Head>
				<body>
				<noscript dangerouslySetInnerHTML={{__html: `<iframe src=“https://www.googletagmanager.com/ns.html?id=GTM-TPQFGZM”height=“0" width=“0” style="display:none;visibility:hidden">`}}/>
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}
}
