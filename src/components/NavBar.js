import { CartWitget } from "./CartWidget"

export const NavBar = () => {
    return(
        <nav>
            <CartWitget/>
            <a>INICIO</a>
            <a>PRODUCTOS</a>
            <a>TIENDA</a>
            <a>CONTACTO</a>
        </nav>
    )
}