import { Suspense } from "react";
import ResultPage from "./submission";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultPage />
    </Suspense>
  );
}
