import { getFirestore } from '../service/firestore';
import firebase from 'firebase/app'
import 'firebase/firestore'


const db = getFirestore();

export const getProductos = (categoria) => new Promise((resuelto) => {

    const query = categoria ?
        db.collection("productos").where("categoria", "==", categoria) :
        db.collection("productos");

    query.get().then((querySnapshot) => {
        const productos = [];

        querySnapshot.forEach((doc) => {
            productos.push({
                id: doc.id,
                ...doc.data()
            })
        });

        resuelto(productos);
    });
});

export const getProducto = (idProducto) => new Promise((resuelto) => {
    db.collection("productos").doc(idProducto).get().then((doc) => {
        resuelto({
            id: doc.id,
            ...doc.data()
        })
    });
});

export const createOrder = (data) => {
    const orders = db.collection("ordenes");

    const itemIds = data.items.map(item => item.item.id);

    const items = db.collection("productos").where(firebase.firestore.FieldPath.documentId(), 'in', itemIds)

    const batch = db.batch();

    items.get()
        .then(collection => {

            collection.docs.forEach(docSnapshot => {
                const itemCarrito = data.items.find(item => item.item.id === docSnapshot.id);
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - itemCarrito.quantity
                })
            })

            batch.commit();
        })


    return orders.add({
        ...data,
        date: new Date()
    });
}