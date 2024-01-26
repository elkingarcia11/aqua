import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ImageComponent = ({ src, alt }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = useRef();

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const handleResize = () => {
      // Calculate the width based on the screen size
      const screenWidth = window.innerWidth;
      // You can adjust this logic based on your design requirements

      const calculatedWidth =
        screenWidth >= 1024 ? 0.3 * screenWidth : 0.95 * screenWidth;

      setWidth(calculatedWidth);

      // Calculate height in pixels based on aspect ratio
      const aspectRatio = 3754 / 2816;
      const calculatedHeight = calculatedWidth / aspectRatio;
      setHeight(calculatedHeight);
    };

    // Initial call to set the initial width and height
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <Image ref={imageRef} src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default ImageComponent;
