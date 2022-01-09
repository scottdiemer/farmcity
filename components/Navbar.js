import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import links from "../data/links";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="uppercase bg-olive-drab-camouflage">
      <div className="container flex items-center py-4">
        <Logo />
        <ul className="flex items-center justify-end flex-1 hidden tracking-wider mt-14 text-md text-tan gap-12 sm:flex">
          {links.map((item, index) => {
            return (
              <li
                key={index}
                className="transition-all duration-150 hover:text-white"
              >
                <Link className="cursorpointer" href={item.path}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-end flex-1 sm:hidden">
          <FaBars
            className="text-2xl text-tan"
            type="button"
            onClick={() => setToggled(!toggled)}
          />
        </div>
      </div>
      <ul
        className={`md:hidden ${
          toggled ? "text-sm flex flex-col text-tan " : "hidden"
        }`}
      >
        {links.map((item, index) => {
          return (
            <li
              key={index}
              className="block px-4 py-2 transition-all duration-150 hover:text-white"
            >
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
