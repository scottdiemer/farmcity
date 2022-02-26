import Address from "../components/Address";
import BusinessHours from "../components/BusinessHours";
import Copyright from "../components/Copyright";
import Days from "../components/DaysEnum";
import Phone from "../components/Phone";
import StoreInfo from "../data/StoreInfo";
import {
  LocationIconHeader,
  PhoneIconHeader,
  TimeIconHeader,
} from "../components/IconHeader";
import { LinkList } from "../components/LinkList";
import links from "../data/links";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-spicy-mix">
      <div className="container flex flex-col items-center justify-between p-4 text-champagne text-center md:text-left md:flex-row">
        <Logo />
        <ul className="p-4 uppercase">
          <LinkList
            className="py-1 text-sm text-center md:text-left hover:text-white"
            links={links}
          />
        </ul>
        {StoreInfo.map((item, index) => {
          const {
            location,
            street,
            city,
            state,
            zip,
            weekdayHours,
            saturdayHours,
            phone,
          } = item;
          return (
            <div
              key={index}
              className="flex flex-col items-center p-2 mt-2 text-sm md:items-start"
            >
              <div className="py-2">
                <LocationIconHeader title={`${location} Location:`} />
                <Address street={street} city={city} state={state} zip={zip} />
              </div>
              <div className="py-2">
                <TimeIconHeader title="Store Hours:" />
                <BusinessHours day={Days.Weekdays} hours={weekdayHours} />
                <BusinessHours day={Days.Saturday} hours={saturdayHours} />
              </div>
              <div className="py-2">
                <PhoneIconHeader title="Phone:" />
                <Phone phone={phone} />
              </div>
            </div>
          );
        })}
      </div>
      <Copyright name="Farm City Feed Stores" className="text-white" />
    </footer>
  );
}
