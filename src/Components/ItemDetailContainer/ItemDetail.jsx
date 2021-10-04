import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';

function ItemDetail({ producto }) {
    const [terminarCompra, setTerminarCompra] = useState(false)
    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        setTerminarCompra(true)
        addItem(producto, quantity);
    }

    return (
        <div className= 'card w-50'>
            <div className= 'card-header'>
                <label>{producto.nombre}</label>
            </div>
            <div className= 'card-body'></div>
            <img src={producto.url} alt={producto.nombre} className= "w-40"/>
            <br/>
            <label>{producto.descripcion}</label>
            <div className= 'card-footer'></div>
            <label>{producto.price}</label>

            {terminarCompra ? (
                <Link to='/cart' className='btn btn-dark'>
                    Terminar compra
                </Link>
            ) : (
                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}  />
            )}
        </div>
        
    )
}

export default ItemDetail;


