import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com"/>
      <Link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Work+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"/>
      <link rel="icon" type="image/png" href="favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
