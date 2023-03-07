import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/Home.module.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Artcryption</title>
        <meta name="description" content="Artcryption Welcomepage !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
