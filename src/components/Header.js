import styles from "@/styles/Header.module.css";
import LanguageDropdown from "./LanguageDropdown";
import Image from "next/image";

// Importing the react-scroll library for smooth scrolling
var Scroll = require("react-scroll");

/**
 * Header component for displaying the logo and language dropdown.
 *
 * This component represents the header section of a website, containing the
 * company logo and a language dropdown menu for selecting languages.
 *
 * @component
 * @example
 * // Usage
 * <Header />
 *
 * @returns {JSX.Element} Header component JSX element.
 */
export default function Headers() {
  var scroller = Scroll.scroller;

  function scrollToTop() {
    scroller.scrollTo("navbar", {
      duration: 250,
      delay: 0,
      smooth: true,
      offset: 0, // Scrolls to element + 50 pixels down the page
    });
  }
  return (
    <div className={`${styles.header}`}>
      <button
        onClick={() => scrollToTop()}
        className={`${styles.navbarButton}`}
      >
        <Image
          src="/HeaderLogo.png"
          alt="AQUA"
          width={162}
          height={54}
          priority={true}
        />
      </button>
      <LanguageDropdown />
    </div>
  );
}
