import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";

export default function Home() {
  return (
    <Layout title="Farm City Feed Stores" favIcon="/favIcon.ico">
      <Hero />
      <About />
    </Layout>
  );
}
