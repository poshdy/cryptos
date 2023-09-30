import getNews from "@/lib/getNews";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
};
interface NEWS {
  title: string;
  description: string;
  url: string;
  date: string;
}

const CoinNews = async ({ name }: Props) => {
  const News: NEWS[] = await getNews();
  return (
    <section id="news" className="flex flex-col items-start gap-3 space-y-3">
      <h3 className="font-bold text-3xl leading-3 tracking-tight">
        News {name}
      </h3>
     
      {News?.map((news) => (
        <article
          className="w-full rounded-2xl bg-muted p-2 flex flex-col gap-2"
          key={news?.url}
        >
          <Link href={news?.url} className="text-lg font-semibold">{news?.title}</Link>
          <p className="text-sm text-gray-400">{news?.description}</p>
          <span className="text-xs text-gray-400">{news?.date}</span>
        </article>
      ))}
    </section>
  );
};

export default CoinNews;
