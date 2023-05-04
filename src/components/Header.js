import styles from "@/styles/Header.module.css";
import LanguageDropdown from "./LanguageDropdown";
export default function Headers() {
  return (
    <div className={`${styles.header}`}>
      <img src="/HeaderLogo.png" alt="Aqua logo" />
      <LanguageDropdown />
    </div>
  );
}
