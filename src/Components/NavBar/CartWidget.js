import React from 'react';
import { ReactComponent as IconoCarrito } from "./imagenCarrito.svg";
import './CartWidget.css';




const CartWidget = ()=> {
    return(
        <div>
           <IconoCarrito className="CartWidget-icon" />
          
        </div>
    )

};

export default CartWidget;