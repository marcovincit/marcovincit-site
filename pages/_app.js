import "../styles/globals.scss";

import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main data-scroll-container className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
