import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <Layout title="Farm City Feed Stores">
      <Hero />
      <About />
      <Featured />
    </Layout>
  );
}
