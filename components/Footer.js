import Link from "next/link";
import links from "../data/links";
import StoreInfo from "../data/StoreInfo";
import {
  LocationIconHeader,
  PhoneIconHeader,
  TimeIconHeader,
} from "../components/IconHeader";
import Address from "../components/Address";
import Days from "../components/DaysEnum";
import BusinessHours from "../components/BusinessHours";
import Logo from "./Logo";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <>
      <footer className="bg-spicy-mix">
        <div className="container flex flex-col items-center justify-between p-4 text-white text-champagne text-center md:text-left md:flex-row">
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
          {StoreInfo.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center p-2 mt-2 text-sm md:items-start"
              >
                <div className="py-2">
                  <LocationIconHeader title={`${item.location} Location:`} />
                  <Address
                    street={item.street}
                    city={item.city}
                    state={item.state}
                    zip={item.zip}
                  />
                </div>
                <div className="py-2">
                  <TimeIconHeader title="Store Hours:" />
                  <BusinessHours
                    day={Days.Weekdays}
                    hours={item.weekdayHours}
                  />
                  <BusinessHours
                    day={Days.Saturday}
                    hours={item.saturdayHours}
                  />
                </div>
                <div className="py-2">
                  <PhoneIconHeader title="Phone:" />
                  <p>{item.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Copyright name="Farm City Feed Stores" className="text-white" />
      </footer>
    </>
  );
}
