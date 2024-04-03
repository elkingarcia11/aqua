import Image from "next/image";

const ImageComponent = ({ src, alt, width, height, loading }) => {
  return (
    <div style={{ height: height, width: width }}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
      />
    </div>
  );
};

export default ImageComponent;
