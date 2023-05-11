import { FaPlus, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import styles from "@/styles/NavBar.module.css";
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
            <button className={`${styles.doneButton}`} onClick={submit}>
            {t("reset")}
            </button>
            <button className={`${styles.doneButton}`} onClick={submit}>
            {t("done")}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
