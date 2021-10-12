import React from 'react';
import Item from './Item';
import {Row,Col,Card, Container } from 'react-bootstrap'

function ItemList({ items }) {
    return (
        <Row>
            { items.map(item => (
                <Col sm={4} style={{ marginBottom: 20 }}>
                    <Item key={item.id} item={item} />
                </Col>
            ))}
        </Row>
    )
}
export default ItemList;
