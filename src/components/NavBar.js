import { CartWitget } from "./CartWidget"

export const NavBar = () => {
    return(
        <nav>
            <CartWitget/>
            <a href="/">INICIO</a>
            <a href="/productos">PRODUCTOS</a>
            <a>TIENDA</a>
            <a>CONTACTO</a>
        </nav>
    )
}