import React, { useState } from 'react'
import { RentabilidadForm } from '../rentabilidad/RentabilidadForm';

export const Rentabilidad = () => {

    const [showInput, setShowInput] = useState(false);
    return (
        <div className="container">
            <h1 className="text-center">Rentabilidad</h1>
            <div className="rentabilidad__nuevoViaje">
                <button
                    disabled={showInput}
                    className="btn btn-danger"
                    onClick={()=>{setShowInput(true)}}
                >Nuevo Viaje</button>            
            </div>
            {showInput
                &&
                <RentabilidadForm/>
            }
            
        </div>
    )
}
