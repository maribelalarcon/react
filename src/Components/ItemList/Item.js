import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item: { id, nombre, price } }) {
    return (
        <li>
            <Link to={`/item/${id}`}>
                { nombre } ({ price })
            </Link>
        </li>
    )
}
export default Item;
