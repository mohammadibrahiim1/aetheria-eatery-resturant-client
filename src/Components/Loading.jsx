import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center backdrop-blur-[9xl]">
      <ClipLoader
        color="indigo"
        // loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />{" "}
    </div>
  );
}
