import Image from "next/image";
import Layout from "../components/Layout";
import Address from "../components/Address";
import Banner from "../components/Banner";
import Days from "../components/DaysEnum";
import BusinessHours from "../components/BusinessHours";
import GroupHeader from "../components/GroupHeader";
import contactImage from "../public/img/bg-contact.jpg";
import Phone from "../components/Phone";
import StoreInfo from "../data/StoreInfo";

function Contact() {
  return (
    <Layout title="Contact Us | Farm City Feed Stores">
      <Banner image={contactImage} alt="Contact Banner" title="Contact Us" />
      <section className="bg-champagne/25">
        {StoreInfo.map((item, index) => {
          const {
            imageUrl,
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
              className="container flex flex-col p-2 md:p-6 md:flex-row"
            >
              <div className="mx-auto md:mx-0">
                <Image src={imageUrl} alt={location} width={480} height={360} />
              </div>
              <div className="flex flex-col items-center p-2 mx-4 text-lg md:items-start">
                <GroupHeader title={`${location} Location:`} />
                <Address street={street} city={city} state={state} zip={zip} />
                <GroupHeader title="Store Hours:" />
                <BusinessHours day={Days.Weekdays} hours={weekdayHours} />
                <BusinessHours day={Days.Saturday} hours={saturdayHours} />
                <GroupHeader title="Phone:" />
                <Phone phone={phone} />
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}

export default Contact;
