import React, { useState } from 'react'
import { incrementProducto } from '../../helpers/incrementProducto'
import { useForm } from '../../hooks/useForm'

export const TablaMovimientos = ({productos}) => {


    const[formValues, handleInputChange, reset] = useForm({
        cantidad: ""
    })

    const [activeProduct, setActiveProduct] = useState({
        state: false,
        id: "",
        name: ""
    })
  
    let {cantidad} = formValues;
    const {state, id, name} = activeProduct;

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
                        <h3>{name}</h3>
                            <input 
                                className="agregar__input ml-5"
                                type="number"
                                onChange={handleInputChange}
                                name="cantidad"
                                value={cantidad}
                            />
                            <button 
                                className="btn btn-primary"
                                onClick={handleAdd}
                            ><i class="fas fa-plus"></i></button>
                            <button 
                                className="btn btn-danger"
                                onClick={handleMinus}
                            ><i class="fas fa-minus"></i></button>
                    </>
                }

            </div>

            <div className="mostrar__table">
                <table className="table table-striped table-hover mt-5 ">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Bodega</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Movimientos</th>

                    </tr>
                </thead>
                <tbody >
                    {productos.map(producto => (
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
