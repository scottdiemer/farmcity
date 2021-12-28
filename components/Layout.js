import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({
  title = "Farm City Feed Stores",
  favIcon,
  children,
}) {
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
