import React from 'react';
import './ItemListContainer.css'

function ItemListContainer (props) {
    return (
        <div>
            <p className="Parrafo">{props.greetings}</p>
        </div>
    )
}
export default ItemListContainer;
