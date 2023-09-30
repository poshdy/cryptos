import Image from "next/image";
import Link from "next/link";
import React from "react";
type Data = {
  uuid: string;
  symbol: string;
  name: string;
  iconUrl: string;
};
type Props = {
  data: Data[];
  title: string;
};

const NewestCoins = ({ data, title }: Props) => {
  return (
    <section className="w-[50%] flex p-2 flex-col gap-2">
      <h1 className="font-bold text-lg md:text-2xl">{title}</h1>
      {data?.map((data: Data) => (
        <div
          className="bg-background rounded-2xl p-2 w-full flex flex-col items-center justify-center gap-2"
          key={data.uuid}
        >
          <h4 className="text-lg text-gray-500">{data?.symbol}</h4>
          <Image src={data?.iconUrl} alt={data.symbol} width={50} height={50} />
          <Link className="text-lg font-bold md:text-2xl text-secondary-foreground" href={`/crytos/${data?.uuid}`}>{data?.name}</Link>
        </div>
      ))}
    </section>
  );
};

export default NewestCoins;
