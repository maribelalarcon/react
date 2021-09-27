import { getFirestore } from '../service/firestore';

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