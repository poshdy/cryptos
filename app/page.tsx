import Stats from "@/Components/Stats";
import { DataTable } from "@/Components/data-table";
import getAllCryptos from "@/lib/getAllCryptos";
import getAllStats from "@/lib/getAllStats";
import { columns } from "./colums";
import { Suspense } from "react";
import Loader from "@/Components/Loader";

export default async function Home() {
  const AllData = getAllCryptos();
  const CoinData =   await AllData;
  const coins: Coins[] = CoinData.data.coins;
  const GlobalStats = getAllStats();
   const GLOBAL_Stats = await GlobalStats;
  const stats: Stats = GLOBAL_Stats.data;

  return (
    <main className="my-10">
      <h1 className="text-3xl font-extrabold leading-tight mb-2 tracking-tighter md:text-4xl">
        Global Stats
      </h1>
      <section className="flex flex-col lg:flex-row items-center gap-4 mb-6 lg:justify-between">
        <Stats {...stats} />
        <div className="lg:w-[50%] w-full h-[200px] bg-muted p-4 rounded-xl ">
          <h1 className="text-4xl leading-tight tracking-tighter font-extrabold">
            Get all Crypto Stats, Details,News All in one Place
          </h1>
        </div>
      </section>
      <section className="p-6 bg-muted rounded-xl grid grid-cols-1 gap-2 justify-items-center ">
        <Suspense fallback={<Loader/>}>
          <DataTable columns={columns} data={coins} />
        </Suspense>
      </section>
    </main>
  );
}
