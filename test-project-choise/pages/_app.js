import "public/css/style.css"
import Header from "components/Header";
import Footer from "components/Footer";
import MobileNav from "components/MobileNav";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MobileNav/>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}