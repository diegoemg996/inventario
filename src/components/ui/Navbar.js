import React from 'react'
import {
    Link
  } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar__nav bg-primary">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/">Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/rentabilidad">Rentabilidad</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/agregar-producto">Agregar Producto</Link>
                    </li>
                </ul>            
        </div>
    )
}
