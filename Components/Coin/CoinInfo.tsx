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
    <aside className="md:sticky md:left-0 md:top-0 md:h-screen md:w-[400px] w-full h-[40vh] overflow-scroll border-b-2 md:border-r-2 border-muted  max-w-md flex flex-col gap-3 p-6 space-y-5">
      <div className="flex flex-col gap-3 md:sticky md:top-0 md:left-0 shadow-lg">
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
