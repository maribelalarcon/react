import React, { useState, useEffect } from 'react'
import { getProductos } from '../../utils/promesas'
import ItemDetail from '../ItemDetailContainer/ItemDetail';

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductos
            .then(respuestaProductos => {
                setProducto(respuestaProductos[0]);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            {loading ? <h2> Cargando Productos</h2> : <ItemDetail producto={producto} /> }
        </div>
    )
}
