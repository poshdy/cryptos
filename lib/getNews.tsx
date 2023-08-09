const ApiKEY: string = process.env.NEXT_PUBLIC_API_KEY as string   
export default async function getNews(){
    const res = await fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=crypto&freshness=Day',{
        method: 'Get',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': ApiKEY,
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
        
    })
    if(!res.ok){
        throw new Error(res.statusText)
    }
    console.log(res.status)
 
 return await res.json()
}