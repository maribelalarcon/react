const productos = [
    {id: "1", URL: "https://cdn.shopify.com/s/files/1/0430/9594/9479/products/33_1200x.jpg?v=1604407173", descripcion: "Su corte ajustado y el pretina elastizada te permiten moverte con libertad", nombre: "Calza CROSS", price: 4.960 },
    {id: "2", URL: "https://cdn.shopify.com/s/files/1/0430/9594/9479/products/67_f9691200-d904-40cb-9cc0-a395bbba93cf_1200x.jpg?v=1622551684" , descripcion: "Su corte ajustado y el pretina elastizada te permiten moverte con libertad", nombre: "Calza CROSS", price: 4.000 },
    {id: "3", URL: "https://cdn.shopify.com/s/files/1/0430/9594/9479/products/T-OHRELAXPINK-FT_1200x.jpg?v=1626804722", descripcion: "La misma remera te dice relax! Usala y dejate llevar por el comfort! Un jersey suave para esta remera cropped y amplia la hace un must!", nombre: "Remera OH RELAX PINK TEE", price: 3.630 }  
];

export const getProductos = new Promise((resuelto) => {
    setTimeout(() => {
        resuelto(productos)
    }, 2000);
});