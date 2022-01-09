import Image from "next/image";
import heroImage from "../public/img/bg-image.jpg";
import { blurredHeroImage } from "../data/baseImages";

export default function Hero() {
  return (
    <section
      className="relative block"
      style={{ height: "calc(100vh - 109px)", zIndex: "-1" }}
    >
      <Image
        src={heroImage}
        layout="fill"
        objectFit="cover"
        alt="Hands with oats in shape of heart"
        placeholder="blur"
        blurDataURL={blurredHeroImage}
      />
      <div className="absolute inset-0 flex flex-col bg-gray-900/50">
        <div className="container flex flex-col items-center">
          <h1 className="mt-24 text-xl font-semibold tracking-wider text-center text-white md:text-2xl lg:text-4xl">
            Show them how much you care!
          </h1>
        </div>
      </div>
    </section>
  );
}
