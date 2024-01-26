import Image from "next/image";

export default function Spinner({ height }) {
  const h = height.toString() + "px";
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        height: h,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/spinner.svg" alt="spinner" width={50} height={50} />
    </div>
  );
}
