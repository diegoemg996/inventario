import React, {useEffect, useState} from 'react'
import { getProductos } from '../../helpers/getProductos'
import { AgregarForm } from '../agregar-producto/AgregarForm'
import { MostrarProductos } from '../agregar-producto/MostrarProductos'


export const AgregarProducto = () => {

    const [productos, setProductos] = useState([])
   
    useEffect(() => {
        getProductos(setProductos);
    }, [])

    return (
        <div className="container">
            <h1 className="text-center mt-5">Agregar Producto</h1>
            <AgregarForm/>

            <MostrarProductos
                productos={productos}
                setProductos={setProductos}
            />
        </div>
    )
}
