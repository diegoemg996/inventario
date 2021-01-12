import { db } from '../firebase/firebase-config';

export const updateProducto = (id, newData)=>{
    db.collection('productos').doc(id).update(newData);
    
}