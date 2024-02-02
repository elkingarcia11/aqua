import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ImageComponent = ({ src, alt }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      // Calculate the width based on the screen size
      const screenWidth = window.innerWidth;

      const calculatedWidth =
        screenWidth >= 1024 ? 0.3 * screenWidth : 0.95 * screenWidth;

      setWidth(calculatedWidth);

      // Calculate height in pixels based on aspect ratio
      const aspectRatio = 3754 / 2816;
      const calculatedHeight = calculatedWidth / aspectRatio;
      setHeight(calculatedHeight);
    };

    const handleImageLoad = () => {
      setIsLoaded(true);
    };

    // Initial call to set the initial width and height
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Attach the load event listener to the image
    imageRef.current.addEventListener("load", handleImageLoad);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("resize", handleResize);

      // Remove the load event listener on component unmount
      imageRef.current.removeEventListener("load", handleImageLoad);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={isLoaded ? "eager" : "lazy"}
      />
    </div>
  );
};

export default ImageComponent;
