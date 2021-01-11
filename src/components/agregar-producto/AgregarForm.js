import React from 'react'
import { addProducto } from '../../helpers/addProducto';
import { useForm } from '../../hooks/useForm'

export const AgregarForm = () => {

    const[formValues, handleInputChange, reset] = useForm({
        codigo: "",
        nombre: "",
        linea: "",
        costo:""

    })

    const {codigo, nombre, linea, costo} = formValues;

    const handleSubmit = (e)=>{
        e.preventDefault()
        reset();
        console.log(formValues);
        addProducto(formValues);
    }


    return (
        <div>
            <form 
                className="agregar__form" 
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="agregar__input"
                    placeholder="Código"
                    name="codigo"
                    value={ codigo }
                    onChange={ handleInputChange }
                ></input>
                <input
                    type="text"
                    className="agregar__input"
                    placeholder="Nombre"
                    name="nombre"
                    value={ nombre }
                    onChange={ handleInputChange }
                ></input>
                <input
                    type="text"
                    className="agregar__input"
                    placeholder="Linea"
                    name="linea"
                    value={ linea }
                    onChange={ handleInputChange }
                ></input>
                <input
                    type="text"
                    className="agregar__input"
                    placeholder="Costo"
                    name="costo"
                    value={ costo }
                    onChange={ handleInputChange }
                ></input>

                <button
                    type="submit"
                    className="btn btn-primary"
                >Agregar</button>
            </form>
            
        </div>
    )
}
