import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import styles from "@/styles/ApartmentCard.module.css";

import { useTranslation } from "react-i18next";
export default function ApartmentCard({ aptId, sleeps, beds, baths, link }) {
  const { t } = useTranslation();

  return (
    <>
      <Swiper className={`${styles.swiper}`}>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img src="/stockphoto.jpg" alt="React logo" />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img src="/stockphoto.jpg" alt="React logo" />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img src="/stockphoto.jpg" alt="React logo" />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img src="/stockphoto.jpg" alt="React logo" />
        </SwiperSlide>
        <SwiperSlide className={`${styles.swiperSlide}`}>
          <img src="/stockphoto.jpg" alt="React logo" />
        </SwiperSlide>

        <div className={`${styles.aptDescription}`}>
          <div className={`${styles.details}`}>
            <div className={`${styles.apt}`}>AQUA {aptId}</div>
            <div className={`${styles.aptSub}`}>El Pueblito, Puerto Plata</div>
            <div className={`${styles.detailsOne}`}>
                <div>
                    <div>{t("sleeps")}:</div>
                    <div>{t("bedrooms")}:</div>
                    <div>{t("bathrooms")}:</div>
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
      </Swiper>
    </>
  );
}
