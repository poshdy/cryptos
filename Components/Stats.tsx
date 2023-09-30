import React from "react";
import millify from "millify";
import getAllStats from "@/lib/getAllStats";
const Stats = async () => {
  const stats = await getAllStats();
  const data: Stats = stats?.data;
  const classname = "flex items-center text-sm";
  const noStyle = "font-semibold text-orange-500 px-1";
  const textStyle = "font-medium";
  return (
    <section className="w-full h-12 border-muted border-y-2 flex items-center justify-center gap-2">
      <div className={classname}>
        <h4 className={textStyle}>Coins:</h4>
        <h3 className={noStyle}>{millify(data?.totalCoins)}</h3>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>Total Martkets:</h4>
        <h2 className={noStyle}>{millify(data?.totalMarkets)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>Total Exchanges:</h4>
        <h2 className={noStyle}>{millify(data?.totalExchanges)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>24hVolume:</h4>
        <h2 className={noStyle}>{millify(+data?.total24hVolume)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>Total MartketCap:</h4>
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
