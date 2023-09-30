import Image from "next/image";
import React from "react";
import CoinStats from "./CoinStats";
import CoinLinks from "./CoinLinks";
import CoinPerfomance from "./CoinPerfomance";

type Props = {
  coin: COIN;
};

const CoinInfo = ({ coin }: Props) => {
  const formattedPrice = (num: string | number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(+num);
  };
  return (
    <aside className="sticky left-0 top-0 h-screen w-[400px] overflow-scroll border-r-2 border-muted  max-w-md flex flex-col gap-3 p-6 space-y-5">
      <div className="flex flex-col gap-3 sticky top-0 left-0 shadow-lg">
        <div className="flex items-center gap-2 justify-start">
          <Image src={coin?.iconUrl} width={30} height={30} alt="crypto coin" />
          <h3 className="font-semibold text-lg">{coin?.name}</h3>
          <span className="font-light">{coin?.symbol}</span>
        </div>
        <h1 className="font-bold leading-3 tracking-tight text-4xl">
          {formattedPrice(coin?.price)}
        </h1>
      </div>
      <CoinStats coin={coin} />
      <CoinLinks coin={coin} />
      <CoinPerfomance formattedPrice={formattedPrice} coin={coin} />
    </aside>
  );
};

export default CoinInfo;
