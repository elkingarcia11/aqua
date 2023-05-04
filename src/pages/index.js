import { Inter } from 'next/font/google';
import Head from "next/head";
import Header from "@/components/Header"
import styles from "@/styles/Home.module.css";
import ApartmentCard from "@/components/ApartmentCard";
import NavBar from "@/components/NavBar";
// import i18n (needs to be bundled ;)) 
import '../i18n';
var Scroll = require("react-scroll");
var Element = Scroll.Element;


const inter = Inter({ subsets: ['latin'] })

const apartments = [
  {
    id: 1,
    sleeps: 4,
    beds: 2,
    baths: 2,
    link: "https://abnb.me/DqS6YriYJrb",
    imageUrl: '../../public/aquaOne'
  },
  {
    id: 2,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/g4odQfhYJrb",
    imageUrl: '../../public/aquaTwo'
  },
  {
    id: 3,
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://abnb.me/ekkqMigYJrb",
    imageUrl: '../../public/aquaThree'
  },
  {
    id: 4,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/WOKS9dfYJrb",
    imageUrl: '../../public/aquaFour'
  },
  {
    id: 5,
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://abnb.me/RHivkudYJrb",
    imageUrl: '../../public/aquaFive'
  },
  {
    id: 6,
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/DFrJkt4XJrb",
    imageUrl: '../../public/aquaSix'
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>AQUA</title>
        <meta
          name="description"
          content="A Caribbean getaway at our stunning beachfront property. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header/>
        <div className={`${styles.apartmentList}`}>

        {apartments.map((apartment) => (
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
        </div>
      </main>
    </>
  );
}
