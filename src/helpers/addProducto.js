import { db } from '../firebase/firebase-config';

export const addProducto = async(producto) => {
    await db.collection('productos').doc(producto.name).set(producto);
}