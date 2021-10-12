import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Item({ item: { id, nombre, price, url, descripcion } }) {
    const history = useHistory();

    const onClick = () => {
        history.push(`/item/${id}`);
    }

    return (
        <Card onClick={onClick} style={{ cursor: 'pointer' }}>
            <Card.Img variant="top" src={url} />
            
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle>${price}</Card.Subtitle>
            </Card.Body>
        </Card>  
    )
}
export default Item;
