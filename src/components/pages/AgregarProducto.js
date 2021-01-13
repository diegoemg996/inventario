import React, {useEffect, useState} from 'react'
import { getProductos } from '../../helpers/getProductos'
import { AgregarForm } from '../agregar-producto/AgregarForm'
import { MostrarProductos } from '../agregar-producto/MostrarProductos'


export const AgregarProducto = () => {

    const [productos, setProductos] = useState([])
    const [editar, setEditar] = useState({
        estado:false,
        data:{},
        id: ""

    });

    const [activeProduct, setActiveProduct] = useState({})
   
    useEffect(() => {
        getProductos(setProductos);
    }, [])

    return (
        <div className="container">
            {editar.estado
                ?
                <h2 className="text-center mt-5">Editar Producto</h2>
                :
                <h2 className="text-center mt-5">Agregar Producto</h2>
            }
            
            <AgregarForm
                editar={editar}
            />

            <MostrarProductos
                productos={productos}
                editar={editar}
                activeProduct={activeProduct}
                setProductos={setProductos}
                setEditar={setEditar}
                setActiveProduct={setActiveProduct}
            />
        </div>
    )
}
