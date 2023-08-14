import getNews from "@/lib/getNews";
import Image from "next/image";
import React from "react";
import cryptoImage from "@/public/cryptoImage.jpg";

const Newspage = async () => {
  const News: News = await getNews();

  return (
    <>
      <h1 className="text-3xl text-center md:text-left font-extrabold leading-tight mb-2 tracking-tighter md:text-4xl my-4">Trending News</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center gap-3 my-4">
        {News.value.map((article) => (
          <div key={article.name} className="flex flex-col md:flex-row items-center gap-1">
            <Image  width={200} height={200} alt="news" src={cryptoImage} />
            <div className="flex flex-col items-center md:items-start gap-2 h-full">
            {article.provider.map((provider)=>(
              <p key={provider.datePublished} className="text-orange-400 text-base font-bold uppercase">{provider.name}</p>
            ))}
            <a href={article.url} target="_blank" className="font-bold text-center md:text-left text-lg">
              {article.name.slice(0, 100)}
            </a>
            <a href={article.url} target="_blank" className="font-bold text-center md:text-left text-xs text-slate-500">
              {article.description.slice(0, 100)}
            </a>
           
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default Newspage;
