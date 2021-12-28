import Image from "next/image";

export default function Logo() {
  return (
    <div className="px-4 py-2 shadow bg-champagne rounded-xl">
      <Image
        src="/FarmCity_TextOnly.svg"
        alt="Farm City"
        width={200}
        height={55}
      />
      <div className="-mt-5 font-bold text-center text-gray-800 uppercase">
        Feed Stores
      </div>
    </div>
  );
}
