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
    const importAll = (r) => r.keys().map(r);

    const fetchImageUrls = async () => {
      let imgs = [];
      try {
        switch (aptId) {
          case 1:
            imgs = importAll(
              require.context(
                `../assets/aqua1/`,
                false,
                /\.(png|jpe?g|svg|webp)$/
              )
            );
            break;
          case 2:
            imgs = importAll(
              require.context(
                `../assets/aqua2/`,
                false,
                /\.(png|jpe?g|svg|webp)$/
              )
            );
            break;
          case 3:
            imgs = importAll(
              require.context(
                `../assets/aqua3/`,
                false,
                /\.(png|jpe?g|svg|webp)$/
              )
            );
            break;
          case 4:
            imgs = importAll(
              require.context(
                `../assets/aqua4/`,
                false,
                /\.(png|jpe?g|svg|webp)$/
              )
            );
            break;
          case 5:
            imgs = importAll(
              require.context(
                `../assets/aqua5/`,
                false,
                /\.(png|jpe?g|svg|webp)$/
              )
            );
            break;
          case 6:
            imgs = importAll(
              require.context(
                `../assets/aqua6/`,
                false,
                /\.(png|jpe?g|svg|webp)$/
              )
            );
            break;
          default:
            console.error(`Unknown aptId: ${aptId}`);
            break;
        }

        // Preload all images
        const loadedImages = await Promise.all(
          imgs.map(
            (imageModule) =>
              new Promise((resolve, reject) => {
                const img = new window.Image();
                img.src = imageModule.default.src;
                img.onload = () => resolve(imageModule.default.src);
                img.onerror = () =>
                  reject(
                    new Error(
                      `Failed to load image: ${imageModule.default.src}`
                    )
                  );
              })
          )
        );

        setImages(loadedImages);
        setTimeout(() => {
          setLoading(false);
        }, 3000); // Adjust the timeout duration as needed
      } catch (error) {
        console.error("Failed to load images", error);
      }
    };

    fetchImageUrls();
  }, [aptId]);

  const memoizedImageUrls = useMemo(() => images, [images]);

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
          <div key={index} className={styles.swiperSlideImg}>
            {loading ? (
              <Spinner width={width} height={height} />
            ) : (
              <Image
                src={url}
                alt={`Image ${index}`}
                width={width}
                height={height}
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcUg8AAa0BFSX8uBwAAAAASUVORK5CYII="
                placeholder="blur"
              />
            )}
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
