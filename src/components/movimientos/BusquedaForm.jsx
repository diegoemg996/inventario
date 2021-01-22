import React from 'react'

export const BusquedaForm = ({busqueda, handleInputChange}) => {
    return (
        <div>
            <input 
                type="text"
                onChange={handleInputChange}
                name="busqueda"
                value={busqueda}
            />
            {busqueda}
        </div>
    )
}
