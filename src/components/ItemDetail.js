export const ItemDetail = ( {UnicoItem} ) => {

    return (
        <div>
            <img src={UnicoItem.imagen}/>
            <h3>{UnicoItem.nombre}</h3>
            <p>Precio: {UnicoItem.precio}</p>
            <small>Stock disponible: {UnicoItem.stock}</small>
            <p>{UnicoItem.descripcion}</p>
        </div>
    )
}