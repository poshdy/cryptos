"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { PiCurrencyEthDuotone } from "react-icons/pi";
import SearchBar from "./SearchBar";
import ThemeChanger from "./use-theme";

type Props = {};

const MobNav = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex md:hidden w-full p-4 overflow-hidden">
      <section className="flex justify-between items-center w-full">
        <Link
          href={"/"}
          className="text-2xl leading-tight flex gap-1 items-center tracking-tighter font-extrabold"
        >
          <PiCurrencyEthDuotone
            className="hover:text-orange-500 duration-500 ease-in-out"
            size={30}
          />
          Cryptos
        </Link>
        <div className="flex items-center gap-3">
          <Menu onClick={() => setOpen(!open)} size={20} />
          <ThemeChanger />
        </div>
      </section>
      <div
        className={` duration-300 w-full h-32 fixed  bg-muted z-40  ease-in-out ${
          open ? "left-0 top-16 " : "top-[-100%]"
        }`}
      >
        <div className="flex items-center justify-center flex-col font-bold text-xl h-full gap-2">
        
            <Link className="text-sm" href={`/`}>
              Cryptocurrenies
            </Link>
            <Link className="text-sm" href={"/news"}>
              News
            </Link>
        

          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default MobNav;
