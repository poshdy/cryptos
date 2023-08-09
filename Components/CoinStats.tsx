import millify from "millify";
import React from "react";
const CoinStats = ({ coin }: { coin: COIN }) => {
  const VOLUME_OVER_MARKETCAP =
    Number(coin["24hVolume"]) / Number(coin.marketCap);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(+coin.price);

  const heading = "flex items-end justify-between text-lg font-bold";
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <div className="flex flex-col items-start w-full lg:w-[50%] gap-2">
        <h1 className="font-bold text-xl">Value Statistics</h1>
        <p className="text-sm">
          An overview showing the statistics of Bitcoin, such as the base and
          quote currency, the rank, and trading volume.
        </p>
        <div className="w-full">
          <h3 className={heading}>
            Price To USD
            <span>{formattedPrice}</span>
          </h3>
          <h3 className={heading}>
            Price To BTC
            <span>{coin.btcPrice}</span>
          </h3>
          <h3 className={heading}>
            Coin change
            <span>{coin.change}</span>
          </h3>
          <h3 className={heading}>
            Coin rank
            <span>{coin.rank}</span>
          </h3>
          <h3 className={heading}>
            Martket cap
            <span>{millify(+coin.marketCap)}</span>
          </h3>
          <h3 className={heading}>
            Volume(24h)
            <span>{millify(+coin["24hVolume"])}</span>
          </h3>
          <h3 className={heading}>
            Volume/Martket cap
            <span>{VOLUME_OVER_MARKETCAP.toFixed(4)}</span>
          </h3>
          <h3 className={heading}>
            All time high
            <span>{millify(+coin.allTimeHigh.price)}</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-start w-full lg:w-[50%]  bg-muted p-2 rounded-lg gap-2">
        <h1 className="font-bold text-xl">Supply information</h1>
        <p className="text-sm">
          View the total and circulating supply of Bitcoin, including details on
          how the supplies are calculated.
        </p>
        <div className="w-full">
          <h3 className={heading}>
            Circulating supply
            <span>{millify(+coin.supply.circulating)}</span>
          </h3>
          <h3 className={heading}>
            Total supply
            <span>{millify(+coin.supply.total)}</span>
          </h3>
          <h3 className={heading}>
            Max supply
            <span>{coin.supply.max}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CoinStats;
