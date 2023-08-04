import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    /**
     * Regla de oro los hooks no deben ser condicionados porque se perderia la referencia de los estados
     */


    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    // console.log(categories);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        // setCategories([ ...categories,'nuevo valor' ]); es otra forma de hacerlo
        // setCategories(cat=>[ ...categories,'nuevo valor' ]);


        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }


    return (
        <>

            {/* titulo */}

            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value =>onAddCategory(value)}
                // onNewCategory={onAddCategory}
            />



         {/* Listado de gif */}
         {/* <button onClick={onAddCategory}>Agregar</button> */}

            {
                categories.map(category =>
                    <GifGrid
                    key={category}
                    category={category}/>
                    // return <li key={category}>{category}</li>
                )
            }





        </>
    )
}
