import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom';


function ItemDetail({ producto }) {
    const [terminarCompra, setTerminarCompra] = useState(false)

    const onAdd = () =>{
        setTerminarCompra(true)
    }

    return (
        <div className= 'card w-50'>
            <div className= 'card-header'>
                <label>{producto.nombre}</label>
            </div>
            <div className= 'card-body'></div>
            <img src={producto.URL} alt={producto.nombre} className= "w-40"/>
            <br/>
            <label>{producto.descripcion}</label>
            <div className= 'card-footer'></div>
            <label>{producto.price}</label>

            {terminarCompra ? (
                <Link to='/cart' className='btn btn-dark'>
                    Terminar compra
                </Link>
            ) : (
                <ItemCount initial={1} stock={5} onAdd={onAdd}  />
            )}
        </div>
        
    )
}

export default ItemDetail;


