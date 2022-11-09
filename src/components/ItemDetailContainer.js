import { useEffect, useState } from 'react'
import { PedirDatos } from '../Helpers/PedirDatos'
import { Item } from './Item'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = ({Itemid}) => {
    
    const [UnicoItem,setItem] = useState(null)

    useEffect(()=>{
        PedirDatos ()
            .then((res)=> {
                setItem(res)
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(()=> {
                console.log("Fin del Proceso")
            })
    }, [])

    return(
        <div>
             {<ItemDetail UnicoItem={UnicoItem}/>}
        </div>
    )
}