import { useRef, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";

const ImageComponent = ({ src, alt, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = useRef();

  return (
    <div style={{ height: height, width: width }}>
      {isLoaded ? null : <Spinner />}
      <Image
        ref={imageRef}
        src={src}
        onLoadingComplete={(e) => setIsLoaded(true)}
        width={width}
        height={height}
        alt={alt}
        priority
      />
    </div>
  );
};

export default ImageComponent;
