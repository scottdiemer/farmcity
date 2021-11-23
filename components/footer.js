import Image from "next/image";
import Link from "next/link";
import links from "../constants/links";
import storeInfo from "../constants/store-info";
import { MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100">
        <div className="container flex flex-col items-center justify-between p-4 text-center md:text-left md:flex-row">
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
                <div className="flex">
                  <MdLocationOn />
                  <h2 className="ml-2">{item.location} Location:</h2>
                </div>
                <p>{item.address}</p>
                <p>{item.city + " " + item.state + " " + item.zip}</p>
                <div className="flex mt-2">
                  <MdAccessTime />
                  <h2 className="ml-2">Store Hours:</h2>
                </div>
                <p>Monday - Friday: {item.weekdayHours}</p>
                <p>Saturday: {item.saturdayHours}</p>
                <div className="flex mt-2">
                  <MdPhone />
                  <h3 className="ml-2">Phone:</h3>
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
