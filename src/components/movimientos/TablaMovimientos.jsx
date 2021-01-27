import React, { useState, useEffect } from 'react'
import { filterByBodega } from '../../helpers/filterByBodega'
import { filterByName } from '../../helpers/filterByName'
import { incrementProducto } from '../../helpers/incrementProducto'
import { useForm } from '../../hooks/useForm'

export const TablaMovimientos = ({inputValues, productos}) => {
    
    const {busqueda, bodega} = inputValues;

    const[formValues, handleInputChange, reset] = useForm({
        cantidad: ""
    })

    const [filtroProductos, setFiltroProductos] = useState(productos);

    const [activeProduct, setActiveProduct] = useState({
        state: false,
        id: "",
        name: ""
    })

    const [inputError, setInputError] = useState(false);
  
    let {cantidad} = formValues;
    const {state, id, name} = activeProduct;

    useEffect(() => {
        let tempBusqueda = filterByBodega(bodega, productos);
        setFiltroProductos(filterByName(busqueda, tempBusqueda ))
        
    }, [busqueda, productos, bodega]);

    const handleItemSelected = (e)=>{
        const nameSelected = productos.filter ( producto => (producto.id === e.target.value) );
        setActiveProduct({
            state:true,
            id: e.target.value,
            name: nameSelected[0].producto
        })
    }

    const handleAdd = ()=>{
        if(cantidad <= 0){
            setInputError(true);
        }else{
            setInputError(false);
            incrementProducto(id, cantidad);
            reset();
        }
    }

    const handleMinus = ()=>{
        if(cantidad <= 0){
            setInputError(true);
        }else{
            setInputError(false);
            incrementProducto(id, -cantidad);
            reset();
        }
    }
 
    return (
        <>
            <div className="mt-5">
                
                {
                    state &&
                    <>
                        <h3 className="movimientos__selected">{name}</h3>
                            <input
                                className="movimientos__input"
                                type="number"
                                onChange={handleInputChange}
                                name="cantidad"
                                value={cantidad}
                            />
                            <button 
                                className="btn btn-primary movimientos__boton"
                                onClick={handleAdd}
                            ><i className="fas fa-plus"></i></button>
                            <button 
                                className="btn btn-danger"
                                onClick={handleMinus}
                            ><i className="fas fa-minus"></i></button>
                    </>
                }
            {
                inputError 
                    &&
                <p className="mt-1 movimientos__error">Deber ser un numero mayor a 0</p>
            }

            </div>
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
                        <tr 
                            key={producto.id}
                        >
                            <td>{producto.producto}</td>
                            <td>{producto.bodega}</td>
                            <td>{producto.cantidad + " kgs"}</td>
                            <td>
                                <button 
                                    className="btn btn-outline-primary"
                                    onClick={handleItemSelected}
                                    value={producto.id}
                                >Seleccionar</button>
                            </td>                        
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </>
        )
}
