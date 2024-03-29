import { useState } from 'react';
import './ItemCount.css';
 
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
        <div className="ItemCount">
            <div className="ItemCount__buttons">
                <button className="btn btn-primary btn-lg" onClick={handlerAdd}>+</button>
                <label>{count}</label>
                <button className="btn btn-secondary btn-lg" onClick={handlerRm}>-</button>
            </div>
            <button className="btn btn-dark" onClick={handlerOnAdd}>Agregar</button>
        </div>
    )
}


export default ItemCount
