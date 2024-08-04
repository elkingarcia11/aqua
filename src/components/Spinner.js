import Image from "next/image";

export default function Spinner({width, height}) {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        height: height,
        width: width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/spinner.svg" alt="spinner" width={50} height={50} />
    </div>
  );
}
