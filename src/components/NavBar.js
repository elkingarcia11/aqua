import { useEffect, useState } from "react";
import styles from "@/styles/NavBar.module.css";
import { FaMap, FaSearch, FaPlus, FaMinus } from "react-icons/fa";
import { IoExit } from "react-icons/io5";

export default function NavBar() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSleeps, setIsSleeps] = useState(0);
  const [isBedrooms, setIsBedrooms] = useState(0);
  const [isBathrooms, setIsBathrooms] = useState(0);

  const toggleModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

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
    if (i === 1) {
      setIsSleeps(isSleeps + 1);
    } else if (i === 2) {
      setIsBedrooms(isBedrooms + 1);
    } else {
      setIsBathrooms(isBathrooms + 1);
    }
  };

  const handleClickOutside = (e) => {
    if (!isFilterModalOpen) return;
    const target = e.target;
    if (!target.closest(".modal")) {
      setIsFilterModalOpen(false);
    }
  };

  const handleScroll = () => {
    if (isFilterModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isFilterModalOpen && (
        <div className={`${styles.filterModal}`}>
          <div className={`${styles.modalHeader}`}>
            <button className={`${styles.exitButton}`} onClick={toggleModal}>
              <FaPlus />
            </button>
            <span>Filter</span>
          </div>
          <div className={`${styles.modalBody}`}>
            <div className={`${styles.modalTitle}`}>Filter by</div>

            <div className={`${styles.checkboxRow}`}>
           
            <label> <span>Ocean view</span>
              </label>
                <input type="checkbox" name="checkbox" />
            </div>

            <div className={`${styles.detailRow}`}>
              <div className={`${styles.detailsTitle}`}>Sleeps</div>
              <div className={`${styles.detailButtonContainer}`}>
                <button
                  className={`${styles.detailsButtons}`}
                  onClick={() => subtract(1)}
                >
                  <FaMinus />
                </button>
                <div>{isSleeps}</div>
                <button
                  className={`${styles.detailsButtons}`}
                  onClick={() => add(1)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className={`${styles.detailRow}`}>
              <div className={`${styles.detailsTitle}`}>Bedrooms</div>
              <div className={`${styles.detailButtonContainer}`}>
                <button
                  className={`${styles.detailsButtons}`}
                  onClick={() => subtract(2)}
                >
                  <FaMinus />
                </button>
                <div>{isBedrooms}</div>
                <button
                  className={`${styles.detailsButtons}`}
                  onClick={() => add(2)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className={`${styles.detailRow}`}>
              <div className={`${styles.detailsTitle}`}>Bathrooms</div>
              <div className={`${styles.detailButtonContainer}`}>
                <button
                  className={`${styles.detailsButtons}`}
                  onClick={() => subtract(3)}
                >
                  <FaMinus />
                </button>
                <div>{isBathrooms}</div>
                <button
                  className={`${styles.detailsButtons}`}
                  onClick={() => add(3)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <button className={`${styles.doneButton}`} onClick={toggleModal}>
              Done
            </button>
          </div>
        </div>
      )}
      <div className={`${styles.navbar}`}>
        <button className={`${styles.button}`}>
          <FaMap className={`${styles.icon}`} /> Map
        </button>
        <button className={`${styles.button}`} onClick={toggleModal}>
          <FaSearch className={`${styles.icon}`} /> Filter
        </button>
      </div>

      
    </div>
  );
}
