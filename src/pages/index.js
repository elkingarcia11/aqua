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
    link: "https://abnb.me/DqS6YriYJrb",
  },
  {
    id: 2,
    oceanview: true,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/g4odQfhYJrb",
  },
  {
    id: 3,
    oceanview: true,
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://abnb.me/ekkqMigYJrb",
  },
  {
    id: 4,
    oceanview: false,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/WOKS9dfYJrb",
  },
  {
    id: 5,
    oceanview: false,
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://abnb.me/RHivkudYJrb",
  },
  {
    id: 6,
    oceanview: false,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/DFrJkt4XJrb",
  },
];

export default function Home() {
  // Use the "useState" hook to manage the filtered apartment list
  const [filteredApartmentList, setFilteredApartmentList] =
    useState(apartments);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount state

    const handleResize = () => {
      // Calculate the width based on the screen size
      const screenWidth = window.innerWidth;

      const calculatedWidth =
        screenWidth >= 1024 ? 0.3 * screenWidth : 0.95 * screenWidth;

      setWidth(calculatedWidth);

      // Calculate height in pixels based on aspect ratio
      const aspectRatio = 3754 / 2816;
      const calculatedHeight = calculatedWidth / aspectRatio;
      setHeight(calculatedHeight);
    };
    
    const cleanup = () => {
      // Check if the component is still mounted before removing the event listener
      if (isMounted) {
        window.removeEventListener("resize", handleResize);

        // Check if imageRef.current is not null before removing the load event listener
        if (imageRef.current) {
          imageRef.current.removeEventListener("load", handleImageLoad);
        }
      }
    };

    // Initial call to set the initial width and height
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function on component unmount
    return () => {
      isMounted = false; // Update the mounted state
      cleanup();
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
