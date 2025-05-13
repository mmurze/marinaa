import "public/css/style.css"
import {useRouter} from "next/router";
import {useEffect} from "react";
import ConnectWalletModal from "components/Nft/ConnectWalletModal";
import CookiesPolicy from "components/CookiesPolicy";
import VerificatedProfile from "components/VerificatedProfile";
import {getProfileData} from "utils/profile";
import {state} from "state";
import Web3Provider from "components/Web3Provider";
import {stateWeb3} from "state/web3";
import {useSnapshot} from "valtio";
import MainBanner from "components/MainBanner";
// import FixedBottomBanner from "components/FixedBottomBanner";
import TopBanner from "components/TopBanner";

export default function MyApp({ Component, pageProps }) {
  const {locale} = useRouter()
  const t = require(`locale/components/${locale}.json`)
  
  const {wallet} = useSnapshot(stateWeb3)
  const {asPath} = useRouter()
  
  useEffect(() => {
    stateWeb3.checkWallet()
    const query = asPath.split("?")
    if (query.length === 2) state.utm = query[1]
  }, [])
  
  useEffect(() => {
    if (wallet) getProfileData(wallet)
  }, [wallet])
  
  return (
    <>
      <TopBanner/>
      <MainBanner/>
      <Web3Provider>
        <VerificatedProfile t={t.verificatedProfile}/>
        <ConnectWalletModal t={t.connectWalletModal}/>
        <Component {...pageProps} />
      </Web3Provider>
      <CookiesPolicy t={t.cookiesPolicy}/>
      {/*<FixedBottomBanner/>*/}
    </>
  )
}
