import React, { useEffect, useState } from 'react'
import { getProductos } from '../../helpers/getProductos';
import { useForm } from '../../hooks/useForm';
import { BusquedaForm } from '../movimientos/BusquedaForm';
import { TablaMovimientos } from '../movimientos/TablaMovimientos';

export const Movimientos = () => {

    const [productos, setProductos] = useState([]);
    const[formValues, handleInputChange] = useForm({
        busqueda: "",
        bodega: ""
    })
    
    useEffect(() => {
        getProductos(setProductos);
    }, [])

    return (
        <div className="container container-pages">
            <h2 className="text-center mt-5">Movimientos</h2>

            <BusquedaForm
                inputValues = {formValues}
                handleInputChange={handleInputChange}
            />

            <TablaMovimientos
                productos = {productos}
                inputValues = {formValues}
                handleInputChange={handleInputChange}
            />
        </div>
    )
}
