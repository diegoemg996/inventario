import React, { useState, useEffect } from 'react'
import { filterByBodega } from '../../helpers/filterByBodega'
import { filterByName } from '../../helpers/filterByName'
import { Entrada } from './Entrada'


export const TablaMovimientos = ({inputValues, productos}) => {
    
    const {busqueda, bodega} = inputValues;
    const [filtroProductos, setFiltroProductos] = useState(productos);

    useEffect(() => {
        let tempBusqueda = filterByBodega(bodega, productos);
        setFiltroProductos(filterByName(busqueda, tempBusqueda ))
        
    }, [busqueda, productos, bodega]);
 
    return (
        <>
            <div className="mostrar__table mt-5">
                <table className="table table-striped table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Bodega</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Movimientos</th>
                    </tr>
                </thead>
                <tbody >
                    {filtroProductos.map(producto => (
                        <Entrada
                            producto={producto}
                        />
                    ))}
                </tbody>
                </table>
            </div>
            </>
        )
}
