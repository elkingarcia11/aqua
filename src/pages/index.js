import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import ApartmentCard from "@/components/ApartmentCard";
import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import styles from "@/styles/Home.module.css";
import "../i18n";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const inter = Inter({ subsets: ["latin"] }); // Import internationalization settings

// Define an array of apartment data objects
const apartments = [
  {
    id: 1,
    oceanview: true,
    sleeps: 4,
    beds: 2,
    baths: 2,
    link: "https://www.airbnb.com/rooms/614372473896092731?guests=2&adults=2&s=67&unique_share_id=c88a11a6-acaa-45e9-bdbe-57018de8e8e5",
  },
  {
    id: 2,
    oceanview: true,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://www.airbnb.com/rooms/614388890268120421?guests=2&adults=2&s=67&unique_share_id=879aed86-3f6e-466d-9d69-1cfa72b323ee",
  },
  {
    id: 3,
    oceanview: true,
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://www.airbnb.com/rooms/615279204201976863?guests=2&adults=2&s=67&unique_share_id=f6f57145-e259-4bbb-badd-df59e976d723",
  },
  {
    id: 4,
    oceanview: false,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://www.airbnb.com/rooms/54207575?guests=2&adults=2&s=67&unique_share_id=b1f40417-9dea-4f66-8db9-e43d86944f15",
  },
  {
    id: 5,
    oceanview: false,
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://www.airbnb.com/rooms/614357465355883390?guests=2&adults=2&s=67&unique_share_id=c35a72d1-ac05-480d-99fd-864e43e933bf",
  },
  {
    id: 6,
    oceanview: false,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://www.airbnb.com/rooms/670959074975116873?guests=2&adults=2&s=67&unique_share_id=3c32847b-1e1d-446a-a30e-99bc31a6272a",
  },
];

export default function Home() {
  // Use the "useState" hook to manage the filtered apartment list
  const [filteredApartmentList, setFilteredApartmentList] =
    useState(apartments);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const calculatedWidth =
        screenWidth >= 1024 ? 0.3 * screenWidth : 0.95 * screenWidth;
      setWidth(calculatedWidth);
      const aspectRatio = 3754 / 2816;
      const calculatedHeight = calculatedWidth / aspectRatio;
      setHeight(calculatedHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  // Construct the Google Maps embed URL with the API key and location details
  const gmapsSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=AQUA+EL+PUEBLITO+PUERTO+PLATA+RD&center=19.773993872098327,-70.65216997523102&zoom=17`;

  // Function to filter apartments based on certain criteria
  const filterApartments = (oceanview, sleeps, beds, baths) => {
    const filteredApartments = [];
    for (const apartment of apartments) {
      if (
        oceanview &&
        apartment.oceanview &&
        sleeps <= apartment.sleeps &&
        beds <= apartment.beds &&
        baths <= apartment.baths
      ) {
        filteredApartments.push(apartment);
      } else if (
        !oceanview &&
        sleeps <= apartment.sleeps &&
        beds <= apartment.beds &&
        baths <= apartment.baths
      ) {
        filteredApartments.push(apartment);
      }
    }
    setFilteredApartmentList(filteredApartments);
  };

  const scrollToTop = () => {};

  return (
    <>
      <Head>
        <title>AQUA</title>
        <meta
          name="description"
          content="A Caribbean getaway at our stunning beachfront property. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <Element name="navbar">
          <NavBar filterApartments={filterApartments} />
        </Element>
        <div className={`${styles.apartmentList}`}>
          {filteredApartmentList.map((apartment) => (
            <Element key={apartment.id}>
              <ApartmentCard
                aptId={apartment.id}
                sleeps={apartment.sleeps}
                beds={apartment.beds}
                baths={apartment.baths}
                link={apartment.link}
                height={height}
                width={width}
              />
            </Element>
          ))}
          <Element name="map" className={`${styles.iframeContainer}`}>
            <iframe
              className={`${styles.iframe}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={gmapsSrc}
            ></iframe>
          </Element>

          <Footer />
        </div>
      </main>
    </>
  );
}
