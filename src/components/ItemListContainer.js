import { useEffect, useState } from 'react'
import {ItemCount} from './ItemCount'
import { PedirDatos } from '../Helpers/PedirDatos'
import { Item } from './Item'

export const ItemListContainer = () => {
    
    const [productos,setProductos] = useState([])
    console.log(productos)

    useEffect(()=>{
        PedirDatos ()
            .then((res)=> {
                setProductos(res)
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(()=> {
                console.log("Fin del Proceso")
            })
    }, [])

    return(
        <div className='Lista'>
            <h2>Productos</h2>
            <hr/>
            { productos.map((pro) => <Item producto={pro} key={pro.id}/>)}
        </div>
    )
}