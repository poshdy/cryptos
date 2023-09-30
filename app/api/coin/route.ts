import { NextResponse } from "next/server";
const ApiKEY: string = process.env.NEXT_PUBLIC_API_KEY as string;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const uuid = searchParams.get("uuid");
  const timeperiod = searchParams.get("timePeriod");
  const res = await fetch(
    `https://coinranking1.p.rapidapi.com/coin/${uuid}?timePeriod=${timeperiod}`,
    {
      method: "Get",
      headers: {
        "X-RapidAPI-Key": ApiKEY,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
