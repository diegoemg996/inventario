import { db } from '../firebase/firebase-config';

export const deleteProducto = (deleteId)=>{
    db.collection("productos").doc(deleteId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

