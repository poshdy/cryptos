import React from "react";
import millify from "millify";
import getAllStats from "@/lib/getAllStats";
const Stats = async () => {
  const stats = await getAllStats();
  const data: Stats = stats?.data;
  const classname = "flex items-center text-sm  flex-col  md:flex-row gap-1";
  const noStyle = "font-semibold text-orange-500 text-xs md:px-1";
  const textStyle = "font-medium text-xs";
  return (
    <section className="w-full h-16 border-muted border-y-2  overflow-scroll flex items-center justify-center gap-2 ">
      <div className={classname}>
        <h4 className={textStyle}>Coins:</h4>
        <h3 className={noStyle}>{millify(data?.totalCoins)}</h3>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>Martkets:</h4>
        <h2 className={noStyle}>{millify(data?.totalMarkets)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>Exchanges:</h4>
        <h2 className={noStyle}>{millify(data?.totalExchanges)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>24hVolume:</h4>
        <h2 className={noStyle}>{millify(+data?.total24hVolume)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>MartketCap:</h4>
        <h2 className={noStyle}>{millify(+data?.totalMarketCap)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>btcDominance:</h4>
        <h2 className={noStyle}>{millify(data?.btcDominance)}%</h2>
      </div>
    </section>
  );
};

export default Stats;
