import React from "react";
import millify from "millify";
const Stats = ({
  total24hVolume,
  totalCoins,
  totalExchanges,
  totalMarketCap,
  totalMarkets,
  btcDominance,
}: Stats) => {
  const classname = "flex flex-col items-start rounded-2xl ";
  const noStyle = "text-xl md:text-2xl lg:text-3xl font-extrabold";
  const textStyle = "text-[14px] text-primary";
  return (
    <div className="lg:w-[50%] w-full h-[200px] grid grid-cols-3 bg-muted  gap-3 rounded-xl p-4 ">
      <div className={classname}>
        <h4 className={textStyle}>Coins</h4>
        <h3 className={noStyle}>{millify(totalCoins)}</h3>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>Martkets</h4>
        <h2 className={noStyle}>{millify(totalMarkets)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>Exchanges</h4>
        <h2 className={noStyle}>{millify(totalExchanges)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>24hVolume</h4>
        <h2 className={noStyle}>{millify(+total24hVolume)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>MartketCap</h4>
        <h2 className={noStyle}>{millify(+totalMarketCap)}</h2>
      </div>
      <div className={classname}>
        <h4 className={textStyle}>btcDominance</h4>
        <h2 className={noStyle}>{millify(btcDominance)}%</h2>
      </div>
    </div>
  );
};

export default Stats;
