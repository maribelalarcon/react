

function ItemDetail({ producto }) {
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
        </div>
    )
}

export default ItemDetail;


