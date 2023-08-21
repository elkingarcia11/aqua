export default function Spinner({ isLoading }) {
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25px",
        }}
      >
        <img src="/spinner.svg" alt="spinner" width={"50px"} />
      </div>
    );
  } else {
    return <div />;
  }
}
