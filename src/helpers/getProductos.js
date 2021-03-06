import { db } from '../firebase/firebase-config';

export const getProductos = (setProductos) => {

    db.collection('productos')
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