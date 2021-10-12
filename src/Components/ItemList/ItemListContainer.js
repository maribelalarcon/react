import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProductos } from '../../utils/promesas';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './ItemListContainer.css';


function ItemListContainer(props) {

    const [items, setItems] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductos(id).then((items) => {
            setItems(items);
        })
    }, [id])

    return (
        <Container>
            <h1>Ropa deportiva</h1>
            {items ? <ItemList items={items} /> : "Cargando..."}
        </Container>
    )
}
export default ItemListContainer;
