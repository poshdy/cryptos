"use client";
import React from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

type Props = {
  coin: COIN;
};

const Spark = ({ coin }: Props) => {
  return (
    <Sparklines data={coin?.sparkline}>
      <SparklinesLine style={{ fill: "orange" }} />
      <SparklinesSpots size={2} />
    </Sparklines>
  );
};

export default Spark;
