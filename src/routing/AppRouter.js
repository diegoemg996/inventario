import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AgregarProducto } from '../components/pages/AgregarProducto';
import { Rentabilidad } from '../components/pages/Rentabilidad';
import { Navbar } from '../components/ui/Navbar';


  
  export const AppRouter = () => {
      return (
        <Router>
            <Navbar/>
            <div>
                <Switch>
                    <Route 
                        path="/rentabilidad"
                        component={ Rentabilidad }
                    />
                    <Route 
                        path="/agregar-producto"
                        component={ AgregarProducto }
                    />
                </Switch>
            </div>
        </Router>
      )
  }
  