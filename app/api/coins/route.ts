import  {NextResponse} from 'next/server'
const ApiKEY: string = process.env.NEXT_PUBLIC_API_KEY as string

export async function GET(req: Request){
   const res = await fetch('https://coinranking1.p.rapidapi.com/coins',{
    method: 'Get',
    headers: {
        'X-RapidAPI-Key': ApiKEY,
       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
 },
 cache:'no-store',
 

})
const data = await res.json()

 

return NextResponse.json(data)
}
