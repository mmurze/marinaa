import Seo from "helpers/Seo";
import MainBlock from "layouts/Main/MainBlock";
import MainList from "layouts/Main/MainList";
import MainRendering from "layouts/Main/MainRendering";
import MainCharismWallet from "layouts/Main/MainCharismWallet";
import MainDeFi from "layouts/Main/MainDeFi";
import axios from "axios"

export default function Home({t}){
  return (
    <>
      <Seo
        title={t.seo.title}
        description={t.seo.description}
      />
      <MainBlock t={t.main_choice}/>
      <MainList t={t.main_list}/>
      <MainRendering t={t.main_rendering}/>
      <MainCharismWallet t={t.main_charism}/>
      <MainDeFi t={t.main_defi}/>

    </>
  )
}

export async function getServerSideProps({locale}){
  const t = (await axios.get(`${process.env.ROUTE_PATH}/api/get-locale`, {
    params: {
      lang: locale,
      page: "page-main"
    }
  })).data
  if(!t){
    return {
      redirect:{
        permanent: false,
        destination: "/500"
      }
    }
  }
  return { props: {t: t.data} }
}
