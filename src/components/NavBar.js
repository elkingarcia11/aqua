import { useState, useCallback } from "react";
import { FaMap, FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from "@/styles/NavBar.module.css";
import FilterModal from "./FilterModal";

// Importing the react-scroll library for smooth scrolling
var Scroll = require("react-scroll");

/**
 * The NavBar component displays navigation buttons for scrolling and opening the filter modal.
 *
 * @param {Object} filterApartments - A function to filter apartments based on criteria.
 * @returns {JSX.Element} - JSX element representing the NavBar.
 */
export default function NavBar({ filterApartments }) {
  const { t } = useTranslation();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [isInputCheckbox, setIsInputCheckbox] = useState(false);
  const [isSleeps, setIsSleeps] = useState(0);
  const [isBedrooms, setIsBedrooms] = useState(0);
  const [isBathrooms, setIsBathrooms] = useState(0);

  var scroller = Scroll.scroller;

  const scrollToMap = useCallback(() => {
    scroller.scrollTo("map", {
      duration: 250,
      delay: 0,
      smooth: true,
      offset: -50,
    });
  }, []);

  const reset = useCallback(() => {
    setIsInputCheckbox(false);
    setIsSleeps(0);
    setIsBathrooms(0);
    setIsBedrooms(0);
    setIsFilterModalOpen(false);
    filterApartments(false, 0, 0, 0);
  }, [filterApartments]);

  const subtract = useCallback(
    (i) => {
      if (i === 1 && isSleeps > 0) {
        setIsSleeps(isSleeps - 1);
      } else if (i === 2 && isBedrooms > 0) {
        setIsBedrooms(isBedrooms - 1);
      } else if (i === 3 && isBathrooms > 0) {
        setIsBathrooms(isBathrooms - 1);
      }
    },
    [isSleeps, isBedrooms, isBathrooms]
  );

  const add = useCallback(
    (i) => {
      if (i === 1 && isSleeps < 4) {
        setIsSleeps(isSleeps + 1);
      } else if (i === 2 && isBedrooms < 2) {
        setIsBedrooms(isBedrooms + 1);
      } else if (i === 3 && isBathrooms < 2) {
        setIsBathrooms(isBathrooms + 1);
      }
    },
    [isSleeps, isBedrooms, isBathrooms]
  );

  const toggleModal = useCallback(() => {
    setIsFilterModalOpen(!isFilterModalOpen);
  }, [isFilterModalOpen]);

  const toggleCheckbox = useCallback(() => {
    setIsInputCheckbox(!isInputCheckbox);
  }, [isInputCheckbox]);

  const submitForm = useCallback(() => {
    toggleModal();
    filterApartments(isInputCheckbox, isSleeps, isBedrooms, isBathrooms);
  }, [
    toggleModal,
    filterApartments,
    isInputCheckbox,
    isSleeps,
    isBedrooms,
    isBathrooms,
  ]);

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
        reset={reset}
      />
    </div>
  );
}
