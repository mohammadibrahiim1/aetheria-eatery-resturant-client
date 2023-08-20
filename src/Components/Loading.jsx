import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center mt-24 backdrop-blur-[9xl]">
      <ClipLoader
        color="indigo"
        // loading={loading}
        // cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />{" "}
    </div>
  );
}
