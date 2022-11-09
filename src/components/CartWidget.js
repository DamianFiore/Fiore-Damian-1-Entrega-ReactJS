import carro from '../carrito.png'

export const CartWitget = () => {
    return(
        <div className='carritodecompras'>
            <img src={carro} className="carro-logo" alt="carrito" />
            <h2>0</h2>
        </div>
    )
}