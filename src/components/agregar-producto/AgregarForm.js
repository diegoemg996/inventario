import React, { useState } from 'react'
import { addProducto } from '../../helpers/addProducto';
import { useForm } from '../../hooks/useForm'

export const AgregarForm = () => {

    const [error, setError] = useState(false);

    const[formValues, handleInputChange, reset] = useForm({
        producto: "",
        cantidad: "",
        bodega: ""
    })

    let {producto, cantidad, bodega} = formValues;


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(producto === "" || cantidad < 0 || bodega === "" ){
            setError(true);
            return;
        }else{
            setError(false);
            const toNumber = parseInt(cantidad, 10);
            const addItem = {...formValues, cantidad: toNumber};
            addProducto(addItem);
            reset();
        }
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
                    placeholder="Producto"
                    name="producto"
                    value={ producto }
                    onChange={ handleInputChange }
                ></input>

                <input
                    type="text"
                    className="agregar__input"
                    placeholder="Bodega"
                    name="bodega"
                    value={ bodega }
                    onChange={ handleInputChange }
                ></input>

                <input
                    type="number"
                    className="agregar__input"
                    placeholder="Cantidad"
                    name="cantidad"
                    value={ cantidad }
                    onChange={ handleInputChange }
                ></input>
               
                <button
                    type="submit"
                    className="btn btn-primary"
                >Agregar</button>
            </form>

            {error && <p className="text-center mt-3">Ningun campo debe de estar vacio</p>}
            
        </div>
    )
}
