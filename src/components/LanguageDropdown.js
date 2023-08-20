import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas } from "react-icons/fa";
import styles from "@/styles/LanguageDropdown.module.css";


// Array of supported languages and their corresponding labels
const languages = [
    {
        label: 'English',
        language: 'en'
    },
    {
        label: 'Español',
        language: 'es'
    },
    {
        label: 'Français',
        language: 'fr'
    },
    {
        label: 'Pусский',
        language: 'ru'
    },
    {
        label: 'Nederlands',
        language: 'de'
    },
    {
        label: 'Italiano',
        language: 'it'
    },
]

/**
 * LanguageDropdown component for selecting and changing the language.
 *
 * This component provides a language dropdown menu that allows users to
 * select a preferred language for the website. It utilizes the `react-i18next`
 * library for internationalization and translation.
 *
 * @component
 * @example
 * // Usage
 * <LanguageDropdown />
 *
 * @returns {JSX.Element} LanguageDropdown component JSX element.
 */
export default function LanguageDropdown() {
  const [t, i18n] = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  /**
   * Handles the change of selected language in the dropdown.
   *
   * @param {Object} e - The event object representing the change.
   */
  const handleChangeLanguage = (e) => {
    setCurrentLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <div className={`${styles.languageDropdown}`}>
      <FaGlobeAmericas className={`${styles.globeIcon}`} />
        <select onChange={handleChangeLanguage}>
          {languages.map(({ label, language }) => (
            <option key={language} value={language}>{t(`${label}`)}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
