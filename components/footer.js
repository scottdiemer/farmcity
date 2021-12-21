import Image from "next/image";
import Link from "next/link";
import links from "../constants/links";
import storeInfo from "../constants/store-info";
import { MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="bg-spicy-mix">
        <div className="container flex flex-col items-center justify-between p-4 text-white text-champagne md:text-left md:flex-row">
          <div className="flex items-center px-4 py-3 shadow bg-champagne rounded-xl">
            <Image
              className="items-center"
              src="/FarmCity_TextOnly.svg"
              alt="Farm City"
              width={200}
              height={55}
            />
          </div>
          <div>
            <ul className="p-4 uppercase">
              {links.map((item, index) => {
                return (
                  <li className="py-1 text-sm" key={index}>
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
                  <h2 className="ml-2 font-semibold">
                    {item.location} Location:
                  </h2>
                </div>
                <p>{item.address}</p>
                <p>{item.city + " " + item.state + " " + item.zip}</p>
                <div className="flex mt-2 text-gray-200">
                  <MdAccessTime />
                  <h2 className="ml-2 font-semibold">Store Hours:</h2>
                </div>
                <p>Monday - Friday: {item.weekdayHours}</p>
                <p>Saturday: {item.saturdayHours}</p>
                <div className="flex mt-2 text-gray-200">
                  <MdPhone />
                  <h3 className="ml-2 font-semibold">Phone:</h3>
                </div>
                <p>{item.phone}</p>
              </div>
            );
          })}
        </div>
        <p className="text-center uppercase">
          copyright &copy; 2021 Farm City Feed Stores
        </p>
      </footer>
    </>
  );
}
