import Image from "next/image";
import Link from "next/link";
import links from "../constants/links";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-between p-4 bg-gray-400">
        <div className="flex items-center">
          <Image
            className="items-center"
            src="/FarmCity_TextOnly.svg"
            alt="Farm City"
            width={200}
            height={55}
          />
        </div>
        <div>
          <ul className="uppercase">
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="cursorpointer" href={item.path}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div flex flex-col>
          <h2>Orlando Location</h2>
          <h3>Address</h3>
          <p>1610 Atlanta Ave</p>
          <p>Orlando, FL 32806</p>
          <h3>Phone</h3>
          <p>(407) 843-7470</p>
        </div>
        <div flex flex-col>
          <h2>Apopka Location</h2>
          <h3>Address</h3>
          <p>440 S. Park Ave</p>
          <p>Apopka, FL 32704</p>
          <h3>Phone</h3>
          <p>(407) 889-2822</p>
        </div>
      </footer>
    </>
  );
}
