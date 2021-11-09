import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import links from "../constants/links";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="uppercase">
      <div className="container flex items-center py-4 mt-4 sm:mt-12 text-farmcity-primary">
        <Image
          src="/FarmCity_TextOnly.svg"
          alt="Farm City"
          width={200}
          height={55}
        />
        <ul className="flex items-center justify-end flex-1 hidden text-sm gap-12 sm:flex">
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
        <div className="flex items-center justify-end flex-1 sm:hidden">
          <FaBars className="text-2xl" onClick={() => setToggled(!toggled)} />
        </div>
      </div>
      <ul
        className={`md:hidden ${toggled ? "text-xs flex flex-col" : "hidden"}`}
      >
        {links.map((item, index) => {
          return (
            <li key={index} className="block px-4 py-2">
              <Link className="cursorpointer" href={item.path}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}