import { db } from '../firebase/firebase-config';

export const addProducto = async(producto) => {
    await db.collection('productos').add(producto)
}