"use client";
import React, { useState } from "react";
import useSWR from "swr";
import Chart from "../LineChart";
import Loader from "../Loader";
import PickTp from "../PickTp";
interface PropType {
  uuid: string;
}

const CoinData = ({ uuid }: PropType) => {
  const [timePeriod, setTimePeriod] = useState("3h");

  const fetcher = async () => {
    const res = await fetch(
      `/api/coinhistory?uuid=${uuid}&timePeriod=${timePeriod}`
    );
    return res.json();
  };
  const { data, isLoading } = useSWR("coinhistory", fetcher, {
    fallbackData: `/api/coinhistory?uuid=${uuid}$timePeriod=3h`,
  });

  const CoinHistory: CoinHistory = data?.data;
  if (isLoading) return <Loader />;

  return (
    <section
      id="chart"
      className="my-4 flex flex-col w-full items-center justify-center"
    >
      <PickTp setTimePeriod={setTimePeriod} />
      <Chart CoinHistory={CoinHistory} />
    </section>
  );
};

export default CoinData;
