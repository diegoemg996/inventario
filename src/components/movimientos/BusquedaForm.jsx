import React from 'react'

export const BusquedaForm = ({inputValues, handleInputChange}) => {

    const {busqueda, bodega} = inputValues;
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
                autocomplete="off"
            />

            <select 
                className="form-select form-select-sm mt-3 movimientos__select"
                name="bodega" 
                value={bodega}
                onChange={handleInputChange}
            >
                <option value="">-- Seleccione Bodega --</option>
                <option value="vitaminas">Vitaminas</option>
                <option value="rio alamo">Rio Alamo</option>

            </select>
        </div>
    )
}
