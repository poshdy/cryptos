"use client";
import React from "react";
import useSWR from "swr";
import LineChart from "./LineChart";
import CoinStats from "./CoinStats";
import Loader from "./Loader";
interface PropType {
  coin: COIN;
  timePeriod: string;
  uuid: string;
}

const CoinData = ({ coin, timePeriod, uuid }: PropType) => {
  const fetcher = async () => {
    const res = await fetch(
      `/api/coinhistory?uuid=${uuid}&timePeriod=${timePeriod}`
    );
    return res.json();
  };
  const { data , isLoading } = useSWR("coinhistory", fetcher,{
    fallbackData:`/api/coinhistory?uuid=${uuid}$timePeriod=24h`,
  });

  const CoinHistory: CoinHistory = data?.data;
  if(isLoading) return <Loader/>

  return (
    <section className="my-4 flex flex-col w-full items-center justify-center">
      <div className="flex flex-col items-start lg:flex-row gap-2 lg:items-center">
        <h2 className="font-bold">Summary</h2>
        <p className="text-sm">{coin?.description}</p>
      </div>
      <LineChart CoinHistory={CoinHistory} />
      <CoinStats coin={coin} />
    </section>
  );
};

export default CoinData;
