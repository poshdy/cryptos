import React from "react";
import Image from "next/image";
interface PropType {
  name: string;
  symbol: string;
  rank: number;
  icon: string;
  price: string;
}

const Header = ({ name, symbol, rank, icon, price }: PropType) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(+price);
  return (
    <div className="flex items-center gap-2 w-full justify-between lg:justify-start ">
      <div className="flex gap-1 items-center">
        <Image src={icon} width={40} height={40} alt="crypto coin" />
        <div className="flex flex-col lg:flex-row gap-4">
          <h1 className="font-bold text-xl">{name}</h1>
          <div className="flex gap-2">
            <h3 className="font-light">{symbol}</h3>
            <span className="font-light bg-muted px-2 rounded-lg">#{rank}</span>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-2xl">{formattedPrice}</h1>
    </div>
  );
};

export default Header;
