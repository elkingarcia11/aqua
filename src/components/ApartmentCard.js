import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaBed, FaBath } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import Image from "next/image"
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
  const [fileUrls, setFileUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const bucketName = "aqua-386121-image-bucket";
      const folderName = `aqua${aptId}`;
      const url = `https://www.googleapis.com/storage/v1/b/${bucketName}/o?prefix=${folderName}/`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        const fileNames = data.items.map((item) => item.name);
        const urls = fileNames.map(
          (name) => `https://storage.googleapis.com/${bucketName}/${name}`
        );
        setFileUrls(urls);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImageUrls();
  }, [aptId]);

  const memoizedFileUrls = useMemo(() => fileUrls, [fileUrls]);

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
        {memoizedFileUrls.map((url, index) => (
          <div key={index} className="swiperSlideImg">
            <Image
              src={url}
              alt={`File ${index}`}
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
                <IoPeopleOutline aria-label="Sleeps icon" /> <span>{t("sleeps")}:</span>
              </div>
              <div className={styles.iconAndDetails}>
                <FaBed aria-label="Bedrooms icon" /> <span>{t("bedrooms")}:</span>
              </div>
              <div className={styles.iconAndDetails}>
                <FaBath aria-label="Bathrooms icon" /> <span>{t("bathrooms")}:</span>
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
  aptId: PropTypes.string.isRequired,
  sleeps: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  baths: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};