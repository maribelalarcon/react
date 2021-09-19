import React, { useState, useEffect } from 'react'
import { getProducto } from '../../utils/promesas'
import ItemDetail from '../ItemDetailContainer/ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        getProducto(id)
            .then(respuestaProducto => {
                setProducto(respuestaProducto);
                setLoading(false);
            })
    }, [id])

    return (
        <div>
            {loading ? <h2> Cargando Productos</h2> : <ItemDetail producto={producto} /> }
        </div>
    )
}
