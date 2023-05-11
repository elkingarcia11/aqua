import { useState } from "react";
import { Inter } from 'next/font/google';
import ApartmentCard from "@/components/ApartmentCard";
import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from '@/components/Footer';

import styles from "@/styles/Home.module.css";
// import i18n (needs to be bundled ;)) 
import '../i18n';
var Scroll = require("react-scroll");
var Element = Scroll.Element;


const inter = Inter({ subsets: ['latin'] })

const apartments = [
  {
    id: 1,
    oceanview: true,
    sleeps: 4,
    beds: 2,
    baths: 2,
    link: "https://abnb.me/DqS6YriYJrb",
    imageUrl: '../../public/aquaOne'
  },
  {
    id: 2,
    oceanview: true,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/g4odQfhYJrb",
    imageUrl: '../../public/aquaTwo'
  },
  {
    id: 3,
    oceanview: true,
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://abnb.me/ekkqMigYJrb",
    imageUrl: '../../public/aquaThree'
  },
  {
    id: 4,
    oceanview: false,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/WOKS9dfYJrb",
    imageUrl: '../../public/aquaFour'
  },
  {
    id: 5,
    oceanview: false,
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://abnb.me/RHivkudYJrb",
    imageUrl: '../../public/aquaFive'
  },
  {
    id: 6,
    oceanview: false,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/DFrJkt4XJrb",
    imageUrl: '../../public/aquaSix'
  },
];
const apiKey = process.env.GOOGLE_MAPS_API_KEY
export default function Home() {
  
  const [filteredApartmentList, setFilteredApartmentList] = useState(apartments);
  const gmapsSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=AQUA+EL+PUEBLITO+PUERTO+PLATA+RD&center=19.773993872098327,-70.65216997523102&zoom=17`


  const filterApartments = (oceanview, sleeps, beds, baths) => {
    // Walk thru each apartment, 
      // if oceanview is true && apt has oceanview, keep, else filter out
      // else, keep apartment
      // if sleeps <= apartment sleeps && beds <= apartment beds && baths <= apartment baths, show, else filter
      const filteredApartments = [];
      for (const apartment of apartments) {
        if (oceanview && apartment.oceanview && sleeps <= apartment.sleeps && beds <= apartment.beds && baths <= apartment.baths) {
          filteredApartments.push(apartment);
        } else if (!oceanview && sleeps <= apartment.sleeps && beds <= apartment.beds && baths <= apartment.baths) {
          filteredApartments.push(apartment);
        }
      }
      setFilteredApartmentList(filteredApartments)
  }
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
        <Header/>
        <NavBar filterApartments={filterApartments} />
        <div className={`${styles.apartmentList}`}>

        {filteredApartmentList.map((apartment) => (
          <Element key={apartment.id}>
            <ApartmentCard
              aptId={apartment.id}
              sleeps={apartment.sleeps}
              beds={apartment.beds}
              baths={apartment.baths}
              link={apartment.link}
              imageUrl={apartment.imageUrl}
            />
          </Element>
        ))}
        <Element name="map">
        <iframe
          className={`${styles.iframe}`}
          loading="lazy"
          allowFullScreen
          referrerpolicy="no-referrer-when-downgrade"
          src={gmapsSrc}>
        </iframe>
        </Element>
       
        <Footer/>
        </div>
      </main>
    </>
  );
}
