export const getGifts = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JYQXTsBQxOqoO4M090LELevrK6L1X2LU&q=${category}&limit=10`
    const resp = await fetch(url)

    const {data} = await resp.json()


    const gift = data.map(img=>({
        id:img.id,
        title:img.title,
        url: img.images.downsized_medium.url

    }))

    return gift
}