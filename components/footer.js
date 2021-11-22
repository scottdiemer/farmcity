import Image from "next/image";
import Link from "next/link";
import links from "../constants/links";
import { MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100">
        <div className="container flex justify-between p-4">
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
                  <li className="py-1 text-sm" key={index}>
                    <Link className="cursorpointer" href={item.path}>
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col text-sm">
            <div className="flex">
              <MdLocationOn />
              <h2 className="ml-2">Orlando Location:</h2>
            </div>
            <p>1610 Atlanta Ave</p>
            <p>Orlando, FL 32806</p>
            <div className="flex mt-2">
              <MdAccessTime />
              <h2 className="ml-2">Store Hours:</h2>
            </div>
            <p>Monday - Friday: 8:30am - 5:30pm</p>
            <p>Saturday: 8:30am - 3:00pm</p>
            <div className="flex mt-2">
              <MdPhone />
              <h3 className="ml-2">Phone:</h3>
            </div>
            <p>(407) 843-7470</p>
          </div>
          <div className="flex flex-col text-sm">
            <div className="flex">
              <MdLocationOn />
              <h2 className="ml-2">Apopka Location:</h2>
            </div>
            <p>440 S. Park Ave</p>
            <p>Apopka, FL 32704</p>
            <div className="flex mt-2">
              <MdAccessTime />
              <h2 className="ml-2">Store Hours:</h2>
            </div>
            <p>Monday - Friday: 9:00am - 6:00pm</p>
            <p>Saturday: 9:00am - 3:30pm</p>
            <div className="flex mt-2">
              <MdPhone />
              <h3 className="ml-2">Phone:</h3>
            </div>
            <p>(407) 889-2822</p>
          </div>
        </div>
      </footer>
    </>
  );
}
