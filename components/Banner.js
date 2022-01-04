import Image from "next/image";

export default function Hero({ image, alt, title }) {
  return (
    <div
      className="relative block"
      style={{ width: "100vw", height: "30vh", zIndex: "-1" }}
    >
      <Image src={image} layout="fill" objectFit="cover" alt={alt} />
      <div className="absolute inset-0 flex flex-col bg-gray-900/50">
        <div className="container flex flex-col items-center">
          <h1 className="mt-24 text-2xl font-semibold tracking-wider text-center text-white md:text-3xl lg:text-4xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
