



const ApiKEY: string = process.env.NEXT_PUBLIC_API_KEY as string   

const getAllCryptos = async () => {
    const res = await fetch('https://coinranking1.p.rapidapi.com/coins',{
        method: 'Get',
        headers: {
            'X-RapidAPI-Key': ApiKEY,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    })
    if(!res.ok){
        throw new Error(res.statusText)
    }
 
    // await new Promise((resolve)=>setTimeout(resolve,2000)) 
 return await res.json()
}

export default getAllCryptos