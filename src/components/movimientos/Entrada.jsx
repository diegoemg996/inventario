import React, {useState} from 'react';
import { incrementProducto } from '../../helpers/incrementProducto'
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2'


export const Entrada = ({producto}) => {

    const[formValues, handleInputChange, reset] = useForm({
        cantidad: ""
    })

    let {cantidad} = formValues;

    const {id} = producto;

    const [inputError, setInputError] = useState(false);

    const handleAdd = ()=>{
        if(cantidad <= 0){
            setInputError(true);
            Swal.fire({
                title: 'Error',
                text: 'El numero debe ser mayor a 0',
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
        }else{
            setInputError(false);
            incrementProducto(id, cantidad);
            reset();
            Swal.fire({
                title: 'Modificación Hecha',
                text: `Se ha agregado ${cantidad} kgs a ${producto.producto}`,
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
        }
    }

    const handleMinus = ()=>{
        if(cantidad <= 0){
            setInputError(true);
            Swal.fire({
                title: 'Error',
                text: 'El numero debe ser mayor a 0',
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
        }else{
            setInputError(false);
            incrementProducto(id, -cantidad);
            reset();
            Swal.fire({
                title: 'Modificación Hecha',
                text: `Se ha disminuido ${cantidad} kgs a ${producto.producto}`,
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
        }
    }

    return (
    <tr 
        key={producto.id}
    >
        <td>{producto.producto}</td>
        <td>{producto.bodega}</td>
        <td>{producto.cantidad + " kgs"}</td>
        <td>
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
            ><i className="fas fa-plus"></i
            ></button>
            <button 
                className="btn btn-danger"
                onClick={handleMinus}
                ><i className="fas fa-minus"></i
            ></button>
        </td>                   
    </tr>
    )
}
