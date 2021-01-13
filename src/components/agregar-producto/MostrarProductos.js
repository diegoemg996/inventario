import React from 'react'
import { deleteProducto } from '../../helpers/deleteProducto';
import { updateProducto } from '../../helpers/updateProducto';

export const MostrarProductos = ({productos,
     setProductos, 
     editar, 
     setEditar, 
     activeProduct, 
     setActiveProduct}) => {

    const handleDelete = (e)=>{
        const deleteId = e.target.value;

        setProductos(
            productos.filter( producto =>(
               producto.id !== deleteId 
            ))
        )
        deleteProducto(deleteId)
    }

    const toUpdate = ()=>{
        const toUpdateItem = productos.filter(producto => (
            producto.id === editar.id
        ))
        setActiveProduct({...toUpdateItem})
        console.log(activeProduct)
    }

    const handleUpdate = (e)=>{
        setEditar({...editar, estado:true, id:e.target.value});
        console.log(editar);
        toUpdate();
    }

    return (
        <div>
            <table className="table table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Bodega</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => (
                    <tr key={producto.id}>
                        <td>{producto.producto}</td>
                        <td>{producto.bodega}</td>
                        <td>{producto.cantidad + " kgs"}</td>
                        <td>
                            <button 
                                className="btn btn-outline-primary"
                                value={producto.id}
                                onClick={handleUpdate}
                            >Editar</button>   
                            <button 
                                className="btn btn-outline-danger"
                                value={producto.id}
                                onClick={handleDelete}
                            >Borrar</button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}
