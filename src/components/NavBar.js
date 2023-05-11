import { useEffect, useState, useRef } from "react";
import { FaMap, FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import styles from "@/styles/NavBar.module.css";
import FilterModal from "./FilterModal";

var Scroll = require("react-scroll");

export default function NavBar({ filterApartments }) {
  const { t } = useTranslation();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [isInputCheckbox, setIsInputCheckbox] = useState(false);
  const [isSleeps, setIsSleeps] = useState(0);
  const [isBedrooms, setIsBedrooms] = useState(0);
  const [isBathrooms, setIsBathrooms] = useState(0);

  var scroller = Scroll.scroller;

  function scrollToMap() {
    scroller.scrollTo("map", {
      duration: 250,
      delay: 0,
      smooth: true,
      offset: -50, // Scrolls to element + 50 pixels down the page
    });
  }

  const subtract = (i) => {
    if (i === 1 && isSleeps > 0) {
      setIsSleeps(isSleeps - 1);
    } else if (i === 2 && isBedrooms > 0) {
      setIsBedrooms(isBedrooms - 1);
    } else if (i === 3 && isBathrooms > 0) {
      setIsBathrooms(isBathrooms - 1);
    }
  };

  const add = (i) => {
    if (i === 1 && isSleeps < 4) {
      setIsSleeps(isSleeps + 1);
    } else if (i === 2 && isBedrooms < 2) {
      setIsBedrooms(isBedrooms + 1);
    } else if (i === 3 && isBathrooms < 2) {
      setIsBathrooms(isBathrooms + 1);
    }
  };

  const toggleModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const toggleCheckbox = () => {
    setIsInputCheckbox(!isInputCheckbox);
  };

  const handleScroll = () => {
    if (isFilterModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const submitForm = () => {
    toggleModal();
    filterApartments(isInputCheckbox, isSleeps, isBedrooms, isBathrooms);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`${styles.navbar}`}>
        <button className={`${styles.button}`} onClick={scrollToMap}>
          <FaMap className={`${styles.icon}`} /> {t("map")}
        </button>
        <button className={`${styles.button}`} onClick={toggleModal}>
          <FaSearch className={`${styles.icon}`} /> {t("filter")}
        </button>
      </div>
      <FilterModal
        isSleeps={isSleeps}
        isBedrooms={isBedrooms}
        isBathrooms={isBathrooms}
        isFilterModalOpen={isFilterModalOpen}
        isInputCheckbox={isInputCheckbox}
        subtract={subtract}
        add={add}
        toggleCheckbox={toggleCheckbox}
        submitForm={submitForm}
        toggleModal={toggleModal}
      />
    </div>
  );
}
