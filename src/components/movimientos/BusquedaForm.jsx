import React from 'react'

export const BusquedaForm = ({busqueda, handleInputChange}) => {
    return (
        <div className="movimientos__busqueda-container">
            <button className="movimientos__busqueda"><i className="fas fa-search"></i></button>
            <input 
                type="text"
                className="movimientos__input-busqueda"
                onChange={handleInputChange}
                name="busqueda"
                value={busqueda}
                placeholder="Buscar por nombre"
            />
        </div>
    )
}
