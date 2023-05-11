import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "@/styles/NavBar.module.css";
export default function FilterModal({ submitForm, toggleCheckbox, isFilterModalOpen, isInputCheckbox, isSleeps, isBedrooms, isBathrooms, subtract, add, toggleModal}) {
  const submit = () => {
    toggleModal()
    submitForm()
  }
  
  if (isFilterModalOpen) {
    return (
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

          <input type="checkbox" name="checkbox" onChange={toggleCheckbox} checked={isInputCheckbox} />
            <label>
              <span>Ocean view</span>
            </label>
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
        <div className={`${styles.buttonRow}`}>
        <button className={`${styles.doneButton}`} onClick={submit}>
            Reset
          </button>
          <button className={`${styles.doneButton}`} onClick={submit}>
            Done
          </button>
        </div>
          
        </div>
      </div>
    );
  }
}
