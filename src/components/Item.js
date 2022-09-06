export const Item = ( {producto} ) => {

    return (
        <div>
            <img src={producto.imagen}/>
            <h3>{producto.nombre}</h3>
            <p>Precio: {producto.precio}</p>
        </div>
    )
}