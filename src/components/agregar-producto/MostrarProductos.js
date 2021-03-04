import React, { useEffect, useState } from 'react'
import { deleteProducto } from '../../helpers/deleteProducto';
import { useHistory } from 'react-router-dom';
import { CSVLink } from "react-csv";
import { filterByBodega } from '../../helpers/filterByBodega';
import { filterByName } from '../../helpers/filterByName';

export const MostrarProductos = ({productos,setProductos, inputValues}) => {

    const {busqueda, bodega} = inputValues;

    const [filtroProductos, setFiltroProductos] = useState(productos);

    useEffect(() => {
        let tempBusqueda = filterByBodega(bodega, productos);
        setFiltroProductos(filterByName(busqueda, tempBusqueda ));        
    }, [busqueda, productos, bodega]);

    const  excelProductos = JSON.parse(JSON.stringify(filtroProductos));
    const history = useHistory()

    const handleDelete = (e)=>{
        const deleteId = e.target.value;
        
        setProductos(
            productos.filter( producto =>(
               producto.id !== deleteId 
            ))
        )
        deleteProducto(deleteId)
    }

    const handleUpdate = (e)=>{
        const itemSelected = handleSelectedItem(e.target.value);
        history.push(`/editar/${e.target.value}`, itemSelected)  
    }

    const csvData = excelProductos.map( producto =>{
        delete producto.id;
        delete producto.bodega;
        return producto; 
        
    })

    const handleSelectedItem = (id)=>{
        return productos.filter( producto =>(
            producto.id === id 
         ))
    }

    return (
        <div className="mostrar__table mt-5">
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Bodega</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody >
                {filtroProductos.map(producto => (
                    <tr key={producto.id}>
                        <td>{producto.producto}</td>
                        <td>{producto.bodega}</td>
                        <td>{producto.cantidad + " kgs"}</td>
                        <td>
                            <button 
                                className="btn btn-outline-primary boton"
                                value={producto.id}
                                onClick={handleUpdate}
                            >Editar</button>   
                            <button 
                                className="btn btn-outline-danger boton"
                                value={producto.id}
                                onClick={handleDelete}
                            >Borrar</button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
            </table>

            <CSVLink filename={"inventario.csv"} data={csvData}>Descargar</CSVLink>

        </div>
    )
}
