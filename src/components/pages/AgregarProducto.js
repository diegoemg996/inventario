import React, {useEffect, useState} from 'react'
import { getProductos } from '../../helpers/getProductos'
import { useForm } from '../../hooks/useForm'
import { AgregarForm } from '../agregar-producto/AgregarForm'
import { MostrarProductos } from '../agregar-producto/MostrarProductos'
import { BusquedaForm } from '../movimientos/BusquedaForm'


export const AgregarProducto = () => {

    const [activeProduct, setActiveProduct] = useState();
    const [productos, setProductos] = useState([]);
    const[formValues, handleInputChange] = useForm({
        busqueda: "",
        bodega: ""
    });
    
    useEffect(() => {
        getProductos(setProductos);
    }, [])

    return (
        <div className="container container-pages">

            <h2 className="text-center mt-5">Agregar Producto</h2>
            <AgregarForm
                activeProduct={activeProduct}
            />

            <BusquedaForm
                inputValues = {formValues}
                handleInputChange={handleInputChange}
            />

            <MostrarProductos
                productos={productos}
                activeProduct={activeProduct}
                setProductos={setProductos}
                setActiveProduct={setActiveProduct}
                inputValues = {formValues}
                handleInputChange={handleInputChange}
            />
        </div>
    )
}
