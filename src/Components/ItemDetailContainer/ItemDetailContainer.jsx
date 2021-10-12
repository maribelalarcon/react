import React, { useState, useEffect } from 'react'
import { getProducto } from '../../utils/promesas'
import ItemDetail from '../ItemDetailContainer/ItemDetail';
import { useParams } from 'react-router-dom';
import { Spinner, Button } from 'react-bootstrap';

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
        <div className="p-5">
            {/* <>
                <Button variant="primary" disabled>
                    <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    <span className="visually-hidden">
                        {loading ? <h2> Cargando Productos</h2> : <ItemDetail producto={producto} /> }
                    </span>
                </Button>{' '}
            
            </> */}

            {loading ? <h2> Cargando Productos</h2> : <ItemDetail producto={producto} /> }
        </div>
    )
}
