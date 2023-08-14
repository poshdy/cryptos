
const ApiKEY: string = process.env.NEXT_PUBLIC_API_KEY as string   
export default async function getCoin(uuid: string , timepriod:string ){
    const res = await fetch(`https://coinranking1.p.rapidapi.com/coin/${uuid}?timePeriod=${timepriod}`,{
        method: 'Get',
        headers: {
            'X-RapidAPI-Key': ApiKEY,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    })

    console.log(res.status)

 return await res.json()
}