import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import  { Navigation } from "swiper";
import Spinner from "./Spinner";

import {
  IoPeopleOutline,
  IoChevronBackCircle,
  IoChevronForwardCircle,
} from "react-icons/io5";
import { FaBed, FaBath } from "react-icons/fa";
import styles from "@/styles/ApartmentCard.module.css";
import "swiper/css";
import "swiper/css/navigation";

export default function ApartmentCard({ aptId, sleeps, beds, baths, link }) {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    function importAll(r) {
      return r.keys().map(r);
    }

    var imgs = [];
    if (aptId === 1) {
      imgs = importAll(require.context("src/assets/aquaOne/", false));
    } else if (aptId === 2) {
      imgs = importAll(require.context("../assets/aquaTwo/", false));
    } else if (aptId === 3) {
      imgs = importAll(require.context("../assets/aquaThree/", false));
    } else if (aptId === 4) {
      imgs = importAll(require.context("../assets/aquaFour/", false));
    } else if (aptId === 5) {
      imgs = importAll(require.context("../assets/aquaFive/", false));
    } else if (aptId === 6) {
      imgs = importAll(require.context("../assets/aquaSix/", false));
    }
    let newArray = [];
    imgs.forEach((imageUrl) => {
      newArray.push(imageUrl.default);
    });
    setImages(newArray);
    setIsLoading(false);
  }, [aptId]);

  return (
    <div className={`${styles.swiperContainer}`}>
      <Swiper
        loop
        navigation
        modules={[Navigation]}
        className={`${styles.swiper}`}
      >
        <Spinner isLoading={isLoading} />
        {images.map((image, index) => (
          <SwiperSlide key={index} className={`${styles.swiperSlide}`}>
            <img src={image.src} alt={image.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles.descriptionContainer}`}>
        <div className={`${styles.details}`}>
          <div >
            <div className={`${styles.apt}`}>AQUA {aptId}</div>
            <div className={`${styles.aptSub}`}>El Pueblito, Puerto Plata</div>
          </div>
          <div className={`${styles.detailsOne}`}>
            <div>
              <div className={`${styles.iconAndDetails}`}>
                <IoPeopleOutline /> <span>{t("sleeps")}:</span>
              </div>
              <div className={`${styles.iconAndDetails}`}>
                <FaBed /> <span>{t("bedrooms")}:</span>
              </div>
              <div className={`${styles.iconAndDetails}`}>
                <FaBath /> <span>{t("bathrooms")}:</span>
              </div>
            </div>
            <div className={`${styles.columnTwo}`}>
              <div>{sleeps}</div>
              <div>{beds}</div>
              <div>{baths}</div>
            </div>
          </div>
        </div>
        <div className={`${styles.reserve}`}>
          <a href={link} className={`${styles.reserveButton}`}>
            {t("reserve")}
          </a>
        </div>
      </div>
    </div>
  );
}
