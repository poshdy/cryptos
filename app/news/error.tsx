"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
       <p>{error.message || 'something went wrong please try again'}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
