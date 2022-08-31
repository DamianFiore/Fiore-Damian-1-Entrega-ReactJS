import { AllProducts } from '../Datos/AllProducts'

export const PedirDatos = () => {
    return new Promise( (resolve,reject) => {

        setTimeout(()=> { resolve(AllProducts) },2000)    
    })
}    
