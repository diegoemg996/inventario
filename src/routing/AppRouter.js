import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AgregarProducto } from '../components/pages/AgregarProducto';
import { EditarProducto } from '../components/pages/EditarProducto';
import { Movimientos } from '../components/pages/Movimientos';
import { Navbar } from '../components/ui/Navbar';

  
export const AppRouter = () => {
    return (
        <div className="router__container">
            <Router>
            <Navbar/>
            <div>
                <Switch>
                    <Route 
                        path="/agregar-producto"
                        component={ AgregarProducto }
                    />
                     <Route 
                        path="/movimientos"
                        component={ Movimientos }
                    />
                    <Route 
                        path="/editar/:id"
                        component={ EditarProducto }
                    />
                    <Route 
                        path="/"
                        component={ Movimientos }
                        exact
                    />
                </Switch>
            </div>
        </Router>
        </div>
      )
  }
  