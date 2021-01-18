import React, { useState } from 'react'
import { updateProducto } from '../../helpers/updateProducto';
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom';

export const EditarForm = ({data}) => {

    const [error, setError] = useState(false);

    const history = useHistory();

    const {id: uId, producto: uProducto, cantidad: uCantidad, bodega: uBodega} = data;
    const[formValues, handleInputChange, reset] = useForm({
        producto: uProducto,
        cantidad: uCantidad,
        bodega: uBodega
    })

    let {producto, cantidad, bodega} = formValues;


    const handleUpdate = (e)=>{
        if(error){
            setError(true);
        }else{
            setError(false)
            e.preventDefault();
            const toNumber = parseInt(cantidad, 10);
            const addItem = {...formValues, cantidad: toNumber};
            updateProducto(uId,addItem);
            history.push('/agregar-producto') 
        }
    }


    return (
        <div>
            <form 
                className="agregar__form" 
                onSubmit={handleUpdate}
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
                    type="number"
                    className="agregar__input"
                    placeholder="Cantidad"
                    name="cantidad"
                    value={ cantidad }
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
                <button
                    type="submit"
                    className="btn btn-primary"
                >Editar</button>
            </form>

            {error && <p className="text-center mt-3">Ningun campo debe de estar vacio</p>}
            
        </div>
    )
}
