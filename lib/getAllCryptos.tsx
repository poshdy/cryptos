const ApiKEY: string = process.env.NEXT_PUBLIC_API_KEY as string;

const getAllCryptos = async () => {
  const res = await fetch("https://coinranking1.p.rapidapi.com/coins", {
    method: "Get",
    headers: {
      "X-RapidAPI-Key": ApiKEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data =  await res.json();
  const FinalData = data.data.coins
  return FinalData
};

export default getAllCryptos;
