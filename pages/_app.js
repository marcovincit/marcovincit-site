import "../styles/globals.scss";

import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Marco Vincit | Design & Development</title>
      </Head>

      <main data-scroll-container className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
