import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <main data-scroll-container className="container">
      <Component {...pageProps} />
    </main>
  );
}
