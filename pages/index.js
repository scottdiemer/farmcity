import Image from "next/image";
import heroImage from "../public/img/bg-image.jpg";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title="Farm City Feed Stores" favIcon="/favIcon.ico">
      <section
        className="relative block"
        style={{ height: "calc(100vh - 137px)", zIndex: "-1" }}
      >
        <Image src={heroImage} layout="fill" objectFit="cover" />
        <div className="absolute flex flex-col">
          <h1>this is our h1 tag</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </section>
    </Layout>
  );
}
