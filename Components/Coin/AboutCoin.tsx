import React from "react";

type Props = {
  coin: COIN;
};

function AboutCoin({ coin }: Props) {
  return (
    <section id="about" className="flex flex-col items-start gap-2">
      <h3 className="font-bold text-3xl leading-3 tracking-tight">
        About {coin?.name}
      </h3>
      <p className="text-gray-400 text-lg ">{coin?.description}</p>
    </section>
  );
}

export default AboutCoin;
