"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/Components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import useSWR from "swr";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const SearchBar = () => {

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");



  const Fetcher = async () => {
    const res = await fetch("/api/coins");
    const data = await res.json();
    return data?.data?.coins?.slice(0, 8);
  };
  const { data, isLoading } = useSWR("api/coin", Fetcher);
  return (
    <>
      <Popover  open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? data?.find((coin: COIN) => coin.name === value)?.label
              : "Select coin"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" md:w-[200px]">
          <Command>
            <CommandInput placeholder="Search Coins..." />
            <CommandEmpty>No Coin found.</CommandEmpty>
            <CommandGroup>
              {data?.map((coin: COIN) => (
                <CommandItem
                  key={coin.uuid}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === coin.symbol ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex items-center gap-2">
                    <Image
                      width={20}
                      height={20}
                      className=""
                      alt={coin.symbol}
                      src={coin?.iconUrl}
                    />
                    <Link href={`/cryptos/${coin.uuid}`}>{coin.name}</Link>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SearchBar;
{
  /* <form onSubmit={handleSubmit} className="relative">
<Input
  ref={inputRef}
  type="text"
  value={query}
  className="rounded-xl font-mono w-40  md:w-60 h-10 p-2 focus:border outline-none"
  placeholder="Search"
  onChange={(e) => setQuery(e.target.value)}
/>
</form> */
}
