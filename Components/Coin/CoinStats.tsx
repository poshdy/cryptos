import React from "react";
const CoinStats = ({ coin }: { coin: COIN }) => {
  const VOLUME_OVER_MARKETCAP =
    Number(coin["24hVolume"]) / Number(coin.marketCap);

  const formattedPrice = (num: string | number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(+num);
  };

  const heading =
    "flex items-end justify-between text-sm font-semibold text-gray-400";
  const SPAN = "text-primary";
  return (
    <section className="bg-muted p-2 rounded-md shadow-md">
      <div className="w-full flex flex-col gap-4">
        <h3 className={heading}>
          Coin rank
          <span className={SPAN}>{coin.rank}</span>
        </h3>
        <h3 className={heading}>
          Martket cap
          <span className={SPAN}>{formattedPrice(coin.marketCap)}</span>
        </h3>
        <h3 className={heading}>
          Volume(24h)
          <span className={SPAN}>{formattedPrice(coin["24hVolume"])}</span>
        </h3>
        <h3 className={heading}>
          Volume/Martket cap
          <span className={SPAN}>{VOLUME_OVER_MARKETCAP.toFixed(4)}</span>
        </h3>
        <h3 className={heading}>
          Circulating supply
          <span className={SPAN}>
            {formattedPrice(coin.supply.circulating)}
          </span>
        </h3>

        <h3 className={heading}>
          Coin change
          <span className={SPAN}>{coin.change}</span>
        </h3>

        <h3 className={heading}>
          Total supply
          <span className={SPAN}>{formattedPrice(coin?.supply.total)}</span>
        </h3>
        <h3 className={heading}>
          Max supply
          <span className={SPAN}>{formattedPrice(coin?.supply.max)}</span>
        </h3>
        <h3 className={heading}>
          Fully diluted market cap
          <span className={SPAN}>
            {formattedPrice(coin?.fullyDilutedMarketCap)}
          </span>
        </h3>
      </div>
    </section>
  );
};

export default CoinStats;
{
}
