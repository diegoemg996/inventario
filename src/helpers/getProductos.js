import { db } from '../firebase/firebase-config';

export const getProductos = () => {

    const productosArr = [];

    db.collection('usuarios')
        .onSnapshot(snap => {
            snap.forEach(snapHijo => {
                productosArr.push({
                    id: snapHijo.id,
                    ...snapHijo.data()
                })
            })
        })

    return productosArr;
}