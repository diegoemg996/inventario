import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TablaMovimientos = ({productos}) => {


    const[formValues, handleInputChange] = useForm({
        cantidad: ""
    })

    const [activeValues, setActiveValues] = useForm({
        state: false,
        activeId: ""
    })

    const {state, activeId, action} = activeValues;

    const {cantidad} = formValues;

    const handleAdd = (e)=>{
        console.log(e.target.attributes);
    }
 
    return (
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
                        onClick={handleAdd}
                    >
                        <td>{producto.producto}</td>
                        <td>{producto.bodega}</td>
                        <td>{producto.cantidad + " kgs"}</td>
                        <td>
                            <div className="">
                                <input 
                                    type="text" 
                                    className="movimientos__input"
                                    onChange={handleInputChange}
                                    name="cantidad"
                                    value={cantidad}
                                />
                                <button 
                                    className="btn btn-outline-primary"
                                    onClick={handleAdd}
                                >
                                <i className="fas fa-plus"></i></button>
                                <button className="btn btn-outline-danger"><i className="fas fa-minus"></i></button>
                            </div>
                        </td>                        
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        )
}
