import React, {useEffect, useState} from 'react'
import { getProductos } from '../../helpers/getProductos'
import { AgregarForm } from '../agregar-producto/AgregarForm'
import { MostrarProductos } from '../agregar-producto/MostrarProductos'


export const AgregarProducto = () => {

    const [activeProduct, setActiveProduct] = useState();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        getProductos(setProductos);
    }, [])

    return (
        <div className="container">

            <h2 className="text-center mt-5">Agregar Producto</h2>
            <AgregarForm
                activeProduct={activeProduct}
            />

            <MostrarProductos
                productos={productos}
                activeProduct={activeProduct}
                setProductos={setProductos}
                setActiveProduct={setActiveProduct}
            />
        </div>
    )
}
