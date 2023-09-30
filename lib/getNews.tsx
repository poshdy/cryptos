const ApiKEY: string = process.env.NEXT_PUBLIC_API_KEY as string;
export default async function getNews() {
  const res = await fetch("https://crypto-news16.p.rapidapi.com/news/yahoo", {
    method: "Get",
    headers: {
      "X-RapidAPI-Key": ApiKEY,
      "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
    },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  console.log(res.status);

  return await res.json();
}
