// import { getGifts } from "../helpers/getGifts";
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";




export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifts(category);


  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && <h2>Cargando...</h2> // es un and logico porque react no renderiza null
            /**
             * si isLoading es true ejecuta la segunda parte luego del &&
             */

        }
        {/* {
            isLoading
            ? <h2>Cargando...</h2>
            : null
        } */}
        <div className="card-grid">
            {
                images.map((image)=>(
                    <GifItem
                    key={image.id}
                    {...image}
                    />

                ))
            }

        </div>
    </>
  )
}
