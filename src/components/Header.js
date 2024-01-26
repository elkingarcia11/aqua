import styles from "@/styles/Header.module.css";
import LanguageDropdown from "./LanguageDropdown";
import Image from "next/image";

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
  return (
    <div className={`${styles.header}`}>
      <Image
        src="/HeaderLogo.png"
        alt="AQUA"
        width={162}
        height={54}
        priority={true}
      />
      <LanguageDropdown />
    </div>
  );
}
