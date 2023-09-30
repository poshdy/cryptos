import { DataTable } from "@/Components/data-table";
import getAllCryptos from "@/lib/getAllCryptos";
import getAllStats from "@/lib/getAllStats";
import { columns } from "../Components/colums";
import NewestCoins from "@/Components/NewestCoins";
import { Suspense } from "react";
import TableSkelton from "@/Components/Skeletons/TableSkelton";
import NewSkeleton from "@/Components/Skeletons/NewSkeleton";

export default async function Home() {
  const [AllData, NewAndBestCoins] = await Promise.all([
    getAllCryptos(),
    getAllStats(),
  ]);
  const coins: Coins[] = AllData;

  return (
    <main className="space-y-5 my-10 container">
      <h1 className="leading-3 tracking-tighter text-4xl font-bold">
        Today's Cryptocurrency Prices by Market Cap
      </h1>
      <Suspense fallback={<TableSkelton />}>
        <DataTable columns={columns} data={coins} />
      </Suspense>
      <section className="flex gap-4  bg-muted rounded-2xl p-2">
        <Suspense fallback={<NewSkeleton />}>
          <NewestCoins
            title="Best coins"
            data={NewAndBestCoins?.data?.bestCoins}
          />
        </Suspense>
        <Suspense fallback={<NewSkeleton />}>
          <NewestCoins
            title="Newest coins"
            data={NewAndBestCoins?.data?.newestCoins}
          />
        </Suspense>
      </section>
    </main>
  );
}
