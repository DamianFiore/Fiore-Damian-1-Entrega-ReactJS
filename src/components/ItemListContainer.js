import {ItemCount} from './ItemCount'

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
            <ItemCount inicial={propiedades.initial} stocky={propiedades.stock}/>
            <button type="button" class="comp btn btn-dark" href="productos.html">COMPRAR</button>
        </div>
    )
}