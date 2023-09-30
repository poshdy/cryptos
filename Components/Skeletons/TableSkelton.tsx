import { Skeleton } from "../ui/skeleton";
import React from "react";

type Props = {};

const TableSkelton = (props: Props) => {
  return (
    <section className="container">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <section key={id}>
          <Skeleton className="container h-14 py-2" />
        </section>
      ))}
    </section>
  );
};

export default TableSkelton;
