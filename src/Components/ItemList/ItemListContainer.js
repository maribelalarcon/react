import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProductos } from '../../utils/promesas';
import { useParams } from 'react-router-dom';
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
        <div>
            {items ? <ItemList items={items} /> : "Cargando..."}
        </div>
    )
}
export default ItemListContainer;
