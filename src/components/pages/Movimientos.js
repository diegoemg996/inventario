import React, { useEffect, useState } from 'react'
import { getProductos } from '../../helpers/getProductos';
import { TablaMovimientos } from '../movimientos/TablaMovimientos';

export const Movimientos = () => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos(setProductos);
    }, [])

    return (
        <div className="container">
            <h2 className="text-center mt-5">Movimientos</h2>

            <TablaMovimientos
                productos = {productos}
            />
        </div>
    )
}
