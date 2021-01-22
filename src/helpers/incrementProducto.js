import { db } from '../firebase/firebase-config';
import { firebase } from '../firebase/firebase-config';


export const incrementProducto = (id, value)=>{
    db.collection('productos').doc(id).update({
        cantidad: firebase.firestore.FieldValue.increment(value)
    });
    
}