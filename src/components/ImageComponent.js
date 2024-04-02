import { useRef, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";

const ImageComponent = ({ src, alt, width, height, priority }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div style={{ height: height, width: width }}>
      {!isLoaded && <Spinner />}
      {isLoaded && (
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{ display: "none" }}
        onLoad={() => handleImageLoaded()}
      />
    </div>
  );
};

export default ImageComponent;
