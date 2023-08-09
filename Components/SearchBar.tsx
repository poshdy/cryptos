"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<null | any>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/api/coins`);
    const coins = await res.json();
    const getID = coins.data.coins.filter((coin: COIN) => {
      return (
        coin.name.toLowerCase() === query.toLowerCase() ||
        coin.symbol.toLowerCase() === query.toLowerCase()
      );
    });
    router.push(`/cryptos/${getID[0].uuid}`);
    setQuery("");
  };

  useEffect(() => {
    window.addEventListener("keyup", detectKey, true);
  }, []);
  const detectKey = (e: any) => {
    if (e.key === "Control") {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={query}
          className="rounded-xl font-mono w-40  md:w-60 h-10 p-2 focus:border outline-none"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
};

export default SearchBar;
