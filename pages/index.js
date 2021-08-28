import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Korbel</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,shrink-to-fit=no"
        />
        <meta property="og:title" content="Chris Korbel | Front End Developr" />
        <meta
          property="og:description"
          content="JavaScript, Typescript, Data Visualization, D3, D3.js, Three.js, Python"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
