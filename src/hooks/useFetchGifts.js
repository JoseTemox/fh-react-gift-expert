

import  { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifts'

export const useFetchGifts = (category) => {
        //con esta practica se dispara el llamado solo una vez cuando es necesario
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() =>{
        const newImages = await getGifts(category)
        setImages(newImages)
        setIsLoading(false)
    }
    useEffect(()=>{
        getImages()
    }, [])

    return {
        images,
        // images:images, es lo mismo que la linea de arriba
        isLoading
    }

}
