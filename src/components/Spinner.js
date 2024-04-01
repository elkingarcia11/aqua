import Image from "next/image";

export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/spinner.svg" alt="spinner" width={50} height={50} />
    </div>
  );
}
