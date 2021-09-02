import React from 'react';

function Item({ item: { id, title, price } }) {
    return (
        <li>{ id }, { title }, { price }</li>
    )
}
export default Item;
