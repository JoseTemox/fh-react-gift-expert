
import React, { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();//con esto se evita que se recargue el navegador al hacer
        console.log(inputValue);

        //valida que no venga en blanco
        if( inputValue.trim().length <= 1) {
            return;

        }
        // if ( categories.includes(newCategory) ) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
    <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        // onChange={ ()=>onInputChange(event) }
        onChange={ onInputChange }//esta es la forma mas simplificada
    />
 </form>
  )
}
