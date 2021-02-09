import React from 'react'
import { useLocation } from 'react-router-dom';
import { EditarForm } from '../agregar-producto/EditarForm';


export const EditarProducto = () => {
    const {state} = useLocation();
    const {producto} = state[0];

    return (
        <div className="container container-pages editar">
            <h2 className="text-center mt-5">{producto}</h2>
            <EditarForm
                data = {state[0]}
            />
        </div>
    )
}
