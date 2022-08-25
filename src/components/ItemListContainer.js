
export const ItemProducto = (propiedades) => {
    return(
        <div className="Items">
            <img src={propiedades.imagen} alt="cafecito"/>
            <br/>
            {propiedades.nombre}
            <br/>
            {propiedades.precio}
            <br/>
            {propiedades.cantidad}
            <br/>
            <button type="button" class="comp btn btn-dark" href="productos.html">COMPRAR</button>
        </div>
    )
}