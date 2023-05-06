import styles from "@/styles/NavBar.module.css";
import { FaMap, FaSearch } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default function NavBar() {


  return (
    <div className={`${styles.navbar}`}>
        <button className={`${styles.button}`}><FaMap className={`${styles.icon}`}/> Map</button>
        <button className={`${styles.button}`}><FaSearch className={`${styles.icon}`}/> Filter</button>
    </div>
  );
}
