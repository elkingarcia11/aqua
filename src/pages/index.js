import Head from "next/head";
import { Inter } from 'next/font/google';
import Header from "@/components/Header"
import styles from "@/styles/Home.module.css";
import ApartmentCard from "@/components/ApartmentCard";
import NavBar from "@/components/NavBar";

var Scroll = require("react-scroll");
var Element = Scroll.Element;


const inter = Inter({ subsets: ['latin'] })

const apartments = [
  {
    id: 1,
    name: "aquaOne",
    sleeps: 4,
    beds: 2,
    baths: 2,
    link: "https://abnb.me/DqS6YriYJrb",
  },
  {
    id: 2,
    name: "aquaTwo",
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/g4odQfhYJrb",
  },
  {
    id: 3,
    name: "aquaThree",
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://abnb.me/ekkqMigYJrb",
  },
  {
    id: 4,
    name: "aquaFour",
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/WOKS9dfYJrb",
  },
  {
    id: 5,
    name: "aquaFive",
    sleeps: 4,
    beds: 2,
    baths: 1,
    link: "https://abnb.me/RHivkudYJrb",
  },
  {
    id: 6,
    name: "aquaSix",
    sleeps: 2,
    beds: 1,
    baths: 1,
    link: "https://abnb.me/DFrJkt4XJrb",
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
        <NavBar/>
        {apartments.map((apartment) => (
          <Element key={apartment.id} name={apartment.name}>
            <ApartmentCard
              aptId={apartment.id}
              sleeps={apartment.sleeps}
              beds={apartment.beds}
              baths={apartment.baths}
              link={apartment.link}
            />
          </Element>
        ))}
      </main>
    </>
  );
}
