import React from 'react'

export const RentabilidadForm = () => {
    return (
        <>
          <form className="rentabilidad__form">
              
              <div className="rentabilidad__formcontainer">
                <input
                    className="rentabilidad__input"
                    placeholder="Remision"
                ></input>
                <input
                    className="rentabilidad__input"
                    placeholder="Cliente"
                ></input>
                <input
                    className="rentabilidad__input"
                    placeholder="Codigo"
                ></input>
                <input
                    className="rentabilidad__input"
                    placeholder="Producto"
                ></input>
                <input
                    className="rentabilidad__input"
                    placeholder="Linea"
                ></input>
                <input
                    className="rentabilidad__input"
                    placeholder="Cantidad"
                ></input>
                <input
                    className="rentabilidad__input"
                    placeholder="Precio"
                ></input>

              </div>
              <div className="rentabilidad__button">
                <button className="btn btn-primary">Agregar</button>
              </div>
          </form>
        </>
    )
}
