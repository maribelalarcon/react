import React, { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { CartContext } from '../../Context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { itemCount } = useContext(CartContext);

    if (itemCount === 0) {
        return null;
    }

    return(
        <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <Badge bg="danger">{itemCount}</Badge>
        </Link>
    )
};

export default CartWidget;