import styles from "styles/Home.module.scss";
import data from "data/about";
import parse from "html-react-parser";

import { Header, Menu, Footer } from "components";

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
