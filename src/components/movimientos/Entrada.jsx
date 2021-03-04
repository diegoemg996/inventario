import React, {useState} from 'react';
import { incrementProducto } from '../../helpers/incrementProducto'
import { useForm } from '../../hooks/useForm'


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
            {inputError && <p>Debe ser mayor a 0</p>}
        </td>                   
    </tr>
    )
}
