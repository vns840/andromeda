

import About from "@/components/About";
import Contatc from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Main from "@/components/Main";
import Head from "next/head";

export default function Home() {
  return (
   <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Andromeda Club</title>
      <link rel="shortcut icon" href="/images/andromeda-logo.png" type="image/x-icon" />
    </Head>

    <Main />
    <About />
    <Gallery />
    <Contatc />
   </>
  )
}
