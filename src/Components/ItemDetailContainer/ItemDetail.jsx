import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

function ItemDetail({ producto }) {
    const [terminarCompra, setTerminarCompra] = useState(false)
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        setTerminarCompra(true)
        addItem(producto, quantity);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Img src={producto.url} />
                        <Card.Body>
                            <Card.Title>
                                ${producto.price}
                            </Card.Title>
                        </Card.Body>


                    </Card>
                </Col>
                <Col>
                    <h1>{producto.nombre}</h1>
                    <p>
                        {producto.descripcion}
                    </p>
                    {terminarCompra ? (
                            <Link to='/cart' className='btn btn-dark'>
                                Terminar compra
                            </Link>
                        ) : (
                            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}  />
                        )}
                </Col>
            </Row>
        </Container>
        
        
    )
}

export default ItemDetail;


