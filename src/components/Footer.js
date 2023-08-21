import styles from "@/styles/Footer.module.css";

/**
 * Footer component to display copyright information.
 *
 * This component renders a simple footer displaying the copyright information
 * along with the current year and a provided company name.
 *
 * @component
 * @example
 * // Usage
 * <Footer />
 *
 * @returns {JSX.Element} Footer component JSX element.
 */
export default function Footer() {
  return <div className={`${styles.footerDiv}`}>© 2023 AQUA</div>;
}
