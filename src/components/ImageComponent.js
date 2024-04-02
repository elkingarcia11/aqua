import { useRef, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";

const ImageComponent = ({ src, alt, width, height, loading }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    console.log("IMAGE LOADED");
    setIsLoaded(true);
  };

  return (
    <div style={{ height: height, width: width }}>
      {isLoaded ? null : <Spinner />}
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        onLoadingComplete={() => handleImageLoaded()}
      />
    </div>
  );
};

export default ImageComponent;
