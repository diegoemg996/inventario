import React from 'react'

export const MostrarProductos = ({productos, setProductos}) => {

    const handleDelete = (e)=>{
        const deleteId = e.target.value;

        setProductos(
            productos.filter( producto =>(
               producto.id !== deleteId 
            )
            )
        )
    }

    return (
        <div>
           {productos.map(producto =>(
               <div key={producto.id}>
                   <p >{producto.nombre}</p>
                   <button
                    value={producto.id}
                    onClick={handleDelete}
                   >Eliminar</button>
               </div>
               
           ))}
        </div>
    )
}
