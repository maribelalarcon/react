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

    return (
        <CartContext.Provider value={{ items, addItem }} >
            {children}
        </CartContext.Provider>
    )
}