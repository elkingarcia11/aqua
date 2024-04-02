import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaBed, FaBath, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { IoPeopleOutline } from "react-icons/io5";
import styles from "@/styles/ApartmentCard.module.css";

import ImageComponent from "./ImageComponent";

/**
 * ApartmentCard component displays information about an apartment,
 * including images, details, and a reservation link.
 *
 * @param {number} aptId - The ID of the apartment.
 * @param {number} sleeps - Number of people the apartment sleeps.
 * @param {number} beds - Number of bedrooms in the apartment.
 * @param {number} baths - Number of bathrooms in the apartment.
 * @param {string} link - The reservation link for the apartment.
 * @returns {JSX.Element} - Rendered ApartmentCard component.
 */
export default function ApartmentCard({
  aptId,
  sleeps,
  beds,
  baths,
  link,
  imageUrl,
  height,
  width,
}) {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);

  useEffect(() => {
    function importAll(r) {
      /*
        Goes through each module request string in the context directory, 
        imports the corresponding modules, and returns an array of imported module objects
      */
      return r.keys().map(r);
    }

    var imgs = [];

    // Select import path based on aptId
    if (aptId === 1) {
      imgs = importAll(require.context(`src/assets/aqua1/`, false));
    } else if (aptId === 2) {
      imgs = importAll(require.context("../assets/aqua2/", false));
    } else if (aptId === 3) {
      imgs = importAll(require.context("../assets/aqua3/", false));
    } else if (aptId === 4) {
      imgs = importAll(require.context("../assets/aqua4/", false));
    } else if (aptId === 5) {
      imgs = importAll(require.context("../assets/aqua5/", false));
    } else if (aptId === 6) {
      imgs = importAll(require.context("../assets/aqua6/", false));
    }

    // Map image URLs to their default URLs and update the state directly
    setImages(imgs.map((imageUrl) => imageUrl.default));
  }, [aptId]);

  return (
    <div className={`${styles.swiperContainer}`}>
      <Carousel width={width} showThumbs={false} showIndicators={false}>
        {images.map((image, index) => (
          <div key={index} className="swiperSlideImg">
            <ImageComponent
              src={image.src}
              alt={image.src}
              width={width}
              height={height}
            />
          </div>
        ))}
      </Carousel>

      {/* Apartment description and details */}
      <div className={`${styles.descriptionContainer}`}>
        <div className={`${styles.details}`}>
          <div>
            <div className={`${styles.apt}`}>AQUA {aptId}</div>
            <div className={`${styles.aptSub}`}>El Pueblito, Puerto Plata</div>
          </div>

          {/* Sleeps, Beds, and Baths icons and values */}
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
        {/* Reservation link */}
        <div className={`${styles.reserve}`}>
          <a href={link} className={`${styles.reserveButton}`}>
            {t("reserve")}
          </a>
        </div>
      </div>
    </div>
  );
}
