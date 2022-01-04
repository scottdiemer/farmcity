import Image from "next/image";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import contactImage from "../public/img/bg-contact.jpg";
import storeInfo from "../constants/store-info";

function Contact() {
  const infoHeader = "font-semibold";
  const groupHeader = "mt-3 text-shadow";
  return (
    <Layout title="Contact Us | Farm City Feed Stores">
      <Banner image={contactImage} alt="" title="Contact Us" />
      <section className="bg-champagne/25">
        {storeInfo.map((item, index) => {
          return (
            <div className="container flex flex-col p-2 md:p-6 md:flex-row">
              <div className="mx-auto md:mx-0">
                <Image
                  src={item.imageUrl}
                  alt={item.location}
                  width={480}
                  height={360}
                />
              </div>
              <div
                key={index}
                className="flex flex-col items-center p-2 mx-4 text-lg md:items-start"
              >
                <div className="text-shadow">
                  <h2 className={infoHeader}>{item.location} Location:</h2>
                </div>
                <p>{item.address}</p>
                <p>{item.city + " " + item.state + " " + item.zip}</p>
                <div className={groupHeader}>
                  <h2 className={infoHeader}>Store Hours:</h2>
                </div>
                <p>Monday - Friday: {item.weekdayHours}</p>
                <p>Saturday: {item.saturdayHours}</p>
                <div className={groupHeader}>
                  <h2 className={infoHeader}>Phone:</h2>
                </div>
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
