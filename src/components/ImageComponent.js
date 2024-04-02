import { useRef, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";

const ImageComponent = ({ src, alt, width, height, priority }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = useRef();

  return (
    <div style={{ height: height, width: width }}>
      {isLoaded ? null : <Spinner />}
      {isLoaded ? (
        <Image
          ref={imageRef}
          src={src}
          width={width}
          height={height}
          alt={alt}
          priority={priority}
        />
      ) : (
        <Image
          src={src}
          style={{ display: "none" }}
          onLoad={() => setIsLoaded(true)}
          alt={alt}
        />
      )}
    </div>
  );
};

export default ImageComponent;
