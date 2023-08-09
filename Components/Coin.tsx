"use client";
import React, { useState, Suspense } from "react";
import useSWR from "swr";
import PickTp from "./PickTp";
import Header from "./Header";
import CoinData from "./CoinData";
import Loader from "./Loader";

const Coin = ({ uuid }: { uuid: string }) => {
  const [timePeriod, setTimePeriod] = useState("24h");
  const fetcher = async () => {
    const res = await fetch(`/api/coin?uuid=${uuid}&timePeriod=${timePeriod}`);
    return res.json();
  };
  const { data, isLoading } = useSWR("coin", fetcher, {

  });

  const finalDATA: COIN = data?.data?.coin;
  if (isLoading) return <Loader/>;
  return (
    <div className="my-3">
      <header className="flex items-center flex-col-reverse lg:flex-row">
        <Header
          icon={finalDATA?.iconUrl}
          name={finalDATA?.name}
          symbol={finalDATA?.symbol}
          rank={finalDATA?.rank}
          price={finalDATA?.price}
        />
        <PickTp setTimePeriod={setTimePeriod} />
      </header>
      <Suspense fallback={<Loader/>}>
        <CoinData
          coin={finalDATA}
          timePeriod={timePeriod}
          uuid={finalDATA?.uuid}
        />
      </Suspense>
    </div>
  );
};

export default Coin;
