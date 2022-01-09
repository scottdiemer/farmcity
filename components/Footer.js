import Link from "next/link";
import links from "../data/links";
import storeInfo from "../data/store-info";
import { MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";
import Logo from "./Logo";
import Copyright from "./Copyright";

export default function Footer() {
  const infoHeader = "ml-2 font-semibold";
  return (
    <>
      <footer className="bg-spicy-mix">
        <div className="container flex flex-col items-center justify-between p-4 text-white text-champagne md:text-left md:flex-row">
          <Logo />
          <div>
            <ul className="p-4 uppercase">
              {links.map((item, index) => {
                return (
                  <li
                    className="py-1 text-sm text-center md:text-left"
                    key={index}
                  >
                    <Link className="cursorpointer" href={item.path}>
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {storeInfo.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center p-2 mt-2 text-sm md:items-start"
              >
                <div className="flex text-gray-200">
                  <MdLocationOn />
                  <h2 className={infoHeader}>{item.location} Location:</h2>
                </div>
                <p>{item.address}</p>
                <p>{item.city + " " + item.state + " " + item.zip}</p>
                <div className="flex mt-2 text-gray-200">
                  <MdAccessTime />
                  <h2 className={infoHeader}>Store Hours:</h2>
                </div>
                <p>Monday - Friday: {item.weekdayHours}</p>
                <p>Saturday: {item.saturdayHours}</p>
                <div className="flex mt-2 text-gray-200">
                  <MdPhone />
                  <h2 className={infoHeader}>Phone:</h2>
                </div>
                <p>{item.phone}</p>
              </div>
            );
          })}
        </div>
        <Copyright name="Farm City Feed Stores" className="text-white" />
      </footer>
    </>
  );
}
