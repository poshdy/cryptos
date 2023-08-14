import React from "react";
import SearchBar from "./SearchBar";
import ThemeChanger from "./use-theme";
import Link from "next/link";
import { PiCurrencyEthDuotone } from "react-icons/pi";
const Nav = () => {
  return (
    <header className="sticky bg-background top-0 w-full h-16 flex justify-center items-center outline-dashed outline-1 outline-accent-foreground ">
      <nav className="container justify-between flex items-center">
        <div className="flex flex-col md:flex-row  items-center md:justify-between w-[30%] gap-1">
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
            <Link className="text-sm font-semibold" href={`/`}>
              Cryptocurrenies
            </Link>
            <Link className="text-sm font-semibold" href={'/news'}>
              News
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <SearchBar />
          <div className="flex items-center justify-center gap-2">
            <ThemeChanger />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
