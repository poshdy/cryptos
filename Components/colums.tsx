"use client";

import { ColumnDef } from "@tanstack/react-table";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

export const columns: ColumnDef<Coins>[] = [
  {
    accessorKey: "rank",
    header: "rank",
  },
  {
    accessorKey: "iconUrl",
    header: () => <div className="">Icon</div>,
    cell: ({ row }) => {
      const url = row.original.iconUrl;
      const link = row.original.uuid;

      return (
        <Link href={`/cryptos/${link}`}>
          <Image alt="icon" width={30} height={30} src={url} />
        </Link>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "24hVolume",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Volume(24h)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = millify(row.getValue("24hVolume"));

      return <div className="text-center font-medium">{amount}$</div>;
    },
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Market Cap
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = millify(row.getValue("marketCap"));

      return <div className="text-center font-medium">{amount}$</div>;
    },
  },
  {
    accessorKey: "change",
    header: () => <div className="text-center">change</div>,
    cell: ({ row }) => {
      const amount = millify(row.getValue("change"));

      return <div className="text-center font-medium">{amount}%</div>;
    },
  },
  {
    accessorKey: "sparkline",

    header: () => <div className="text-center">last 7 Days</div>,
    cell: ({ row, cell }) => {
      const data: any[] = row.getValue("sparkline");

      return (
        <Sparklines data={data}>
          <SparklinesLine style={{ fill: "orange" }} />
          <SparklinesSpots size={2} />
        </Sparklines>
      );
    },
  },
];
