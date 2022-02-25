import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { LinkList } from "../components/LinkList";
import Logo from "./Logo";
import links from "../data/links";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const navStylesDesktop =
    "flex items-center justify-end flex-1 hidden tracking-wider mt-14 text-md text-tan gap-12 sm:flex";
  const navStylesMobile = `md:hidden text-md flex flex-col md:flex-row transition-all duration-300 ease-linear text-tan`;
  const listStyles =
    "tracking-wider transition-all duration-150 ease-linear hover:text-white font-semibold";

  return (
    <nav className="uppercase bg-olive-drab-camouflage">
      <div className="container flex items-center py-4">
        <Logo />
        {/* Desktop Menu */}
        <ul className={navStylesDesktop}>
          <LinkList className={listStyles} links={links} />
        </ul>
        {/* End Desktop Menu */}
        {/* Start Mobile Menu */}
        <div className="flex items-center justify-end flex-1 sm:hidden">
          <FaBars
            className="text-2xl text-tan md:hidden"
            type="button"
            onClick={() => setToggled(!toggled)}
          />
        </div>
      </div>
      <ul className={`md:hidden ${toggled ? navStylesMobile : "hidden"}`}>
        <LinkList
          className="p-4 tracking-wider transition-all duration-300 ease-linear hover:text-white font-semibold"
          links={links}
        />
      </ul>
      {/* End Mobile Menu */}
    </nav>
  );
}
