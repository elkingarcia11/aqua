import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import styles from "@/styles/NavBar.module.css";

/**
 * FilterModal Component
 * 
 * A reusable component that provides a modal for filtering options.
 * 
 * @module FilterModal
 * @param {Object} props - The component props.
 * @param {boolean} props.isFilterModalOpen - Flag to control the visibility of the modal.
 * @param {boolean} props.isInputCheckbox - Flag to indicate if the input checkbox is checked.
 * @param {number} props.isSleeps - The number of sleeps selected.
 * @param {number} props.isBedrooms - The number of bedrooms selected.
 * @param {number} props.isBathrooms - The number of bathrooms selected.
 * @param {Function} props.subtract - Callback to subtract from the selected counts.
 * @param {Function} props.add - Callback to add to the selected counts.
 * @param {Function} props.toggleModal - Callback to toggle the modal visibility.
 * @param {Function} props.submitForm - Callback to handle form submission.
 * @param {Function} props.toggleCheckbox - Callback to toggle the input checkbox.
 * @param {Function} props.reset - Callback to reset the filter settings.
 * @returns {JSX.Element|null} The FilterModal component JSX or null if not open.
 */
export default function FilterModal({
  isFilterModalOpen,
  isInputCheckbox,
  isSleeps,
  isBedrooms,
  isBathrooms,
  subtract,
  add,
  toggleModal,
  submitForm,
  toggleCheckbox,
  reset
}) {
  const submit = () => {
    toggleModal();
    submitForm();
  };
  const { t } = useTranslation();
  if (isFilterModalOpen) {
    return (
      <div className={`${styles.filterModal}`}>
        <div className={`${styles.modalHeader}`}>
          <button className={`${styles.exitButton}`} onClick={toggleModal}>
            <FaPlus />
          </button>
          <span>{t("filter")}</span>
        </div>
        <div className={`${styles.modalBody}`}>
          <div className={`${styles.modalTitle}`}>{t("filter")} {t("by")}</div>

          <div className={`${styles.checkboxRow}`}>
            <input
              type="checkbox"
              name="checkbox"
              onChange={toggleCheckbox}
              checked={isInputCheckbox}
            />
            <label>
              <span>{t("oceanview")}</span>
            </label>
          </div>

          <div className={`${styles.detailRow}`}>
            <div className={`${styles.detailsTitle}`}>{t("sleeps")}</div>
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
            <div className={`${styles.detailsTitle}`}>{t("bedrooms")}</div>
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
            <div className={`${styles.detailsTitle}`}>{t("bathrooms")}</div>
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
            <button className={`${styles.doneButton}`} onClick={reset}>
            {t("reset")}
            </button>
            <button className={`${styles.doneButton}`} onClick={submit}>
            {t("done")}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null; // Return null when the modal is not open
  }
}
