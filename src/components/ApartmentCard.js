import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaBed, FaBath } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import Image from "next/image";
import styles from "@/styles/ApartmentCard.module.css";
import Spinner from "./Spinner";

export default function ApartmentCard({
  aptId,
  sleeps,
  beds,
  baths,
  link,
  height,
  width,
}) {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map(r);
    };
    const fetchImageUrls = async () => {
      var imgs = [];
      // Select import path based on aptId

      try {
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
        setImages(imgs.map((imageUrl) => imageUrl.default));
      } finally {
        setLoading(false);
      }
    };

    fetchImageUrls();
  }, [aptId]);

  const memoizedImageUrls = useMemo(() => images, [images]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.swiperContainer}>
      <Carousel
        width={width}
        showThumbs={false}
        showIndicators={false}
        className={styles.carousel}
        transitionTime={0}
      >
        {memoizedImageUrls.map((url, index) => (
          <div key={index} className="swiperSlideImg">
            <Image
              src={url}
              alt={`Image ${index}`}
              width={width}
              height={height}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </Carousel>

      <div className={styles.descriptionContainer}>
        <div className={styles.details}>
          <div>
            <div className={styles.apt}>AQUA {aptId}</div>
            <div className={styles.aptSub}>El Pueblito, Puerto Plata</div>
          </div>

          <div className={styles.detailsOne}>
            <div>
              <div className={styles.iconAndDetails}>
                <IoPeopleOutline aria-label="Sleeps icon" />{" "}
                <span>{t("sleeps")}:</span>
              </div>
              <div className={styles.iconAndDetails}>
                <FaBed aria-label="Bedrooms icon" />{" "}
                <span>{t("bedrooms")}:</span>
              </div>
              <div className={styles.iconAndDetails}>
                <FaBath aria-label="Bathrooms icon" />{" "}
                <span>{t("bathrooms")}:</span>
              </div>
            </div>
            <div className={styles.columnTwo}>
              <div>{sleeps}</div>
              <div>{beds}</div>
              <div>{baths}</div>
            </div>
          </div>
        </div>
        <div className={styles.reserve}>
          <a href={link} className={styles.reserveButton}>
            {t("reserve")}
          </a>
        </div>
      </div>
    </div>
  );
}

ApartmentCard.propTypes = {
  aptId: PropTypes.number.isRequired,
  sleeps: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  baths: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
