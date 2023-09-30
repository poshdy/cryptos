import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const NewSkeleton = (props: Props) => {
  return (
    <section className="container">
      {Array.from({ length: 3 }, (_, i) => i + 1).map((id) => (
        <section key={id}>
          <Skeleton className="container h-20 py-2" />
        </section>
      ))}
    </section>
  );
};

export default NewSkeleton;
