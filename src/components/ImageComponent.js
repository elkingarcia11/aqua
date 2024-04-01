import { useRef, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";

const ImageComponent = ({ src, alt, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = useRef();

  const handleImageLoad = () => {
    setIsLoaded(true); // Corrected to true
  };

  return (
    <div style={{ height: height, width: width }}>
      {isLoaded ? null : <Spinner />}
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
