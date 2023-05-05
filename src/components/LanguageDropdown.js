import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas } from "react-icons/fa";
import styles from "@/styles/LanguageDropdown.module.css";

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

export default function LanguageDropdown() {
  const [t, i18n] = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeLanguage = (e) => {
    setCurrentLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <div className={`${styles.languageDropdown}`}>

        <FaGlobeAmericas className={`${styles.globeIcon}`} />
        <select onChange={handleChangeLanguage}>
          {languages.map((language) => (
            <option key={language.language} value={language.language}>{t(`${language.label}`)}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
