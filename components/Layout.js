import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ title = "Farm City Feed Stores", children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Farm City Feed Stores carries a variety of Feed, Hay and supplies"
        />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <Footer />
    </>
  );
}
