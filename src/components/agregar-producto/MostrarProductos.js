import React from 'react'
import { deleteProducto } from '../../helpers/deleteProducto';

export const MostrarProductos = ({productos, setProductos}) => {

    const handleDelete = (e)=>{
        const deleteId = e.target.value;

        setProductos(
            productos.filter( producto =>(
               producto.id !== deleteId 
            ))
        )
        deleteProducto(deleteId)
    }

    return (
        <div>
           {productos.map(producto =>(
               <div key={producto.id}>
                   <p >{producto.producto}</p>
                   <button
                    value={producto.id}
                    onClick={handleDelete}
                   >Eliminar</button>
               </div>
               
           ))}
        </div>
    )
}
