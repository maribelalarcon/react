import React, { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { items, cartTotal, deleteItem } = useContext(CartContext);

    if (!items.length) {
        return (
            <>
                <h1>No hay productos en el carrito</h1>
                <p><Link to="/">Seguir comprando...</Link></p>
            </>
        )
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr>
                        <td>{item.item.nombre}</td>
                        <td>{item.quantity}</td>
                        <td>{item.item.price}</td>
                        <td>
                            <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteItem(item)} />
                        </td>
                    </tr>
                ))}
                <tr>
                    <td>TOTAL</td>
                    <td></td>
                    <td>{cartTotal}</td>
                </tr>
            </tbody>
        </Table>
    );
}


export default Cart;