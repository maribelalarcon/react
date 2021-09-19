import { useState } from 'react';
import {Link} from 'react-router-dom'
 
const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const handlerAdd = () => {
        if(count < stock) setCount(count + 1)   
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    const handlerOnAdd= () => {
        const continuar = window.confirm('Esta seguro');
        if (continuar) {
            onAdd(count)
            setCount(initial)
        }
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Compras</h5>
                <p className="card-text"> Agregar al Carrito</p>

                <button className="btn btn-primary btn-lg" onClick={handlerAdd}>+</button>
                <label>{count}</label>

                <button className="btn btn-secondary btn-lg" onClick={handlerRm}>-</button><br />
                <button className="btn btn-dark" onClick={handlerOnAdd}>Agregar</button>
            </div>

        </div>           
    )
}


export default ItemCount
