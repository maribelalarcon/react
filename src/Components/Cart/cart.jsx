import React, { useContext, useState } from 'react';
import { CartContext } from "../../Context/CartContext";
import { Container, Row, Col, Table, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { createOrder } from '../../utils/promesas';

const Cart = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        email2: ""
    });

    const [error, setError] = useState("");
    
    const { items, cartTotal, deleteItem, vaciar } = useContext(CartContext);

    if (!items.length) {
        return (
            <>
                <h1>No hay productos en el carrito</h1>
                <p><Link to="/">Seguir comprando...</Link></p>
            </>
        )
    }

    const onChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (formData.email !== formData.email2) {
            setError("Los emails deben coincidir")
            return;
        } else {
            setError("");
        }

        const { nombre, telefono, email } = formData;

        createOrder({
            buyer: {
                nombre,
                telefono,
                email
            },
            items,
            total: cartTotal
        })
            .then(() => {
                alert("Tu orden se creo correctamente!");
                vaciar();
            })
            .catch(error => console.error(error));
    }

    return (
        <Container className="py-5">
            <Row>
                <Col>
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
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    {error ? <Alert variant="danger">{error}</Alert> : null}
                    <Form onChange={onChange} onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="text" placeholder="Telefono" name="telefono" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirmar Email</Form.Label>
                            <Form.Control type="email" placeholder="Escriba nuevamente su email" name="email2" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Terminar compra
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    );
}


export default Cart;