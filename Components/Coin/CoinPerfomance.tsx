import React from "react";
import Spark from "../Spark";

type Props = {
  coin: COIN;
  formattedPrice: (num: string | number) => string;
};

const CoinPerfomance = ({ coin, formattedPrice }: Props) => {
  const heading =
    "flex items-end justify-between text-sm font-semibold text-gray-400";
  const SPAN = "text-primary";
  return (
    <section className="bg-muted p-3 space-y-3 rounded-md shadow-md">
      <h3 className="font-semibold text-sm">Price Performance</h3>
      <Spark coin={coin} />
      <h3 className={heading}>
        Price To BTC
        <span className={SPAN}>{formattedPrice(coin?.btcPrice)}</span>
      </h3>
      <div>
        <h4 className={heading}>
          All time high
          <span className={SPAN}>
            {formattedPrice(coin?.allTimeHigh?.price)}
          </span>
        </h4>
      </div>
    </section>
  );
};

export default CoinPerfomance;
