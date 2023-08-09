
const ApiKEY: string = process.env.NEXT_PUBLIC_API_KEY as string   
export default async function getAllStats() {

const res = await fetch('https://coinranking1.p.rapidapi.com/stats',{
    method:'Get',
    headers:{
        'X-RapidAPI-Key': ApiKEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
})
// console.log(res.status)
if(!res.ok) throw new Error('failed')

  return res.json()
}
