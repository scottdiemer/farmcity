import Image from "next/image";
import heroImage from "../public/img/bg-image.jpg";

export default function Hero() {
  return (
    <section
      className="relative block"
      style={{ height: "calc(100vh - 137px)", zIndex: "-1" }}
    >
      <Image
        src={heroImage}
        layout="fill"
        objectFit="cover"
        alt="Image of horses"
      />
      <div className="absolute inset-0 flex flex-col bg-gray-900 bg-opacity-60">
        <h1 className="mx-auto mt-6 font-mono text-4xl text-white">
          this is our h1 tag
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </section>
  );
}
