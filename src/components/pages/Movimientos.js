import React, { useEffect, useState } from 'react'
import { getProductos } from '../../helpers/getProductos';
import { useForm } from '../../hooks/useForm';
import { BusquedaForm } from '../movimientos/BusquedaForm';
import { TablaMovimientos } from '../movimientos/TablaMovimientos';

export const Movimientos = () => {

    const [productos, setProductos] = useState([]);
    const[formValues, handleInputChange] = useForm({
        busqueda: ""
    })

    const {busqueda} = formValues;
    
    useEffect(() => {
        getProductos(setProductos);
    }, [])

    return (
        <div className="container">
            <h2 className="text-center mt-5">Movimientos</h2>

            <BusquedaForm
                busqueda={busqueda}
                handleInputChange={handleInputChange}
            />

            <TablaMovimientos
                productos = {productos}
                busqueda={busqueda}
            />
        </div>
    )
}
