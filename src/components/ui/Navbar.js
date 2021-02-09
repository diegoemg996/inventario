import React from 'react'
import {
    Link
  } from "react-router-dom";

export const Navbar = () => {
    return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/movimientos">VYANA</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/movimientos">Movimientos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/agregar-producto">Agregar Producto</Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    )
}
