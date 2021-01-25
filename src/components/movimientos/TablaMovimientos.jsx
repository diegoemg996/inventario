import React, { useState, useEffect } from 'react'
import { filterByName } from '../../helpers/filterByName'
import { incrementProducto } from '../../helpers/incrementProducto'
import { useForm } from '../../hooks/useForm'

export const TablaMovimientos = ({productos, busqueda}) => {


    const[formValues, handleInputChange, reset] = useForm({
        cantidad: ""
    })

    const [filtroProductos, setFiltroProductos] = useState(productos);

    const [activeProduct, setActiveProduct] = useState({
        state: false,
        id: "",
        name: ""
    })
  
    let {cantidad} = formValues;
    const {state, id, name} = activeProduct;

    useEffect(() => {
        setFiltroProductos(filterByName(busqueda, productos));
    }, [busqueda, productos]);

    const handleItemSelected = (e)=>{
        const nameSelected = productos.filter ( producto => (producto.id === e.target.value) );
        setActiveProduct({
            state:true,
            id: e.target.value,
            name: nameSelected[0].producto
        })
    }

    const handleAdd = ()=>{
        incrementProducto(id, cantidad);
        reset();
    }

    const handleMinus = ()=>{
        incrementProducto(id, -cantidad);
        reset();
    }
 
    return (
        <>
            <div>
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

            </div>
            <div className="mostrar__table">
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
