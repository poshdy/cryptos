import Link from "next/link";
import React from "react";

type PropType = {
  uuid: string;
};

const Header = ({ uuid }: PropType) => {
  return (
    <header className="flex border-b border-b-muted gap-3 font-semibold p-3 ">
      <Link className="hover:text-orange-500 duration-300 ease-in-out" scroll href={`/cryptos/${uuid}#chart`}>
        Chart
      </Link>
      <Link className="hover:text-orange-500 duration-300 ease-in-out" href={`/cryptos/${uuid}#news`}>News</Link>
      <Link className="hover:text-orange-500 duration-300 ease-in-out" href={`/cryptos/${uuid}#about`}>About</Link>
    </header>
  );
};

export default Header;
