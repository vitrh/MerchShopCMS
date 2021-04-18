import Head from "next/head";
import { Navbar } from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return<> 
      <Head>
        <title>CMS Website with contentful</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Navbar />

  <Component {...pageProps} />
  </>
}

export default MyApp;
