import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";

const ImageComponent = ({ src, alt }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = useRef();

  useEffect(() => {
    let isMounted = true; // Flag to track component mount state

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

    const cleanup = () => {
      // Check if the component is still mounted before removing the event listener
      if (isMounted) {
        window.removeEventListener("resize", handleResize);

        // Check if imageRef.current is not null before removing the load event listener
        if (imageRef.current) {
          imageRef.current.removeEventListener("load", handleImageLoad);
        }
      }
    };

    // Initial call to set the initial width and height
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Attach the load event listener to the image
    imageRef.current.addEventListener("load", handleImageLoad);

    // Cleanup function on component unmount
    return () => {
      isMounted = false; // Update the mounted state
      cleanup();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const handleImageLoad = () => {
    setIsLoaded(true); // Corrected to true
  };

  return (
    <div>
      {isLoaded ? null : <Spinner height={height} />}
      {/* Display spinner while loading */}
      <Image
        ref={imageRef}
        src={src}
        onLoad={() => handleImageLoad()}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default ImageComponent;
