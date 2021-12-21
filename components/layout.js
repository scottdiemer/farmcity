import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ title = "default title", favIcon, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Head>
      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <Footer />
    </>
  );
}
