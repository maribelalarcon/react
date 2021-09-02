import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

const ITEMS = [
    { id: 1, title: "Remera", description: "", price: 100, pictureUrl: "" },
    { id: 2, title: "Pantalon", description: "", price: 200, pictureUrl: "" },
    { id: 3, title: "Zapatilla", description: "", price: 600, pictureUrl: "" },
    { id: 4, title: "Remera", description: "", price: 100, pictureUrl: "" },
    { id: 5, title: "Remera", description: "", price: 100, pictureUrl: "" },
    { id: 6, title: "Remera", description: "", price: 900, pictureUrl: "" }
]

function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ITEMS), 2000);
    });
}


function ItemListContainer(props) {

    const [items, setItems] = useState(null);

    useEffect(() => {
        getItems().then((items) => {
            setItems(items);
        })
    }, [])

    return (
        <div>
            <p className="Parrafo">{props.greetings}</p>
            {items ? <ItemList items={items} /> : "Cargando..."}
        </div>
    )
}
export default ItemListContainer;
