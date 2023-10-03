import AboutCoin from "@/Components/Coin/AboutCoin";
import CoinData from "@/Components/Coin/CoinData";
import CoinInfo from "@/Components/Coin/CoinInfo";
import CoinNews from "@/Components/Coin/CoinNews";
import Header from "@/Components/Header";
import getCoin from "@/lib/getCoin";

const page = async ({ params }: { params: { uuid: string } }) => {
  const coin = await getCoin(params?.uuid, "3h");
  return (
    <section className="relative w-full flex flex-col md:flex-row ">
      <CoinInfo coin={coin?.data?.coin} />

      <section className="min-h-screen container  space-y-20">
        <Header uuid={params?.uuid} />
        <CoinData uuid={params?.uuid} />

        <CoinNews name={coin?.data?.name} />
        <AboutCoin coin={coin?.data?.coin} />
      </section>
    </section>
  );
};

export default page;
