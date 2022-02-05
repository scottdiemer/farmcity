import Image from "next/image";
import Layout from "../components/Layout";
import Address from "../components/Address";
import Banner from "../components/Banner";
import Days from "../components/DaysEnum";
import BusinessHours from "../components/BusinessHours";
import GroupHeader from "../components/GroupHeader";
import contactImage from "../public/img/bg-contact.jpg";
import StoreInfo from "../data/StoreInfo";

function Contact() {
  return (
    <Layout title="Contact Us | Farm City Feed Stores">
      <Banner image={contactImage} alt="Contact Banner" title="Contact Us" />
      <section className="bg-champagne/25">
        {StoreInfo.map((item, index) => {
          return (
            <div
              key={index}
              className="container flex flex-col p-2 md:p-6 md:flex-row"
            >
              <div className="mx-auto md:mx-0">
                <Image
                  src={item.imageUrl}
                  alt={item.location}
                  width={480}
                  height={360}
                />
              </div>
              <div className="flex flex-col items-center p-2 mx-4 text-lg md:items-start">
                <GroupHeader title={`${item.location} Location:`} />
                <Address
                  street={item.street}
                  city={item.city}
                  state={item.state}
                  zip={item.zip}
                />
                <GroupHeader title="Store Hours:" />
                <BusinessHours day={Days.Weekdays} hours={item.weekdayHours} />
                <BusinessHours day={Days.Saturday} hours={item.saturdayHours} />
                <GroupHeader title="Phone:" />
                <p>{item.phone}</p>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}

export default Contact;
