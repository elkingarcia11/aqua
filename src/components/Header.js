import styles from "@/styles/Header.module.css";
import LanguageDropdown from "./LanguageDropdown";

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
      <img src="/HeaderLogo.png" alt="AQUA" />
      <LanguageDropdown />
    </div>
  );
}
