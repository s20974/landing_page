import type { AppProps } from 'next/app'

import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import '../styles/style.css'
import Head from 'next/head';



export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>HomEazyAi</title>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
        <meta name="interkassa-verification" content="a504c66e1a084bd0c117a1e6f9d9da49" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}
