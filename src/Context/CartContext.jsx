import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {

    const [items, setItems] = useState(defaultValue);

    const addItem = (item, quantity) => {

        const existente = items.find((i) => i.item.id === item.id);

        console.log("addItem", item, quantity)

        if (existente) {
            // El producto ya existe en el carrito
            const newItems = [...items];
            const indice = newItems.findIndex((i) => i.item.id === item.id);
            newItems[indice].quantity += quantity;
            setItems(newItems);
        } else {
            // El producto no existe en el carrito
            setItems([...items, { item, quantity }])
        }
        
    }
    //Elimina del carrito
    const deleteItem = (item) => {
        const eliminarProducto = items.filter((prod) => prod.item.id !== item.item.id);
        setItems([...eliminarProducto]);
    } ;

    const itemCount = items.reduce((acum, valor) => acum + valor.quantity, 0);

    const cartTotal = items.reduce((total, item) => {
        return total + (item.item.price * item.quantity);
    }, 0);
    
    return (
        <CartContext.Provider value={{ 
            items, 
            addItem,
            deleteItem,
            itemCount,
            cartTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}