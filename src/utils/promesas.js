const RETRASO = 100;

const PRODUCTOS = [
    {id: "1", URL: "https://cdn.shopify.com/s/files/1/0430/9594/9479/products/33_1200x.jpg?v=1604407173", descripcion: "Su corte ajustado y el pretina elastizada te permiten moverte con libertad", nombre: "Calza CROSS", price: 4960, categoria: "calzas" },
    {id: "2", URL: "https://cdn.shopify.com/s/files/1/0430/9594/9479/products/67_f9691200-d904-40cb-9cc0-a395bbba93cf_1200x.jpg?v=1622551684" , descripcion: "Su corte ajustado y el pretina elastizada te permiten moverte con libertad", nombre: "Calza CROSS", price: 4000, categoria: "calzas" },
    {id: "3", URL: "https://cdn.shopify.com/s/files/1/0430/9594/9479/products/T-OHRELAXPINK-FT_1200x.jpg?v=1626804722", descripcion: "La misma remera te dice relax! Usala y dejate llevar por el comfort! Un jersey suave para esta remera cropped y amplia la hace un must!", nombre: "Remera OH RELAX PINK TEE", price: 3630, categoria: "remeras" }  
];

export const getProductos = (categoria) => new Promise((resuelto) => {
    const productos = categoria ? PRODUCTOS.filter(p => p.categoria === categoria) : PRODUCTOS;
    setTimeout(() => {
        resuelto(productos)
    }, RETRASO);
});

export const getProducto = (idProducto) => new Promise((resuelto) => {
    const producto = PRODUCTOS.find((p) => p.id === idProducto);
    setTimeout(() => {
        resuelto(producto)
    }, RETRASO);
});