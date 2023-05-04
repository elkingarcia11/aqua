import React, { useState, useEffect, } from 'react';
import { useTranslation } from "react-i18next";

// Import Swiper React components
import  {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import styles from "@/styles/ApartmentCard.module.css";



export default function ApartmentCard({ aptId, sleeps, beds, baths, link }) {
  const { t } = useTranslation();
  

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function importAll(r) {
      const filteredKeys = r.keys().map(r)
      console.log(filteredKeys)
      return filteredKeys;
    }

    var imgs = []
    if (aptId === 1) {
      imgs = importAll(require.context('src/assets/aquaOne/', false));
    } else if (aptId === 2) {
      imgs = importAll(require.context('../assets/aquaTwo/', false));

    } else if (aptId === 3) {
      imgs = importAll(require.context('../assets/aquaThree/', false));

    } else if (aptId === 4) {
      imgs = importAll(require.context('../assets/aquaFour/', false));

    } else if (aptId === 5) {
      imgs = importAll(require.context('../assets/aquaFive/', false));

    } else if (aptId === 6) {
      imgs = importAll(require.context('../assets/aquaSix/', false));
    }
    setImages(imgs.map((imageUrl) => imageUrl.default))
    setIsLoading(false)
  }, [aptId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      
      <Swiper className={`${styles.swiper}`}>
        {images.map((image, index) => (
        <SwiperSlide key={index} className={`${styles.swiperSlide}`}>
          <img src={image.src} alt={image}/>
        </SwiperSlide>
        ))}
       
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
