import React, {useEffect, useState} from 'react'
import { AgregarForm } from '../agregar-producto/AgregarForm'
import { db } from '../../firebase/firebase-config';


export const AgregarProducto = () => {

    const [productos, setProductos] = useState([])
   
    useEffect(() => {
        getProductos();
    }, [])

    const getProductos = ()=>{
        
        db.collection('usuarios')
            .onSnapshot(snap => {
                const productosArr = [];
                snap.forEach(snapHijo => {
                    productosArr.push({
                        id: snapHijo.id,
                        ...snapHijo.data()
                    })
                })
            setProductos(productosArr);
        })
    }
    return (
        <div className="container">
            <h1 className="text-center mt-5">Agregar Producto</h1>
            <AgregarForm/>

            {productos.map(producto => (
                <h1>si</h1>
            ))}
        </div>
    )
}
